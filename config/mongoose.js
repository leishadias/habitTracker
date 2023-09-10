const mongoose = require('mongoose');
const env = require('./environment');

main().catch(err => console.log(err));
//connect
async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`);
}
//fetch connection
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
//open connection
db.once('open', function(){
    console.log('successfuly connected to db');
});

module.exports=db;