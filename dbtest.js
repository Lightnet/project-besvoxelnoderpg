const levelup = require('levelup')
const mongoDown = require('mongodown')
 
// Initialize Level
//const levelDB = levelup('localhost/voxel', {
    //db: mongoDown,
//})

const levelDB = levelup(mongoDown('localhost/voxel'));
// Initialize Gun
//const gun = new Gun({
    //level: levelDB,
    //file: false,
//})