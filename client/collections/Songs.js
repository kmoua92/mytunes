// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.fetch();
  },

  fetch: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function(data) {
        this.reset(data.results);
      }.bind(this),
      error: function() {
        console.log('failed to fetch data');
      }
    });
  }

});