/**************************************************
**         FLIPPER JQUERY GALLERY PLUGIN         **
**         -----------------------------         **
** A JQuery plugin that offers the user a nice   **
** way to display images on the web. The plugin  **
** contains functionalies for image navigation   ** 
** and a configurable lightbox function.         **
**                                               **
****************************************************/

(function($, window) {
		
	// Create variables used by the plugin only
  var imageArray = []; // The array to store all images located in 'img' folder
  var window = this.window;

	// =============================================	
	// ==== Code to build and start the gallery ====
	// =============================================

	$.fn.startFlipper = function(options){                                         
  		options = $.extend({}, $.fn.startFlipper.defaults, options);
  		
  		
  		// Converts userfriendly fade setting to decimal value
  		if (options.fadeAmount){
  			options.fadeAmount = options.fadeAmount/10;
  			console.log(options.fadeAmount);
  		}

  // Fill the array with the images with correct location
  for (var i=0; i<options.numberImages; i++){
    imageArray[i] = "img/image" + (i+1) + ".jpg";
  }
  
  // Fill the boxes with images first time
  imagesInit();


  // Handling event when user click left box (move images left)
  $('.box3').on('click',
  
  
  function(e) {
    e.preventDefault()
    forwardImg();
    imagesInit();
  });

  // Handling event when user click right box (move images right)
  $('.box1').on('click',
  
  function(e) {
    e.preventDefault()
    backwardImg();
    imagesInit();
  });


  // Function to draw the images stored in array index 0,1 and 2
  function imagesInit(){
    $('.image1').attr('src', imageArray[0]); 
    $('.image2').attr('src', imageArray[1]);
    $('.image3').attr('src', imageArray[2]);
  }

  // Function to forward images in array index 0,1 and 2 one step 
  function forwardImg(){

    var tempImg = imageArray.shift();
    imageArray.push(tempImg);
  }

  // Function to decrease images in array index 0,1 and 2 one step 
  function backwardImg(){

    var tempImg = imageArray.pop();
    imageArray.unshift(tempImg);
  }
  
/**********************
** THE LIGHTBOX CODE ** 
***********************/

	// If lightbox shall be used add class "lightbox" to image2
	if (options.lightOn === true){
		$('.image2').attr('class', 'image2 lightbox');
	}
  
  // Construction making the lightbox work with IOS/ Android. The function is started by the user clicking one of the minimized images.
    $('.lightbox').click(function() {
    var windowHeigth = window.innerHeight || $(window).height(),
        windowWidth  = window.innerWidth  || $(window).width();

// Create the overlay div and append it to the page body. The overlay with opacity (60%) is faded in during 2 seconds.  
    $('<div id="overlay"></div>')
      .css('opacity', '0.0')
      .animate({'opacity' : options.fadeAmount}, 1000)
      .appendTo('body');

    
// The lightbox div is created and appended to the page body hidden.
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
    
// Displays the image clicked appended to the lightbox. The image is centered in the window by CSS and then faded in. 
    $('<img>')
      .attr('src', $(this).attr('src'))
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })
      .load(function() {
        $('#lightbox')
          .css({
            'top':  (windowHeigth - $('#lightbox').height()) / 2,
            'left': (windowWidth  - $('#lightbox').width())  / 2
          })
          .fadeIn(1000);
      })
      .appendTo('#lightbox');
      

 // When the user clicks the overlay or the maximized image both are removed.
      $('#overlay, #lightbox').click(function() {
        $('#overlay, #lightbox').remove();
        $('.wrapper').animate({'opacity' : '1.0'}, 1000);
      });
  });
  
console.log('Up n running');

	}
	
	
		// ====================================================================	
	// ==== Code to set default galley values if not received in call  ====
	// ====================================================================

  	$.fn.startFlipper.defaults = {
    'numberImages': 10, // Number of images in the "images" folder
    'lightOn': true, // Turns automatic change of images on/ off
    'fadeAmount': 0.8 // Sets the size of the main image
  }  
}) (jQuery);
