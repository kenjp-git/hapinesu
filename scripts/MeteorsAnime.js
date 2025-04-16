//2021/01/03-10:51
//storage/emulated/0/ハピネス/scripts/MeteorsAnime.js


let meteors_style=`
.meteors { 
	position: absolute; /*left: 300px;*/
	outline: 0px solid blue;
}

.meteor { 
	position: absolute; /*left: 500px; top: 0px;*/
	width: 50px; height: 20px;
	/*animation-timing-function: linear;
	animation-delay: 0s;
	animation-duration: 15s;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-play-state: paused;*/
	/*animation-name: metAnime;*/
	will-change: transform;
	transition: transform linear 3s;
	/*outline: 1px solid white;*/
}

.meteor1 { 
	position: absolute; left: 432px; top: 7px; 
	/*transition: transform linear 10s;*/
	/*width: 50px; height: 20px;*/
	/*outline: 1px solid red;*/
}

.meteor2 { 
	position: absolute; left: 432px; top: 52px; 
	/*width: 50px; height: 20px;*/
	/*outline: 1px solid blue;*/
}

.meteor3 { 
	position: absolute; left: 325px; top: -25px; 
	/*width: 50px; height: 20px;*/
	/*outline: 1px solid yellow;*/
}

.meteor4 { 
	position: absolute; left: 212px; top: -25px;
	/*outline: 1px solid violet;*/
}

@keyframes metAnime { 
	0% {/*top: -100px; left: 350px;*//* opacity: 1;*/}
	/*95% {opacity: 1;}*/
	100% {transform: translate(-375px, 150px); /*top:250px; left: -100px;*/ /*opacity: 1;*/}
}

.met_particl { 
	position: absolute; /*top: 20px;*/ 
	width: 3px; height: 3px;
	border-radius: 50%;
	background: #fff;
	will-change: animation, width, height, transform, opacity;
	animation-timing-function: ease-in;
	/*animation-delay: 0s;*/
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: normal;
	/*animation-play-state: paused;*/
	animation-name: particlAnime;
}

@keyframes particlAnime { 
	0% {/*left: 0px; top: 20px;*/transform: translate(0px, 20px); opacity: 1;}
	100% {/*left: 50px; top: 0px;*/transform: translate(50px, 0px); width: 2px; height: 2px; opacity: 0;}
}
`;
hap_motion.applyCssDocToDOM(meteors_style, basic_stylesheet);



//before second "Everytime you show your smile"  //Looking at everyone's smiles, 
var met1particls= [ ], met2particls= [ ], met3particls= [ ], met4particls= [ ];
const metParticlsNum= 15; var skyStyle= skyStyle;
var meteor1= document.getElementById('meteor1');
var meteor2= document.getElementById('meteor2');
var meteor3= document.getElementById('meteor3');
var meteor4= document.getElementById('meteor4');
//var meteors= [meteor1, meteor2, meteor3];
met1particls= BackAnime.prepMetParticles(metParticlsNum, meteor1);
met2particls= BackAnime.prepMetParticles(metParticlsNum, meteor2);
met3particls= BackAnime.prepMetParticles(metParticlsNum, meteor3);
met4particls= BackAnime.prepMetParticles(metParticlsNum, meteor4);
/*
for(let a=0; a < met1particls.length; a++) { 
	//met1particls[a].style.animationPlayState= 'running';
	//met1particls[a].style.animationName= 'particlAnime';
}
for(let a=0; a < met2particls.length; a++) { 
	//met2particls[a].style.animationPlayState= 'running';
	//met2particls[a].style.animationName= 'particlAnime';
}
for(let a=0; a < met3particls.length; a++) { 
	//met3particls[a].style.animationPlayState= 'running';
	//met3particls[a].style.animationName= 'particlAnime';
}
for(let a=0; a < met4particls.length; a++) { 
	//met4particls[a].style.animationPlayState= 'running';
	//met4particls[a].style.animationName= 'particlAnime';
}
*/
//var meteors= [meteor1, meteor2, meteor3];
//meteors= getElementById('meteors').chidren;
var meteorsAnime= `
	setTimeout(function() { 
		meteor1.style.transform= 'translate(-1000px, 400px)';
		meteor1.addEventListener('transitionend', function(e){
			if(e.propertyName == 'transform'){ 
				//meteor1.style.left= '427px';
				//meteor1.style.top= '5px';
				this.style.transitionTimingFunction= 'step-start';
				this.style.transform= 'translate(0px, 0px)';
				//this.style.transitionDuration= '1s';
			}
		});
		/*meteor1.addEventListener('transitionend', function(e){
			if(e.propertyName == 'transform'){ 
				this.style.transitionTimingFunction= 'linear';
				//this.style.transform= 'translate(0px, 0px)';
				//this.style.duration= '10s';
			}
		});*/
	}, 100);
	setTimeout(function() { 
		meteor2.style.transform= 'translate(-347.5px, 139px)';
		meteor2.addEventListener('transitionend', function(e){
			if(e.propertyName == 'transform'){ 
				this.style.transitionTimingFunction= 'step-start';
				this.style.transform= 'translate(0px, 0px)';
			}
		});
	}, 2600);
	setTimeout(function() { 
		meteor3.style.transform= 'translate(-1000px, 400px)';
		meteor3.addEventListener('transitionend', function(e){
			if(e.propertyName == 'transform'){ 
				this.style.transitionTimingFunction= 'step-start';
				this.style.transform= 'translate(0px, 0px)';
			}
		});
	}, 5200);
	setTimeout(function() { 
		meteor4.style.transform= 'translate(-347.5px, 139px)';
		meteor4.addEventListener('transitionend', function(e){
			if(e.propertyName == 'transform'){ 
				this.style.transitionTimingFunction= 'step-start';
				this.style.transform= 'translate(0px, 0px)';
			}
		});
	}, 7800);
	setTimeout(function() {
		//meteor1.style.left= '427px';
		//meteor1.style.top= '5px'; 
		/*meteor1.addEventListener('transitionend', function(e){
			if(e.propertyName == 'transform'){ 
				//this.style.transitionTimingFunction= 'linear';
				//this.style.transform= 'translate(0px, 0px)';
				//this.style.duration= '10s';
				//this.style.transitionDuration= '5000s';
				//meteor1.style.transform= 'translate(-500px, 200px)';
			}
		});*/
		meteor1.style.transitionDuration= '3s';
		meteor1.style.transitionTimingFunction= 'linear';
		meteor1.style.transform= 'translate(-1000px, 400px)';
	}, 10300);
	setTimeout(function() { 
		meteor2.style.transitionDuration= '3s';
		meteor2.style.transitionTimingFunction= 'linear';
		meteor2.style.transform= 'translate(-347.5px, 139px)';
	}, 13000);
	setTimeout(function() { 
		meteor3.style.transitionDuration= '3s';
		meteor3.style.transitionTimingFunction= 'linear';
		meteor3.style.transform= 'translate(-500px, 200px)';
	}, 15400);
	setTimeout(function() { 
		meteor4.style.transitionDuration= '3s';
		meteor4.style.transitionTimingFunction= 'linear';
		meteor4.style.transform= 'translate(-500px, 200px)';
	}, 18000);
`;
hap_motion.addAnime('2:23.8', meteorsAnime);



var styleRules= basic_stylesheet.cssRules;
var stopMetPartclsAnime= `
meteor1.style.display= 'none';
meteor2.style.display= 'none';
meteor3.style.display= 'none';
meteor4.style.display= 'none';
/*for(let num=0; num < styleRules.length; num++) { 
	if(styleRules[num].selectorText == '.met_particl') { 
		styleRules[num].style.setProperty('animation-name', 'none');
		styleRules[num].style.setProperty('animation-play-state', 'paused');
	}
}*/
`
hap_motion.addAnime('2:43.6', stopMetPartclsAnime);

//var meteorsAnime= `
	//var met1particlsID= setInterval(function() { 
		//let metIndx= Math.floor(Math.random()*meteors.length);
		//let particlIndx= Math.floor(Math.random()*meteors[metIndx].length);
		//let num= Math.floor(Math.random()*met1particls.length);
		//let particl= meteors[0][1]; //[metIndx][particlIndx];
		//var particlStyle= getComputedStyle(particl, ' ');
		//logs2.textContent= meteors[0][2]; //particlStyle.animationPlayState;
		//if(particlStyle.animationPlayState == 'paused') { 
			//met1particls[num].style.animationPlayState= 'running';
			//met1particls[num].style.animationName= 'particlAnime';
			//met1particls[num].style.visibility= 'visible';
		/*}else if(particlStyle.animationPlayState == 'running') { 
			//setTimeout(function() { 
				//meteor.style.opacity;
				//met1particls[num].style.animationPlayState= 'paused';
				//met1particls[num].style.animationName= 'none';
				//met1particls[num].style.visibility= 'hidden';
			//}, 10000);
		}*/
	//}, 100);
/*var met2particlsID= setInterval(function() { 
	let num= Math.floor(Math.random()*met2particls.length);
	met2particls[num].style.animationPlayState= 'running';
	met2particls[num].style.animationName= 'particlAnime';
}, 100);*/
/*var met3particlsID= setInterval(function() { 
	let num= Math.floor(Math.random()*met3particls.length);
	met3particls[num].style.animationPlayState= 'running';
	met3particls[num].style.animationName= 'particlAnime';
}, 100);*/
/*var met1timer= setTimeout(function() {clearInterval(met1particlsID); clearTimeout(met1timer);}, 100*metParticlsNum*3);
var met2timer= setTimeout(function() {clearInterval(met2particlsID); clearTimeout(met2timer);}, 100*metParticlsNum*3);
var met3timer= setTimeout(function() {clearInterval(met3particlsID); clearTimeout(met3timer);}, 100*metParticlsNum*3);
*/
//var meteorsAnime= `
	/*var meteorsTimeID= setInterval(function() { 
		var num= Math.floor(Math.random()*meteors.length);
		meteors[num].style.animationPlayState= 'running';
		meteors[num].style.animationName= 'metAnime';
	}, 200);*/
//`;
//hap_motion.addAnime('0:02.0', meteorsAnime);
