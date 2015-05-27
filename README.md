# Flipper Image Wheel
## JQuery plugin

Flipper is an very small JQuery plugin designed to display images in an easy way on the web. Where other image plugins are
difficult to install and configure Flipper offers an easy to setup solution. Flipper is still under development and more features will be added in the future.

In version 1.0 Flipper offers:

  - A nice configurable interface for the end-user to navigate among your images.
  - A selectable "lighthouse" feature that can enabled/ disabled
  - Easy to add images and implement them in the script
  - Possible to set the background opacity of the "lighthouse" effect

---

## Installation

The easiest way to install Flipper is to download the entire example from Github. The example contains a complete example of 
Flipper. All necessary files are included in the Zip-file. It is then very simple to implement the same functionality on the own homepage. It also possible to fetch only the plugin (jquery.flipper.js) and make all configurations manually.

The download contains:
- index.html
- flipper.css
- main.js
- jquery.flipper.js
- img/image01 ->


###Configuration JQuery

To run JQuery scripts on the homepage it has to support the JQuery language. It can be integrated on your page either by pointing out the master file on the JQuery homepage or by downloading it and store it on your own file system. The JQuery file should be implemented in the homepage *Header* element. 

```
<script src='http://code.jquery.com/jquery-1.11.0.min.js'></script>
alt:
<script src='js/jquery-1.11.3.min.js'></script>
```

The Flipper JQuery plugin also has to be linked to from the html code. The only thing that has to be done when it comes to configure and star the Flipper functionality is to start it from main.js and set preferred settings there. The plugin file  and main.js file should be linked last in the *Body* element.

```
<script src='js/jquery.flipper.js'></script>
<script src='js/main.js'></script>
```

In main.js the function that starts flipper has to be called with the user defined preferred choices. It's important that the images to use are stored in the "img" folder and named "image01.jpg" and onwards. The number of images to use by Flipper is set as the "numberImages" parameter. The "lightOn" parameter is used to enable (true) or disable (false) the "lighthouse" effect. The "fadeAmount" parameter is used to set the background opacity for the "lighthouse" effect.

```
$(window).ready(function(){
	'use strict';
	$(this).startFlipper({
		'numberImages': 5,
		'lightOn': true, 
		'fadeAmount': 8, 
	});
});
```

###Configuration HTML

The main structure of Flipper contains three boxes that each displays one image. The boxes are defined in the HTML code as "box1!, box2" and "box3". The smaller pictures used to show previous/ next picture and to navigate the carousel is box1 and box3. These two boxes are defined within a div-element called "smallBox" Box2, showing the main image, and "smallBox" are defined within a div-element called "wrapper".

```
<div class='wrapper'>
  <div class='smallBox'>
    <div class='box1'>
      <img class='image1'>
    </div>
    <div class='box3'>
      <img class='image3'>
    </div>
  </div>
  <div class='box2'>
    <img class='image2'>
  </div>
</div>
```

###Configuration CSS

For flipper to be displayed in the desired way on the homepage some CSS configuration setting has to be made. In the Flipper GIT package all settings are done in the file Flipper.css. Include this file on the own homepage by linking to Flipper CSS. The linking could be done either from the homepage *Header* element or by import it in the homepage default css file.

```
<link rel='stylesheet'href='css/flipper.css'>
```
or
```
@import url(flipper.css);
```

The size of the small images are set by altering the *height *values of box1, box3, image1 and image3.

```
.box1, .box3, .image1, .image3{
  width: 432px;
  height: auto;
}
```

The position of box1 and box3 and the relationship between the two are set by altering the box1 margins. The left margin controls the boxes distance to the left and the right margin controls the distance between the two boxes.

```
.box1{
  margin-right: 30px;
  margin-left: 30px;
  float:left;
}	
```

Box1 is automatically oriennted to the left. To get box3 oriented to the right it has to be set to *float* right.

```
.box3{
  float:right;
}
```

The settings for box2 (big image) are changed by setting values for box2 and image2. The settings allow the user to change the image size by setting the *width* parameter. It also allows the user to set the position by setting the *left* and *top* parameters. The values should be set in relation to the page upper left corner.

```
.box2, .image2{
  width: 768px;
  height: auto;
  margin: 0px auto;
  position: relative;
  z-index: 1;
  left: -10px;
  top: -20px;
}
```

The flipper.css file also contains settings for the "lighthouse" effect. The settings should normally be left as is.

