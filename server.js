const mogoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const app = require('./app');

DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mogoose.connect(DB).then((con) => {
  console.log('DB Connected Successfully!');
});

app.listen(4000, '127.0.0.1', (req, res) => {
  console.log(`Listening On Port 4000`);
});
