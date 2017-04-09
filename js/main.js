$(document).foundation();
// JavaScript Document

(function() {
	"use strict";
	console.log("ya found me...");

//variables
var mobile = 648;
var window_width = window.innerWidth;

var tablet = 1024;
var window_width = window.innerWidth;

var wtch = document.querySelector("#watch");
var title = document.querySelector(".con_title");
var sl = document.querySelector(".slideLeft");
var brth = document.querySelector("#breathe");
var wtchfce = document.querySelector(".watchface");
var wtchfce1 = document.querySelector("#watchface1");
var wtchfce2 = document.querySelector("#watchface2");
var wtchfce3 = document.querySelector("#watchface3");


//Functions
/*function init(){
document.querySelector("#wordDisplay").setAttribute("style", "display:block;");
}

function init1(){
document.querySelector("#wordDisplay").setAttribute("style", "display:none;");
}
*/

function init(){
document.querySelector("#watch").src = "images/models.jpg";
TweenMax.to(wtch,.5,{x:415, y:180, scale:3});
TweenMax.to(title,1,{x:-180, scale:2});
TweenMax.to(sl,1,{x:-180});
}

function init1(){
document.querySelector("#watch").src = "images/watch_edition.png";
TweenMax.to(wtch,.5,{x:0, y:0, scale:1});
TweenMax.to(title,1,{x:0, scale:1, color:"#666666"});
TweenMax.to(sl,1,{x:0});
}

function initt(){
document.querySelector("#watch").src = "images/models.jpg";
TweenMax.to(wtchfce1,.5,{scale:0});
TweenMax.to(wtchfce2,.5,{scale:0});
TweenMax.to(wtchfce3,.5,{scale:0});
TweenMax.to(wtch,.5,{x:360, y:180, scale:3});
TweenMax.to(title,1,{x:-140, scale:1});
TweenMax.to(sl,1,{x:-140});
}

function init1t(){
document.querySelector("#watch").src = "images/watch_edition.png";
TweenMax.to(wtchfce1,.5,{scale:1});
TweenMax.to(wtchfce2,.5,{scale:1});
TweenMax.to(wtchfce3,.5,{scale:1});
TweenMax.to(wtch,.5,{x:0, y:0, scale:1});
TweenMax.to(title,1,{x:0, scale:1, color:"#666666"});
TweenMax.to(sl,1,{x:0});
}

//

function wf1change(){
document.querySelector("#watchface1").src = "images/app.jpg";
}
function wf1change1(){
document.querySelector("#watchface1").src = "images/breathe.jpg";
}
function wf2change(){
document.querySelector("#watchface2").src = "images/app.jpg";
}
function wf2change1(){
document.querySelector("#watchface2").src = "images/breathe.jpg";
}
function wf3change(){
document.querySelector("#watchface3").src = "images/app.jpg";
}
function wf3change1(){
document.querySelector("#watchface3").src = "images/breathe.jpg";
}

//Listeners

if (window_width>mobile){

wtch.addEventListener("mouseover",initt,false);	
wtch.addEventListener("click",init1t,false);
}

if (window_width>tablet){

wtch.addEventListener("mouseover",init,false);	
wtch.addEventListener("click",init1,false);

}



wtchfce1.addEventListener("mouseover",wf1change,false);
wtchfce1.addEventListener("mouseout",wf1change1,false);
wtchfce2.addEventListener("mouseover",wf2change,false);
wtchfce2.addEventListener("mouseout",wf2change1,false);
wtchfce3.addEventListener("mouseover",wf3change,false);
wtchfce3.addEventListener("mouseout",wf3change1,false);

	
	
	
	
})();

//TweenMax.to(,,{});
//sVg greenock css3