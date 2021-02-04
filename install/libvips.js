const os = require('os');
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
function downloadDependency(name) {
  const child = require('child_process')
  if (platform === 'windows') {
  } else if (platform === 'linux') {
    child.execSync('sudo apt-get install ' + name, {stdio: 'inherit'});
  } else if (platform === 'osx') {
  }
}

downloadDependency('libvips-dev')
// downloadDependency('libjpeg-turbo8-dev')
// // downloadDependency('libjpeg-turbo-devel')
// downloadDependency('libexif-dev')
// // downloadDependency('libexif-devel')
// downloadDependency('giflib')
// downloadDependency('giflib-devel')
// downloadDependency('librsvg2')
// downloadDependency('librsvg2-devel')
// downloadDependency('libtiff')
// downloadDependency('libtiff-devel')
// downloadDependency('libwebp')
// downloadDependency('libwebp-devel')
// downloadDependency('libpng')
// downloadDependency('libpng-devel')
// downloadDependency('libgsf')
// downloadDependency('libgsf-devel')
// // https://github.com/bblanchon/pdfium-binaries
// downloadDependency('poppler-glib')
// downloadDependency('poppler-glib-devel')
// downloadDependency('openslide')
// downloadDependency('openslide-devel')
// downloadDependency('orc')
// downloadDependency('orc-devel')
// downloadDependency('libimagequant')
// downloadDependency('libimagequant-devel')
// downloadDependency('cfitsio')
// downloadDependency('cfitsio-devel')
// downloadDependency('matio')
// downloadDependency('matio-devel')
// downloadDependency('fftw')
// downloadDependency('fftw-devel')
// downloadDependency('libpangoft2-1.0-0')
// downloadDependency('libniftiio')
// downloadDependency('libniftiio-devel')
// downloadDependency('libopenexr-dev')
// // downloadDependency('libniftiio')
