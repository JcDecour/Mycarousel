$(document).ready(function() {
  var $carrousel = $('#carrousel'),
    $img = $('#carrousel img'),
    indexImg = $img.length - 1,
    i = 0,
    $currentImg = $img.eq(i);
  $img.css('display', 'none');
  $currentImg.css('display', 'block');

  $('.next').click(function() {
    if (i <= indexImg) {
      i++;
    } else {
      i = 0;
    }
    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');
  });

  $('.prev').click(function() {
    if (i > 0) {
      i--;
    } else {
      i = indexImg;
    }
    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');
  });

  function slideImg() {
    setTimeout(function() {

      if (i < indexImg) {
        i++;
      } else {
        i = 0;
      }

      $img.css('display', 'none');
      $currentImg = $img.eq(i);
      $currentImg.css('display', 'block');

      slideImg();
    }, 3000);
  }

  slideImg();

});
