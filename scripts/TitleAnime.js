//2021/01/03-10:05
//storage/emulated/0/ハピネス/scripts/TitleAnime.js

(function(G) {
let title_style=` 
#title_frame { 
	position: absolute; left: 0px; top: 0px;
	width: 427px; height: 240px;
	visibility: visible;
	text-align: center;
	/*background: rgba(256,256,256,1)/*transparent;*//*#fff*/;
	transition: background ease 2s;
	/*outline: 5px solid green;*/
}

#frame_back { 
	position:absolute;
	width: 100%; height: 100%;
	background: #fff;/*linear-gradient(#fff, yellow);*/
	will-change: opacity;
	transition: opacity ease 2s;
}

#main_title { 
	position: relative; top: 50px;
	will-change: opacity;
	transition: opacity ease 1s;
}

#original { 
	position: relative; top: 0px;
	letter-spacing: 5px;
	color: #fff;
	opacity: 0;
	will-change: opacity;
	transition: opacity ease 1s;
}

#title { 
	position: relative; left: 0px; top: 0px;
	/*transform-origin: -50%, -50%;*/
	margin: 0 auto 0 auto;
	font-weight: bold;
	font-size: 39px;
	letter-spacing: 5px;
	color: #6FCDFF;
	text-shadow: 0 0 10px #6FCDFF;
	/*transition: all ease 5s;*/
}

#title_ver {
	font-size: 15px; 
	font-weight: bold;
	color: orange;
	text-shadow: 0 0 8px orange;
}

#maker { 
	letter-spacing: 0px;
	color: #fff/*yellow*/;
	opacity: 0;
	will-change: opacity;
	transition: opacity ease 1s;
}

.title_desc { 
	position: relative; top: 0px;
	font-size: 10px; letter-spacing:5px;
	color: #fff;
}

`;

//let stylesheet= G.styleTag
hap_motion.applyCssDocToDOM(title_style, basic_stylesheet);
}(this));


//title
var frame_back= document.getElementById('frame_back');
var title_frame= document.getElementById('title_frame');
var main_title= document.getElementById('main_title');
var original= document.getElementById('original');
var maker= document.getElementById('maker');
var titleAnime= ` 
	setTimeout(function() { 
		frame_back.style.opacity= '0';
		//title_frame.style.background= 'rgba(0,0,0,0.5)'/*'transparent'*/;
	}, 700);
	setTimeout(function() { 
		original.style.opacity= '1';
	}, 3300);
	setTimeout(function() { 
		maker.style.opacity= '1';
	}, 3300);
	setTimeout(function() { 
		main_title.style.opacity= '0';
		//main_title.style.transform= 'translate3d(0, -25px, 0)';
	}, 5900);
`;
hap_motion.addAnime('0:00.0', titleAnime);

//}());

