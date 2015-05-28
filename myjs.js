

// JS USED BELOW CREATED FOR HELPMEWEB PROJECT


// SOME VARIABLES USED IN MULTIPLE FUNCTIONS
var btn;
var previous;
var content;


// TAB INFO CONTENT IS ADDED TO CONTENT_TEXT WHEN USER CLICKS ITEM
var camera_string = 	  "	<div id=\"content_camera\" class=\"content\"><p>To take a picture, click on the camera Icon in your applications list </p><p>	<img src=\"images/camera1.png\" alt=\"camera icon\" /></p>	<p>Then take a picture of anything you want.</p>	<p> <img src=\"images/camera2.png\" alt=\"camera image\" /></p>	<p>You can also take a video by switching to video mode. </p>	<p><img src=\"images/camera3.png\" alt=\"camera image\" /></p></div>	";

var wifi_string =  			"<div id=\"content_wifi\" class=\"content\">	<p>Go to Settings</p>	<p> <img  src=\"images/wifi1.png\" alt=\"wifi image\" /></p>		<p>Put Wi-Fi on</p>	<p> <img class=\"large_images\" src=\"images/wifi2.png\" alt=\"wifi image\" /></p>		<p>Choose your network and click on it</p>		<p>Enter your password</p>		<p>Click Connect</p>	<p> <img class=\"large_images\" src=\"images/wifi3.png\" alt=\"wifi image\" /></p>	</div>";


var socmed_string = 				"	<div id=\"content_socmed\" class=\"content\">	<p>There are many forms of social media</p>	<p>Below you will find three popular types</p>	<p>facebook - sharing info and pictures</p>		<p> <img class=\"large_images\" src=\"images/fb.gif\" alt=\"facebook image\" /></p>			<p>google + - like facebook but with google</p>		<p> <img class=\"large_images\" src=\"images/googleplus.png\" alt=\"google plus image\" /></p>					<p>Whatsapp - chat with anyone with an internet connection</p>		<p> <img class=\"large_images\" src=\"images/whatsapp.png\" alt=\"whatsapp image\" /></p>	</div>";


var sounds_string = "		<div id=\"content_sounds\" class=\"content\">	<p>Select Sound from settings</p>	<p>you can practice using sliders below</p>	<form>Volume: <input id=\"slider\" type=\"range\" name=\"points\" min=\"0\" max=\"10\"></form>	<p><img class=\"large_images\" src=\"images/sound1.png\" alt=\"sound icon\" /></p>		<p><img class=\"large_images\" src=\"images/sound2.png\" alt=\"sound icon\" /></p>	</div>";


var bluebiit_string = "			<div id=\"content_bluebiit\" class=\"content\">	<p>This app has been created for Bluebiit Oy</p>	</div>";


var icons_string = "	<div id=\"content_icons\" class=\"content\"><h2>DRAG ICON TO BOX</h2>	<div id=\"draggable\"  draggable=\"true\" ondragstart=\"drag(event)\"> </div><div id=\"droppable\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">  <p>Drop here</p></div>	</div> ";

$(document).ready(function(){

// LOCAL STORAGE VARIABLES SET
initLocalStorage();



$('.nav_button').click(function(event){

// ID OF BUTTON GRABBED
btn = jQuery(this).attr("id");


openDiv(btn);



});

});


function openDiv(btn){

$('#nav').css("display", "none");
var opener = "#content_" + btn;
 
// CHECKS IF BUTTON CLICKED IS A NAVBUTTON FOR CONTENT OR A BACK BUTTON FROM CONTENT
if(opener == "#content_back"){
readProgress(content);
back();
}
else{


// SWITCH ALLOWS TO DIFFERENTIATE BETWEEN CLICKS
switch(opener){

case "#content_browser":
content = opener;
saveProgress(opener);
opener = "#content_video";
$(opener).css("display", "block");
$('#video').attr("src", "video/browsers.mp4");

previous = opener;

break;

case "#content_icons":
content = opener;

opener = "#content_video";
$(opener).css("display", "block");

// VIDEOS SOURCE IS ADDED DEPENDING ON BUTTON CLICK
$('#video').attr("src", "video/icons.mp4");
$(opener).append(icons_string);


// ON CLICK LISTENER ADDED TO ENSURE BACK BUTTON FUNCTIONS EVEN FOR DYNAMICALLY ADDED DIVS
$(opener).on('click', '#back', function(e){

$(content).remove();

});





previous = opener;

break;

case "#content_accounts":
content = opener;
saveProgress(opener);
opener = "#content_video";
$(opener).css("display", "block");
$('#video').attr("src", "video/account.mp4");

previous = opener;

break;

case "#content_apps":
content = opener;
saveProgress(opener);
opener = "#content_video";
$(opener).css("display", "block");
$('#video').attr("src", "video/applications.mp4");

previous = opener;

break;


case "#content_gestures":
content = opener;
saveProgress(opener);
opener = "#content_video";
$(opener).css("display", "block");
$('#video').attr("src", "video/gestures.mp4");

previous = opener;

break;

case "#content_wallpaper":
content = opener;
saveProgress(opener);
opener = "#content_video";
$(opener).css("display", "block");

$('#video').attr("src", "video/wallpaper.mp4");


previous = opener;

break;

case "#content_camera":
saveProgress(opener);
content = opener;
opener = "#content_text";
$(opener).css("display", "block");
$(opener).append(camera_string);

$(opener).on('click', '#back', function(e){

$(content).remove();

});
previous = opener;
break;


case "#content_wifi":
saveProgress(opener);
content = opener;
opener = "#content_text";
$(opener).css("display", "block");
$(opener).append(wifi_string);

$(opener).on('click', '#back', function(e){

$(content).remove();

});
previous = opener;

break;

case "#content_socmed":
saveProgress(opener);
content = opener;
opener = "#content_text";
$(opener).css("display", "block");
$(opener).append(socmed_string);

$(opener).on('click', '#back', function(e){

$(content).remove();

});
previous = opener;

break;


case "#content_sounds":
content = opener;
opener = "#content_text";
$(opener).css("display", "block");
$(opener).append(sounds_string);

$(opener).on('click', '#back', function(e){

$(content).remove();

});

$(opener).on('change', '#slider', function(e){
if(this.value = 10){
saveProgress(content);

}

});
previous = opener;

break;

case "#content_bluebiit":
saveProgress(opener);
content = opener;
opener = "#content_text";
$(opener).css("display", "block");
$(opener).append(bluebiit_string);

$(opener).on('click', '#back', function(e){

$(content).remove();

});
previous = opener;

break;


default:
content = opener;
saveProgress(opener);
$(opener).css("display", "block");
previous = opener;



break;


}

}
}

function back(){

$(previous).css("display", "none");


$('#nav').css("display", "block");





}


// STANDARD DRAG AND DROP FUNCTIONS FROM W3SCHOOLS HTML DRAG & DROP FUNCTIONS
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	
	// ENSURES TASK IS ONLY CONSIDERED COMPLETE ONCE DRAG AND DROP IS DONE
	saveProgress("#content_icons");
}
  

  
  // ALLOWS PROGRESS TO BE SAVED
function saveProgress(content){
if (typeof(Storage) != "undefined") {

  switch(content){
  case "#content_accounts":
  
  localStorage.setItem("accounts", "true");
  break;
  case "#content_browser":
  
  localStorage.setItem("browser", "true");
  break;
   case "#content_camera":
  
  localStorage.setItem("camera", "true");
  break;
     case "#content_gestures":
  
  localStorage.setItem("gest", "true");
  break;
       case "#content_icons":
  
  localStorage.setItem("icons_video", "true");
  localStorage.setItem("icons_drag", "true");
  break;
       case "#content_wallpaper":
  
  localStorage.setItem("wallpaper", "true");
  break;
       case "#content_wifi":
  
  localStorage.setItem("wifi", "true");
  break;
       case "#content_socmed":
  
  localStorage.setItem("socmed", "true");
  break;
         case "#content_sounds":
  
  localStorage.setItem("sounds", "true");
  break;
           case "#content_bluebiit":
  
  localStorage.setItem("bluebiit", "true");
  break;
  
  }
  console.log("SOMETHING SAVED");
}

}


// LOCAL STORAGE INITIATION

function initLocalStorage(){
if (typeof(Storage) != "undefined") {


  
  localStorage.setItem("accounts", "false");


  
  localStorage.setItem("browser", "false");

  
  localStorage.setItem("camera", "false");

  
  localStorage.setItem("gest", "false");

  
  localStorage.setItem("icons_video", "false");
  localStorage.setItem("icons_drag", "false");

  
  localStorage.setItem("wallpaper", "false");

  localStorage.setItem("wifi", "false");

  
  localStorage.setItem("socmed", "false");

  
  localStorage.setItem("sounds", "false");

  
  localStorage.setItem("bluebiit", "false");

  
  
  
} 

}

// PROGRESS IS READ EACH TIME THE USER CLICKS BACK, THIS CHECKS IF THE TASK IS COMPLETED AND IF SO CHANGES COLOUR OF TAB
function readProgress(content){
if (typeof(Storage) != "undefined") {

  switch(content){
  case "#content_accounts":
  

  var status = localStorage.getItem("accounts");

  if(status == "true"){
  $('#accounts').css('backgroundColor', '#00FF00');
  }
  
  
  break;
  case "#content_browser":
  

   var status = localStorage.getItem("browser");
 if(status == "true"){
  $('#browser').css('backgroundColor', '#00FF00');
  }
	

  break;
   case "#content_camera":

  var  status = localStorage.getItem("camera");
 if(status == "true"){
  $('#camera').css('backgroundColor', '#00FF00');
  }
  break;
     case "#content_gestures":
  

  var    status = localStorage.getItem("gest");
 if(status == "true"){
  $('#gestures').css('backgroundColor', '#00FF00');
  }
  break;
       case "#content_icons":
  

  
  var status = localStorage.getItem("icons_video");
    if(status == "true"){
  $('#icons').css('backgroundColor', '#00FF00');
  }
   
   
  break;
       case "#content_wallpaper":
  

   var status = localStorage.getItem("wallpaper");
    if(status == "true"){
  $('#wallpaper').css('backgroundColor', '#00FF00');
  }
  break;
       case "#content_wifi":
  

   var  status = localStorage.getItem("wallpaper");
	  if(status == "true"){
  $('#wifi').css('backgroundColor', '#00FF00');
  }
  break;
       case "#content_socmed":
  

   var   status = localStorage.getItem("socmed");
	  
	   if(status == "true"){
  $('#socmed').css('backgroundColor', '#00FF00');
  }
  break;
         case "#content_sounds":

    var    status = localStorage.getItem("sounds");
		 if(status == "true"){
  $('#sounds').css('backgroundColor', '#00FF00');
  }
  break;
           case "#content_bluebiit":
  

    var   status = localStorage.getItem("bluebiit");
	   
	    if(status == "true"){
  $('#bluebiit').css('backgroundColor', '#00FF00');
  }
  break;
  
  }

 
} 

}

