$(function() {
  $("a").click(function (e){ e.preventDefault(); window.location = $(this).attr("href"); });
});
