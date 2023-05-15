$(document).ready(function () {
    if (window.innerWidth <= 768) {
        // Mobile-specific settings
  $('.slider').carousel({
          num: 3,
          maxWidth: 250,
          maxHeight: 200,
          distance: 60,
          scale: 0.7,
          animationTime: 800,
          showTime: 3000
        });
      } else {
        // Default settings for larger screens
       $('.slider').carousel({
          num: 5,
          maxWidth: 450,
          maxHeight: 300,
          distance: 50,
          scale: 0.6,
          animationTime:800,
          showTime: 4000
        });
      }
      

});