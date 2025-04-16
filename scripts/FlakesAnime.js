//2021/01/03-10:58
//storage/emulated/0/ハピネス/scripts/FlakesAnime.js

let flakes_style=`
#flakes_sky { 
	position: absolute; 
	width: 427px; height: 240px;
	outline: 0px solid yellow;
	transform-style: preserve-3d;
	perspective: 500px;
}

.flake { 
	position:absolute; top: -17px;
	animation-timing-function: linear;
	will-change: transform;
	/*perspective: 500;*/
	/*animation-delay: 0s;*/
	/*animation-duration: 2s;*/
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-play-state: paused;
	/*animation-name: rotate;*/
}

@keyframes fallFlake { 
	0% {transform: translateY(0px);}
	100%{transform: translateY(230px);}
}

@keyframes flake_rotateX { 
	0% {}
	100%{transform: translateY(230px) rotateX(720deg);}
}

@keyframes flake_rotateY { 
	0% {}
	100%{transform: translateY(230px) rotateY(-1080deg);}
}

@keyframes flake_rotateZ { 
	0% {}
	100%{transform: translateY(230px) rotateZ(-500deg);}
}

@keyframes flake_rotateXY { 
	0% {}
	100%{transform: translateY(230px) rotateX(180deg) rotateY(-360deg);}
}

@keyframes flake_rotateYZ { 
	0% {}
	100%{transform: translateY(230px) rotateY(360deg) rotateZ(-180deg);}
}

@keyframes flake_rotateZX { 
	0% {}
	100%{transform: translateY(230px) rotateZ(-720deg) rotateX(360deg);}
}

@keyframes flake_rotateXYZ { 
	0%{transform: 
		/*rotateX(deg) rotateY(deg) rotateZ(deg)*/
		/*translateY(0px);*/
	}
	50%{transform:
		/*translateY(50px)*/
		/*rotateX(180deg) rotateY(180deg) rotateZ(180deg);*/
	}
	100%{transform: 
		translateY(230px)
		rotateX(360deg) rotateY(360deg) rotateZ(360deg);
	}
}

@keyframes flake_2RotateReverse{ 
	0%{transform: 
		/*rotateX(deg) rotateY(deg) rotateZ(deg)*/
		/*translateY(0px);*/
	}
	50%{transform:
		/*rotateX(deg) rotateY(deg) rotateZ(deg)*/
	}
	100%{transform: 
		translateY(230px);
		/*rotateX(deg) rotateY(deg) rotateZ(deg)*/
	}
}
`;
hap_motion.applyCssDocToDOM(flakes_style, basic_stylesheet);



//third "La La La LaLa" //Everytime you show your smile"
var flakes= [ ];
var flake_imgs= 
[
'./MediBangPaint/1610625056257.png',
'./MediBangPaint/1610625042908.png',
'./MediBangPaint/1610624981376.png',
'./MediBangPaint/1610624968363.png',
'./MediBangPaint/1610624905843.png',
];
var flakes_sky= document.getElementById('flakes_sky');
var flakeAnimeNames= 
[
'flake_rotateX','flake_rotateY','flake_rotateZ',
'flake_rotateXY','flake_rotateYZ','flake_rotateZX',
'flake_rotateXYZ',
];
//flakes= BackAnime.getFlakes(); 
flakes= BackAnime.prepareFlakes(10, flake_imgs, flakes_sky, flakeAnimeNames);
logs2.textContent= getComputedStyle(flakes[0]).animationDuration;
var flakesAnime= `
	let flakeAnimeNum= flakeAnimeNames.length;
	let flake_sky_width= 420;
	function fallFlakes() { 
		let num= Math.floor(Math.random()*flakes.length);
		let posX= Math.floor(Math.random()*flake_sky_width)+'px';
		let curntFlakeStyle= getComputedStyle(flakes[num]);
		let flakeDur= curntFlakeStyle.animationDuration;
		//let flakeOwnAnime= curntFlakeStyle.animationName;
		let nextAnimeName= flakeAnimeNames[Math.floor(Math.random()*flakeAnimeNum)];
		//logs2.textContent= curntFlakeStyle.animationPlayState;
		if(curntFlakeStyle.animationPlayState == 'paused') { 
			flakes[num].style.left= posX;
			//flakes[num].style.animation= 'fallFlake '+flakeDur+','+nextAnimeName+' '+flakeDur;
			flakes[num].style.animationName= nextAnimeName;
			flakes[num].style.animationPlayState= 'running';
			//logs2.textContent= curntFlakeStyle.animationPlayState;
		}
		flakeTimer();
	}
	function flakeTimer() { 
		setTimeout(fallFlakes, 100);
		//var flakeID= setInterval(fallFlakes, 500);
	}
	flakeTimer();
`;
hap_motion.addAnime('3:01.4', flakesAnime);

//logs2.textContent= document.currentScript.src.split('/').pop().split('.')[0].toLowerCase()+ "_style";



