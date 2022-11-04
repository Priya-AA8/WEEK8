function showVideos() {
  $('#videos').empty();
  $.get("/videos", function (videos) {
    console.log("success loading videos");
    for (let i = 0; i < videos.length; i++) {
      let item = videos[i];
      $('#videos').append($('<li>').attr('id', 'Video' + item.id).html("<a href='" + item.url + "'>" + item.title + "</a> (" + item.duration + ")"));
    }
  })
    .fail(function () {
      console.log("error loading participants");
    });
}
