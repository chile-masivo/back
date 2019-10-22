const mongoose = require('mongoose');
const models = require('../config/schemas');
/**
 * Registers all schemas into the connection.
 *
 * @param {Object} db The database instance object.
 */
function register() {
  for (let name of Object.keys(models)) {
    mongosse.model(name, config.schemas[name]);
  }
}

module.exports = {
  register
};