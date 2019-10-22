

const schemas = require('../component/schemas');


function connection() {
  let mongoDB = 'mongodb://localhost/chilemasivo';   
  mongoose.set('debug', true);
  mongoose.connect(mongoDB, { useNewUrlParser: true })
    .then(() => {
      schemas.register();
      console.log('Mongoose successfuly connected to [%s]');
      debug('Mongoose successfuly connected to [%s]');
    })
    .catch((error) => {
      debug(error);
      console.log('Couldn\'t connect to database [%s]!');
    });
}
function disconnection() {
  mongoose.disconnect()
    .then(() => {
      console.log('Mongoose successfuly disconnected to [%s]');
    })
    .catch(() => {
      console.log('Error disconnect to database [%s]!');
    });
}
function getModel(modelo) {
  try {
    return mongoose.model(modelo);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getModel,
  connection,
  disconnection
}