const os = require('os');

function downloadDependency(name) {
    process.exec('sudo apt-get install ' + name,function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
}

downloadDependency('libjpeg-turbo')
downloadDependency('libjpeg-turbo-devel')
downloadDependency('libexif')
downloadDependency('libexif-devel')
downloadDependency('giflib')
downloadDependency('giflib-devel')
downloadDependency('librsvg2')
downloadDependency('librsvg2-devel')
downloadDependency('libtiff')
downloadDependency('libtiff-devel')
downloadDependency('libwebp')
downloadDependency('libwebp-devel')
downloadDependency('libpng')
downloadDependency('libpng-devel')
downloadDependency('libgsf')
downloadDependency('libgsf-devel')
// https://github.com/bblanchon/pdfium-binaries
downloadDependency('poppler-glib')
downloadDependency('poppler-glib-devel')
downloadDependency('openslide')
downloadDependency('openslide-devel')
downloadDependency('orc')
downloadDependency('orc-devel')
downloadDependency('libimagequant')
downloadDependency('libimagequant-devel')
downloadDependency('cfitsio')
downloadDependency('cfitsio-devel')
downloadDependency('matio')
downloadDependency('matio-devel')
downloadDependency('fftw')
downloadDependency('fftw-devel')
downloadDependency('libpangoft2-1.0-0')
downloadDependency('libniftiio')
downloadDependency('libniftiio-devel')
downloadDependency('libopenexr-dev')
// downloadDependency('libniftiio')
