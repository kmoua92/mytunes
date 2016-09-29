// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // listen to changes in the queue
    // debugger;
    // this.on('change', function(event) {
    //   if (this.models.length === 0) {
    //     this.models[0].playFirst();
    //   } else {

    //   }
    // }, this);
  },

  add: function(song) {
    var s = new SongModel(song);
    this.models.push(s);
  },

  playFirst: function() {
    console.log('inside play first');
  }

});