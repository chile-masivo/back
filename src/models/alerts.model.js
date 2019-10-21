// alerts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const alerts = new Schema({
    user: {
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'users',
      required: false
    },
    url: {
      type: String,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('alerts');
  } catch (e) {
    return mongooseClient.model('alerts', alerts);
  }
};
