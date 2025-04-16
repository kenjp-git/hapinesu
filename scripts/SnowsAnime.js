//2021/01/03-10:50
//storage/emulated/0/ハピネス/scripts/SnowsAnime.js

let snows_style=`
.snow_sky { 
	position: absolute; left: 0px; top: 0px;
	width: 427px; height: 240px;
	padding: 0;
	outline: 0px solid green;
}

.snow { 
	position: absolute; top: -12px;
	display: inline-block; 
	/*top: -15px;*/
	/*visibility: visible;*/
	background: #fff; border-radius: 50%;
	/*width: 5px; height: 5px; *//*transition: all 2s ease;*/
	/*animation-duration: 3s;*/
	will-change: animation, transform/*, opacity, left, top*/;
	animation-timing-function: linear;
	animation-delay: 0s;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-play-state: paused;
	/*animation-name: snowFallAnime;*/
	/*transition: opacity ease 1s;*/
	/*opacity: 0;*/
	/*z-index: 1000px;*/
}

@keyframes snowFallAnime { 
	0% {/*visibility: visible; opacity: 0;*/ }
	/*5% {opacity: 1; }*/
	/*90% {opacity: 1; }*/
	100% {/*top: 240px; */transform: translateY(240px); /*visibility: hidden; opacity: 0;*/  /*animation-play-state: paused;*/}
}
`;
hap_motion.applyCssDocToDOM(snows_style, basic_stylesheet);



//The time that I was spending with you //Eh! Everywhere in the town is being shrouded with light. Oh! It's glittering.
var snows= [ ];
var sky= document.getElementById('snow_sky');;
var logs2= document.getElementById('logs2');
snows= BackAnime.prepareSnows(100, sky);
//snows= BackAnime.createManySnows(100);
//logs.textContent= JSON.stringify(snows[3].classList);
var increasing_SnowNum= 0;
var snowsFallAnime= `
	function fallSnows() {
	//var snowTimerID= setInterval(function() { 
		/*if(increasing_SnowNum < snows.length) { 
			increasing_SnowNum++;
			logs2.textContent= increasing_SnowNum + 'snows';
		}*/
		let num= Math.floor(Math.random()*snows.length/*increasing_SnowNum*/);
		let curnt_snow= snows[num];
		let sky_width= 420;
		let posX= Math.floor(Math.random()*sky_width/*parseInt(skyStyle.width)*/) + "px";
		var snowStyle= getComputedStyle(snows[num], ' ');
		if(snowStyle.animationPlayState == 'paused') { 
			//curnt_snow.style.opacity= '1';
			curnt_snow.style.left= posX;
			curnt_snow.style.animationPlayState= 'running';
			curnt_snow.style.animationName= 'snowFallAnime';
		}/*else if(snowStyle.animationPlayState == 'running') { 
			//curnt_snow.style.opacity= '0';
			//curnt_snow.style.visibility= 'hidden';
			curnt_snow.style.animationPlayState= 'paused';
			curnt_snow.style.animationName= 'none';
		}*/
		if(snowCallSpeed > 50) {snowCallSpeed= snowCallSpeed - 25;}
		snowFallTimer();
	//}, 100);
	}
	var snowCallSpeed= 1000;//default
	function snowFallTimer() { 
		setTimeout(fallSnows, snowCallSpeed);
	}
	snowFallTimer();
`;
hap_motion.addAnime('1:41.6', snowsFallAnime);
