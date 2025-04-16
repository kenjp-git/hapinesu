//2021/01/03-10:45
//storage/emulated/0/ハピネス/scripts/StarsAnime.js

let stars_style=`
.star { 
	position: absolute; display: inline-block;
	background: radial-gradient(#fff 30%, #005DC8/*#006AE3/*#005DC8/*#B68700/*#D0AD00*/ 80%); 
	border-radius: 50%;
	box-shadow: 0 0 5px #005DC8;
	/*width: 5px; height: 5px; *//*animation:;*/
	/*animation-duration: 1s;*/
	animation-timing-function: ease;
	animation-delay: 0s;
	animation-iteration-count: infinite;
	animation-direction: normal;
	animation-name: blink_star;
	will-change: animation, opacity, visibility;
}

@keyframes blink_star { 
	0% { opacity: 0.6; }
	50% { opacity: 1.0; }
	100% { opacity: 0.6; }
}
`;
hap_motion.applyCssDocToDOM(stars_style, basic_stylesheet);

//first "I don't have much time" //"Everytime you show your smile"
var stars= [ ];
var sky= document.getElementById('sky');
var frameStyle= getComputedStyle(frame, ' ');
//sky.style.width= frameStyle.width;//setProperty('width', '2020px'); //frame.style.getPropertyValue('width'));//'200px'; //frame.style.width;
//sky.style.height= frameStyle.height;//'200px';
var skyStyle= getComputedStyle(sky, ' ');
stars= BackAnime.prepareStars(150, skyStyle);//①

///logs.textContent= window.hasOwnProperty('getComputedStyle');//Object.getOwnPropertyNames(NetworkInformation.prototype);
//logs.textContent= NetworkInformation;//Object.getOwnPropertyNames(HTMLDivElement.prototype.constructor.prototype);//home.style.width;//getPropertyValue('width'); //Object.getOwnPropertyNames(CSSStyleDeclaration.prototype);//getComputedStyle('frame');//window.hasOwnProperty(getComputedStyle);//frameStyle.getPropertyValue('width');//stars[5]; //JSON.stringify(frame.classList[0]);  //JSON.stringify(stars[5].classList);
//logs.textContent= frameStyle.width;

///logs.textContent= Math.floor(Math.random()*parseInt(skyStyle.height))+"px";//skyStyle.width;//stars[5].style.left;//sky.style.width;
var starsAnime= `
	//star.style.height= parseInt(window.getComputedStyle(star, ' ').width) + "px";
	var starTimer= setInterval(function(total) { 
		var num= Math.floor(Math.random()*total);
		//stars[num].style.height= parseInt(getComputedStyle(stars[num], ' ').width) + "px";
		stars[num].style.visibility= 'visible'; //'translate('+posX+', '+posY+')';
	}, 600, stars.length);
	setTimeout(function() { 
		clearInterval(starTimer);
	}, 160000);  
`;
hap_motion.addAnime('0:20.9', starsAnime);
