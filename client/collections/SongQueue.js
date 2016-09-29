// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // listen to changes in the queue
    // debugger;
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    }, this);

    // listen to when song ends
    this.listenTo(this, 'ended', this.songEnded);

    this.listenTo(this, 'dequeue', this.songDequeued);
  },

  playFirst: function() {
    this.models[0].play();
  },

  songEnded: function() {
    this.remove(this.models[0]);
    if (this.models.length > 0) {
      this.playFirst();
    }
  },

  songDequeued: function() {
    this.remove();
  }

});