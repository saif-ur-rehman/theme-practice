(function($) {
  $(document).ajaxComplete(function (e) {



  });
  $(document).ready(function() {
    // back ground Image for Home Page top Region
  var img = $(".field-name-field-header-inage img").attr('src');
  // console.log(img);
  $('.full-bg-img').css({
    'background-image' : 'url("' + img + '")'
  });
  $('.full-bg-img').css({
    'background-size' : 'cover'
  });




 });
})(jQuery);
