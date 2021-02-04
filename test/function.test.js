const civalg = require('../build/Release/civalg')

civalg('./test/sea.jpg').thumbnail()
    .then(data => {
        console.info(data)
    })
