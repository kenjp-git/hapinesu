//2021/01/03-10:46
//storage/emulated/0/ハピネス/scripts/SerialAnime.js

(function(){ 
let serial_style=`
#video_serial { 
	position: absolute; left: -65px; top: 157px;
	font-size: 8px;
	color: blue;
	opacity: 0.3;
	will-change: transform;
	/*animation-timing-function: linear;*/
	/*transition: all linear 60s;*/
	/*animation-delay: 0s;*/
	/*animation-iteration-count: 1;*/
	/*animation-duration: 120s;*/
	/*animation-direction: normal;*/
	/*animation-play-state: paused;*/
	/*animation-name: moveSerial;*/
	/*outline: 1px solid green;*/
}

@keyframes moveSerial {
	0% { }
	100% {
		/*transform: translate(400px, 0px);*/
		transform: translateX(400px);
	}
}
`;
hap_motion.applyCssDocToDOM(serial_style, basic_stylesheet);
}());



//first "Everytime you show your smile." //Eh eh!
var video_serial= document.getElementById('video_serial');
var serialAnime= ` 
	video_serial.style.transitionTimingFunction= 'linear';
	video_serial.style.transitionDuration= '170s';
	video_serial.style.transform= 'translate(500px, 0px)';
	//video_serial.style.animationName= 'moveSerial';
`;
hap_motion.addAnime('1:01.6', serialAnime);
