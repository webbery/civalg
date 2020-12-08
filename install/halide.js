const os = require('os');
// const npmLog = require('npmlog');
const fs = require('fs');
const https = require('https')
const stream = require('stream');
const zlib = require('zlib');
// const tarFs = require('tar-fs');

const platform = (function () {
  const strPlatform = os.platform()
  switch (strPlatform) {
    case 'win32': return 'windows'
    case 'linux': return 'linux'
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
// get latest version
request.then((res) => {
  // console.info(typeof res, res['assets'])
  for (let asset of res['assets']) {
    const downloadUrl = asset['browser_download_url']
    if (downloadUrl.indexOf(platform) !== -1 && downloadUrl.indexOf(arch) !== -1) {
      // resolve(downloadUrl)
      return downloadUrl
    }
  }
}).then((downloadTar) => {
  if (!fs.existsSync('lib')) {
    fs.mkdirSync('lib')
  }
  console.info('download url: ', downloadTar)
  stream.pipeline(
    fs.createReadStream(downloadTar),
    new zlib.BrotliDecompress(),
    // tarFs.extract('lib'),
    function (err) {
      if (err) {
        if (/unexpected end of file/.test(err.message)) {
          // npmLog.error('sharp', `Please delete ${tarPath} as it is not a valid tarball`);
        }
        console.error('stream err', err)
        // fail(err);
      }
    }
  );
}).catch((err) => {
  console.error(err)
})

// const baseUrl = 'https://github.com/halide/Halide/releases/download/v10.0.0/Halide-10.0.0'
// const requestUrl = `${baseUrl}-${arch}-${platform}`;