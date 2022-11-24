// getting-started.js
const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect("mongodb://127.0.0.1/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
console.log("DB Connected")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = mongoDB