const sharp = require('sharp')
const civalg = require('../build/Release/civalg')

sharp('./test/sea.jpg').raw().toBuffer()
    .then(data=>{
        console.info(800*533*3, data.length)
        civalg.extractImageColors(800, 533, 3, data)
    })