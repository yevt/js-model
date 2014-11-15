Model = require('./js-model-0.11.0');

Model.Callbacks.on = Model.Callbacks.bind;
Model.Callbacks.off = Model.Callbacks.unbind;
Model.Callbacks.emit = Model.Callbacks.trigger;

module.exports = Model;