$(window).ready(function(){
		'use strict';
		 	
/*************************************************************
**
** Code to start the Flipper gallery and send user parameters
**
**************************************************************/


 	$(this).startFlipper({
 			
 			// Number of images stored in the 'img" folder. This value must correspond to the number of images in the slideshow.
 			'numberImages': 4,
 			
 			// This parameter turns on or off the gallery lightbox function. The value 'true' will enable the function and the value 'false' will diable it.
 			 'lightOn': true, 
 			 
 			 // Sets the opacity of the lightbox background. The value can be 0 - 10, higer value = darker background.
 			 'fadeAmount': 5, 
 
 	});
});
