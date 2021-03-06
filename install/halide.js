const os = require('os');
const npmLog = require('npmlog');
const fs = require('fs');
const path = require('path');
const https = require('https')
const stream = require('stream');
var URL = require('url')
const get = require('simple-get')
const zlib = require('zlib');
const tarFs = require('tar-fs');

const platform = (function () {
  const strPlatform = os.platform()
  console.info(strPlatform)
  switch (strPlatform) {
    case 'win32': return 'windows'
    case 'linux': return 'linux'
    case 'darwin': return 'osx'
    default: return 'unknow'
  }
})()
const arch = (function () {
  const strArch = os.arch()
  switch (strArch) {
    case 'x64': return 'x86-64'
    default: return 'unknow'
  }
})()

const defaultUrl = {
  'osx': '/halide/Halide/releases/download/v10.0.0/Halide-10.0.0-x86-64-osx-db901f7f7084025abc3cbb9d17b0f2d3f1745900.tar.gz',
  'windows':''
}
const tarPathCache = path.join('./', 'halide.tar.gz')

function Get(url) {
  let q = URL.parse(url, true);
  return new Promise((resolve, reject) => {
    const options = {
      protocol: 'https:',
      hostname: q.hostname,
      port: q.port,
      path: q.pathname,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0'
          // 'Content-Type': 'application/json',
          // 'Content-Length': data.length
      }
    };

    https.get(options, (response) => {
      let result = [];
      response.on('data', (chunk) => {
        result.push(chunk)
      })
      response.on('end', () => {
        npmLog.info('civalg', 'download finish')
        resolve(result)
      });

      response.on('error', (error) => {
        // promise rejected on error
        npmLog.error('civalg', error)
        reject(error);
      });
    });
  })
}
let request = new Promise((resolve, reject) => {
  const options = {
    protocol: 'https:',
    hostname: 'api.github.com',
    port: 443,
    path: '/repos/halide/Halide/releases/latest',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0'
        // 'Content-Type': 'application/json',
        // 'Content-Length': data.length
    }
  };

	https.get(options, (response) => {
    let result = [];
    response.on('data', (chunk) => {
      // console.info(chunk.length, chunk)
      result.push(chunk)
    })
    response.on('end', () => {
      // promise resolved on success
      let body = Buffer.concat(result)
      // console.info(body.toString())
			resolve(JSON.parse(body));
		});

		response.on('error', (error) => {
			// promise rejected on error
			reject(error);
		});
	});
});

function unzipHalide(filename) {
  stream.pipeline(
    fs.createReadStream(filename),
    new zlib.Gunzip(),
    tarFs.extract('.'),
    function(err) {
      if (err) {
        npmLog.error(err);
        return
      }
      fs.renameSync('Halide-10.0.0-' + arch + '-' + platform, 'Halide')
    }
  )
}
// get latest version
request.then((res) => {
  if (!fs.existsSync(tarPathCache)) {
    if (res['assets']) {
      for (let asset of res['assets']) {
        const downloadUrl = asset['browser_download_url']
        if (downloadUrl.indexOf(platform) !== -1 && downloadUrl.indexOf(arch) !== -1) {
          // resolve(downloadUrl)
          return downloadUrl
        }
      }
    }
    else {
      return defaultUrl[platform]
    }
  }
  return ''
}).then((downloadTar) => {
  // if (!fs.existsSync('Halide')) {
  //   fs.mkdirSync('Halide')
  // }
  if (!fs.existsSync(tarPathCache)) {
    const tmpFile = fs.createWriteStream(tarPathCache);
    npmLog.info('civalg', 'Downloading ' + downloadTar);
    get(downloadTar, function(err, res) {
      if(err) {
        console.error(err)
        throw err
      }
      if (res.statusCode !== 200) {
        npmLog.error('civalg', res.statusMessage)
        return
      }
      res.pipe(tmpFile)
    })
    tmpFile
    .on('error', function(){})
    .on('close', function(){
      npmLog.info('civalg', 'download halide finish')
      // extract tar
      unzipHalide(tarPathCache)
    })
  }
  else {
    unzipHalide(tarPathCache)
  }
}).catch((err) => {
  console.error(err)
})

// const baseUrl = 'https://github.com/halide/Halide/releases/download/v10.0.0/Halide-10.0.0'
// const requestUrl = `${baseUrl}-${arch}-${platform}`;