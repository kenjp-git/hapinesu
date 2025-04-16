//2021/01/17-17:05
//storage/emulated/0/ハピネス/scripts/2TreeLightsAnime.js

let tree_lights_style=`
#tree_top_star_light { 
	position: absolute; left: 36.7px; top: 127px;
	width: 25px; height: 25px;
	border-radius: 50%;
	box-shadow: 0 0 2px #fff;
	background: radial-gradient(yellow 80%, #fff 90%);
	opacity: 0.1;
	visibility: hidden;
}

#tree_top_star_ring { 
	position: absolute; left: 46.6px; top: 136.5px;
	width: 5px; height: 5px;
	border-radius: 50%;
	/*border: 5px solid yellow;*/
	border-style: solid;
	border-width: 0.3px;
	border-color: yellow; /*radial-gradient(#fff 0%, yellow 70%);*/
	background: transparent; /*radial-gradient(#fff 0%, yellow 70%);*/
	/*clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
	/*clip-path: polygon(2.5px 0px, 0.5px 5px, 5px 1.3px, 0px 1.3px, 3.7px 5px);*/
	/*clip-path: circle(10px at center) padding-box;*/
	box-shadow: 0 0 5px yellow, inset 0 0 1px yellow;
	visibility: hidden;
}

#inner_star { 
	position: absolute; left: 0%; top: 0%;
	width: 5px; height: 5px;
	clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
	background: radial-gradient(#fff 39%, yellow 70%);
}

#tree_topLight::before { 
	/*position: absolute;
	content: ' ';
	width: 100px; height: 100px;*/
	/*background: radial-gradient(#fff 0%, yellow 70%);*/
}

.tree_steady_lights, .tree_dynamic_lights { 
	position: absolute; left: 20px; top: 140px;
	width: 60px; height: 75px;
	/*visibility: visible;*/
	/*outline: 1px solid gray;*/
}

.tree_steady_light { 
	position: absolute; /*top: 0px;*/
	width: 2px; height: 2px;
	background: radial-gradient(#fff 45%, #FF9900 70%);/*#FFBB00;*/
	border-radius: 50%;
	box-shadow: 0 0 3px #FF9900; /*yellow;*/
	animation-duration: 10s;
	animation-timing-function: step(1);
	animation-delay: 0s;
	animation-iteration-count: 1;
	animation-direction: normal;
	visibility: hidden;
	/*animation-name: steady_light_anime;*/
	/*opacity: 0.5;*/
	/*transition: all 5s step(1) 0.99s;*/
}

.tree_dynamic_light { 
	position: absolute; /*top:100px;*/
	width: 2px; height: 2px;
	border-radius: 50%;
	animation-duration: 10s;
	animation-timing-function: step(1);
	animation-delay: 0s;
	animation-iteration-count: 1;
	animation-direction: normal;
	visibility: hidden;
	/*animation-name: color_light;*/
}

@keyframes steady_light_anime { 
	0% {visibility: hidden}
	20% {visibility: hidden}
	40% {visibility: hidden}
	60% {visibility: hidden}
	80% {visibility: hidden}
	90% {visibility: visible}
	100% {visibility: visible}
}

@keyframes red_lights_anime { 
	0% {visibility: hidden}
	20% {visibility: visible}
	/*25% {visibility: hidden}*/
	40% {visibility: hidden}
	60% {visibility: hidden}
	80% {visibility: hidden}
	90% {visibility: visible}
	100% {visibility: visible}
}

@keyframes green_lights_anime { 
	0% {visibility: hidden}
	20% {visibility: hidden}
	40% {visibility: visible}
	60% {visibility: hidden}
	80% {visibility: hidden}
	90% {visibility: visible}
	100% {visibility: visible}
}

@keyframes blue_lights_anime { 
	0% {visibility: hidden}
	20% {visibility: hidden}
	40% {visibility: hidden}
	60% {visibility: visible}
	80% {visibility: hidden}
	90% {visibility: visible}
	100% {visibility: visible}
}

@keyframes violet_lights_anime { 
	0% {visibility: hidden}
	20% {visibility: hidden}
	40% {visibility: hidden}
	60% {visibility: hidden}
	80% {visibility: visible}
	90% {visibility: visible}
	100% {visibility: visible}
}
`;
hap_motion.applyCssDocToDOM(tree_lights_style, basic_stylesheet);



//...Smiling again.....Hey!
var tree_steady_lights= [ ];
const steady_light_num= 27;
var treeSteadyLightsParent= document.getElementById('tree_steady_lights');
tree_steady_lights= BackAnime.prepareSteadyLights(steady_light_num, treeSteadyLightsParent);
var red_lights= [ ], green_lights= [ ], blue_lights= [ ], violet_lights= [ ];
var tree_top_star_light= document.getElementById('tree_top_star_light');
var tree_top_star_ring= document.getElementById('tree_top_star_ring');
const dynamic_light_num= 5;
var dynamicLightsParent= document.getElementById('tree_dynamic_lights');
red_lights= BackAnime.prepareDynamicLights('red_light', 'red', dynamic_light_num, dynamicLightsParent); //document.querySelectors('.red_light');
green_lights= BackAnime.prepareDynamicLights('green_light', '#05FF00', dynamic_light_num, dynamicLightsParent); //document.querySelectors('.green_light'), 
blue_lights= BackAnime.prepareDynamicLights('blue_light', '#00B9FF', dynamic_light_num, dynamicLightsParent); //document.querySelectors('.blue_light'), 
violet_lights= BackAnime.prepareDynamicLights('violet_light', '#EB70FF', dynamic_light_num, dynamicLightsParent); //document.querySelectors('orange_light'); 


var tree_lightsAnime= ` 
//...Smiling again.....Hey!
	setTimeout(function() { 
		tree_top_star_light.style.visibility= 'visible';
		tree_top_star_ring.style.visibility= 'visible';
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		} 
	}, 50);
// first "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 20600);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 20800);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 21400);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 22000);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 22700);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 23000);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 24900);
// second "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			//tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			//red_lights[b].style.visibility= 'hidden'; 
			//green_lights[b].style.visibility= 'hidden'; 
			//blue_lights[b].style.visibility= 'hidden'; 
			//violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 24700);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 25900);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 26500);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 27100);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 27800);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 28100);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 30000);
// third "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			//tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			//red_lights[b].style.visibility= 'hidden'; 
			//green_lights[b].style.visibility= 'hidden'; 
			//blue_lights[b].style.visibility= 'hidden'; 
			//violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 29800);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 31000);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 31600);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 32200);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 32900);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 33200);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 35100);
// forth "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			//tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			//red_lights[b].style.visibility= 'hidden'; 
			//green_lights[b].style.visibility= 'hidden'; 
			//blue_lights[b].style.visibility= 'hidden'; 
			//violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 34600);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 36100);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 36700);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 37300);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 38000);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 38300);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 40000);
//Eh eh!
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		} 
	}, 40600);
// fifth "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 68900);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 69600);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 70200);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 70800);
	setTimeout(function() { 
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 71500);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 71800);
	/*setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 40100);*/
`;
hap_motion.addAnime('3:07.1', tree_lightsAnime);
//logs.textContent= JSON.stringify(hap_motion.anime['0:05.0']);

//third "La La La LaLa"
var tree_2DynamicAnime= `
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 100);
	setTimeout(function() { 
		/*for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}*/
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 600);
	setTimeout(function() { 
		/*for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}*/
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 1200);
	setTimeout(function() { 
		/*for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}*/
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 1800);
	setTimeout(function() { 
		/*for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}*/
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 2500);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'visible';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'visible'; 
			green_lights[b].style.visibility= 'visible'; 
			blue_lights[b].style.visibility= 'visible'; 
			violet_lights[b].style.visibility= 'visible'; 
		}
	}, 2800);
	setTimeout(function() { 
		for(var a=0; a < steady_light_num; a++) { 
			tree_steady_lights[a].style.visibility= 'hidden';
		}
		for(var b= 0; b < dynamic_light_num; b++) { 
			red_lights[b].style.visibility= 'hidden'; 
			green_lights[b].style.visibility= 'hidden'; 
			blue_lights[b].style.visibility= 'hidden'; 
			violet_lights[b].style.visibility= 'hidden'; 
		}
	}, 4500);
`;
//hap_motion.addAnime('3:25.3', tree_2DynamicAnime);
//hap_motion.addAnime('3:30.5', tree_2DynamicAnime);
//hap_motion.addAnime('3:35.5', tree_2DynamicAnime);
//hap_motion.addAnime('3:40.7', tree_2DynamicAnime);

var tree_3DynamicAnime=` //Eh eh
	//tree_top_star_light.style.visibility= 'visible';
	//tree_top_star_ring.style.visibility= 'visible';
	for(var a=0; a < steady_light_num; a++) { 
		tree_steady_lights[a].style.visibility= 'visible';
	}
	for(var b= 0; b < dynamic_light_num; b++) { 
		red_lights[b].style.visibility= 'visible'; 
		green_lights[b].style.visibility= 'visible'; 
		blue_lights[b].style.visibility= 'visible'; 
		violet_lights[b].style.visibility= 'visible'; 
	} 
`;
//Eh eh
//hap_motion.addAnime('3:46.5', tree_3DynamicAnime);

