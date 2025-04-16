//2021/01/09-08:48
//LyricsAnime.js


(function() { 
let lyrics_style=` 
#home {
	position: absolute; top: 0px; /*50px;*/
	height: 200px; width: 370px; /*320px; */
	margin: 0 auto 0 50px;
	font-weight: bold;
	font-size: 15px;
	text-shadow: 0 0 15px #6FCDFF; /*#07CC00;#09FF00;*/
	padding: 0 0 0 5px;
	/*-webkit-text-stroke: 0.2px /*#FFD900;#00BD05;*/
	/*-webkit-fill: #FF0086;
	-webkit-stroke: #00BD05;
	-webkit-stroke-width: 2px;*/
	/*border: 2px solid black;*/
	/*overflow-y: hidden; /*本番ではhiddenにすべき*/
	/*overflow-x: hidden; /*ブラウザーでは下に変の線が現われる原因*/
	color: #6FCDFF;/*#FFB64D;/*#ABC6FF;*/
	/*background: #007CD1;*/
	/*z-index: 100;*/
	background: transparent;
	will-change: transform, /*scroll-position;*/ scrollTop/*, scrollOffset*/;
	/*box-shadow: 0 5px 1px 2px white inset;*/
}
`;

hap_motion.applyCssDocToDOM(lyrics_style, basic_stylesheet);
}());


var lyrics_home= document.getElementById('home');


var lyricsAnime=` 
lyrics_home.style.transitionDuration= '300s';
lyrics_home.style.transitionTimingFunction= 'linear';
lyrics_home.style.transform= 'translate3d(0, -2500px, 0)';
`;
hap_motion.addAnime('0:01.0', lyricsAnime);



