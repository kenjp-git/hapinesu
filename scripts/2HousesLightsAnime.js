//2021/01/17-17:03
//storage/emulated/0/ハピネス/scripts/2HousesLightsAnime.js

let houses_lights=`
.houses_lights, .back_lights { 
	position: absolute; top: 150px; left: 0px;
	width: 100px; height: 60px;
	/*outline: 1px solid gray;*/
}

.back_light { 
	position: absolute; /*left: 0px;*/
	width: 7px; height: 7px;
	background: #89583E; /*#5E4B3D;*/
	visibility: visible;
	animation-duration: 5s;
	animation-timing-function: step(1);
	animation-delay: 0s;
	animation-iteration-count: 1;
	animation-direction: normal;
	/*opacity: 0.5;*/
}

.house_light { 
	position: absolute; /*left: 70px; top: 50px;*/
	width: 2px; height: 2px;
	background: yellow;
	box-shadow: 0 0 5px yellow;
	border-radius: 50%;
	visibility: hidden;
	animation-duration: 5s;
	animation-timing-function: step(1);
	animation-delay: 0s;
	animation-iteration-count: 1;
	animation-direction: normal;
	/*opacity: 0.5;*/
}
`;
hap_motion.applyCssDocToDOM(houses_lights, basic_stylesheet);



//Eh! Everywhere in the town is being 
const house_light_num= 25;
//var houses_lights= [ ];
var back_lights= [ ];
//var lights_parent= document.getElementById('houses_lights');
var back_lights_parent= document.getElementById('back_lights');
//houses_lights= BackAnime.prepareHousesLights(house_light_num, lights_parent);
back_lights= BackAnime.prepareBackLights(house_light_num, back_lights_parent);


var b_light_1= back_lights.slice(0, 3);
var b_light_2= back_lights.slice(3, 6);
var b_light_3= back_lights.slice(6, 8);
var b_light_4= back_lights.slice(8, 12);
var b_light_5= back_lights.slice(12, 14);
var b_light_6= back_lights.slice(14, 17);
var b_light_7= back_lights.slice(17, 22);
var b_light_8= back_lights.slice(22, 25);


var houses_lightAnime= ` 
//Eh! Everywhere in the town
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 150);
//Every time you show your smile
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//houses_lights[a].style.visibility= 'visible';
			back_lights[a].style.background= '#89583E';
		}
	}, 23000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//houses_lights[a].style.visibility= 'visible';
			back_lights[a].style.background= 'yellow';
		}
	}, 23650);
// Eh eh!
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 25300);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 25500);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 25700);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 26100);
//then everywhere in this world
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 26100);
//(more) more, more and more 
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 27300);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 27500);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 27800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	},28200);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 28400);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 28600);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 28800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 29100);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 29500);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 30100);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 33100);
//Everytime time...
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//houses_lights[a].style.visibility= 'visible';
			back_lights[a].style.background= 'yellow';
		}
	}, 33850);
// Eh eh!
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 35400);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 35600);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 35800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 36200);
// then everything will get better
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//houses_lights[a].style.visibility= 'visible';
			back_lights[a].style.background= 'yellow';
		}
	}, 36400);
// Holding my hands
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 38200);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 38400);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 38600);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 38800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 39000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//back_lights[a].style.background= '#89583E';
		}
	}, 39400);
// Holding your hands
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 39500);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 39700);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 39900);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 40100);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 40300);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 40700);
// can connect hearts
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//back_lights[a].style.background= '#89583E';
		}
	}, 40600);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 41000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 41200);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 41400);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 41600);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 42600);
// first "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//back_lights[a].style.background= '#89583E';
		}
	}, 42000);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 42800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 43400);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 44000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 44700);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 45000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 46900);
// second "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//back_lights[a].style.background= '#89583E';
		}
	}, 46800);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 47900);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 48500);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 49100);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 49800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 50100);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 52000);
// third "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//back_lights[a].style.background= '#89583E';
		}
	}, 100);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 53000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 53600);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 54200);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 54900);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 55200);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 57050);
// forth "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			//back_lights[a].style.background= '#89583E';
		}
	}, 100);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 58100);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 58700);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 59300);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 60000);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 60300);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 62000);
//Eh eh
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 62800);
//fifth "La La La LaLa"
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 90900);
	setTimeout(function() { 
		for(let b in b_light_1) {b_light_1[b].style.background= 'yellow';}
		for(let b in b_light_8) {b_light_8[b].style.background= 'yellow';}
	}, 91600);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_2) {b_light_2[b].style.background= 'yellow';}
		for(let b in b_light_7) {b_light_7[b].style.background= 'yellow';}
	}, 92200);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_3) {b_light_3[b].style.background= 'yellow';}
		for(let b in b_light_6) {b_light_6[b].style.background= 'yellow';}
	}, 92800);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
		for(let b in b_light_4) {b_light_4[b].style.background= 'yellow';}
		for(let b in b_light_5) {b_light_5[b].style.background= 'yellow';}
	}, 93500);
	setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= 'yellow';
		}
	}, 93800);
	/*setTimeout(function() { 
		for(var a=0; a < house_light_num; a++) { 
			back_lights[a].style.background= '#89583E';
		}
	}, 95500);*/
`;
hap_motion.addAnime('2:45.1', houses_lightAnime);




var houses_lightsDynamicAnime0= ` // Eh eh!
	
`;
//hap_motion.addAnime('3:08.7', houses_lightsDynamicAnime0);
//hap_motion.addAnime('3:18.6', houses_lightsDynamicAnime0);



var houses_lightsDynamicAnime1= ` //(more) more, more and more 
	
`;
//hap_motion.addAnime('3:09.4', houses_lightsDynamicAnime1);



var houses_lightsDynamicAnime2=` //the Happiness will
	
`;
//hap_motion.addAnime



var houses_lightsDynamicAnime3=` //Everytime time...
	
`;
//hap_motion.addAnime('3:17.2', houses_lightsDynamicAnime3);



var houses_lightsDynamicAnime4= ` // then everything will get better
	
`;
//hap_motion.addAnime('3:19.3', houses_lightsDynamicAnime4);


var houses_lightsDynamicAnime5= ` // Holding my hands, holding your hands
	
`;
//hap_motion.addAnime('3:21.3', houses_lightsDynamicAnime5);
//hap_motion.addAnime('3:22.5', houses_lightsDynamicAnime5);



var houses_lightsDynamicAnime6= ` // can connect hearts
	
`;
//hap_motion.addAnime('3:24.1', houses_lightsDynamicAnime6);



var houses_lightsDynamicAnime7= ` 

`;
// La La La LaLa
//hap_motion.addAnime('3:25.0', houses_lightsDynamicAnime7);
//hap_motion.addAnime('3:30.2', houses_lightsDynamicAnime7);
//hap_motion.addAnime('3:35.2', houses_lightsDynamicAnime7);
//hap_motion.addAnime('3:40.5', houses_lightsDynamicAnime7);



var houses_lightsDynamicAnime8=` //Eh eh

`;
//Eh eh!
//hap_motion.addAnime('3:46.6', houses_lightsDynamicAnime8);
