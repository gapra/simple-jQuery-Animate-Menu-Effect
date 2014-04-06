jQuery-Animate-Menu-Effect
========================
Create by [Gapra](http://www.gapraart.com)

[![jQuery animate menu effect](http://gapraart.com/demo/jquery-animate-menu-effect/screenshot.png "jQuery animate menu effect")](http://gapraart.com/demo/jquery-animate-menu-effect/)

## Requirement

jQuery (1.9.0 or later)

note: jQuery 1.9.0 or later is strongly recommended because using jQuery less than 1.8.3

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and smartphones have been tested. Not tested on IE.

## Sample Site
View demo site to view the result. See demo [here](http://gapraart.com/demo/jquery-animate-menu-effect/)

## HTML Structure
Load jQuery latest version *(1.9.0 or later)* and script.js on assets directory, eg:
```html
<script type="text/javascript" src="assets/scripts/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="assets/scripts/script.js"></script>
```
Write HTML structure for menu, eg:
```html
<------
<div class="menu">
	<ul>
		<li><a href="#" class="whoami">who am i</a></li>
		<li><a href="#" class="myworks">my works</a></li>
		<li><a href="#" class="blog">blog</a></li>
		<li><a href="#" class="contact">contact me</a></li>
	</ul>
</div>

<div id="awesome-menu">
	<a href="#awesome-menu" class="showmenu">menu</a>
	<a href="#awesome-menu" class="hidemenu">hide</a>
	<p>
		<span class="title-overlay show">Click menu to show effect</span>
		<span class="title-overlay hide">Click hide to hide menus</span>
	</p>
</div>
----->
```
You can modification animate on *script.js* in section
```javascript
$('.menu li a.whoami').animate({
	marginTop : '30px'
}, 400, function() {
	$('.menu li a.myworks').animate({
		marginTop : '30px'
	}, 400, function() {
		$('.menu li a.blog').animate({
			marginTop : '30px'
		}, 400, function() {
			$('.menu li a.contact').animate({
				marginTop : '30px'
			}, 400);
		});
	});
});
```
It's very simple
