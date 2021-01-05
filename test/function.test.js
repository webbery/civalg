const sharp = require('sharp')
const civalg = require('../build/Release/civalg')

sharp('./test/sea.jpg').raw().toBuffer()
    .then(data=>{
        console.info(800*533*3, data.length, typeof data)
        console.info(data)
        civalg.extractImageColors(800, 533, 3, data)
    })