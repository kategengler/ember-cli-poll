/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-poll',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/poll/dist/js/poll.js');
  }
};