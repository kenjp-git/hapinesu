//2020/12/21-06:35

//mk_HappyBackAnime.js

(function (root) { 

let BackAnimeFuncs= { 
	prepareTitleBubbles: function(num, common_style, parent) { 
		let firstChild= parent.children[0];
		let parentStyle= getComputedStyle(parent, ' ');
		for(let a=0; a < num; a++) { 
			let bubble= document.createElement('span');
			bubble.classList.add(common_style);
			//bubble.style.cssText= common_style;
			bubble.style.left= Math.floor(Math.random()*parseInt(parentStyle.width)) + 'px';
			bubble.style.top= Math.floor(Math.random()*parseInt(parentStyle.height)) + 'px';
			insertBefore(bubble, firstChild);
		}
	},
	prepareStars: function(num, skyStyle) {
		var stars=[ ];
		for(var a=0; a < num; a++) { 
			var star= document.createElement('span');
			star.classList.add('star');
			star.style.visibility= 'hidden';
			//let dur= Math.floor(Math.random()*8);
			star.style.animationDuration= Math.floor(Math.random()*10) + "s";
			star.style.left= Math.floor(Math.random()*parseInt(skyStyle.width)) + "px";
			star.style.top= Math.floor(Math.random()*parseInt(skyStyle.height)) + "px";
			star.style.width= (Math.floor(Math.random()*3) + 2) + "px";
			star.style.height= star.style.width;
			//star.style.height= (parseInt(getComputedStyle(star, ' ').width)) + "px"; //(Math.floor(Math.random()*5) + 1) + "px";
			sky.appendChild(star);
			stars.push(star);
		}
		return stars;
	}, 
	prepMetParticles: function(num, parent) { 
		let particls= [ ];
		for(var a=0; a < num; a++) { 
			let particle= document.createElement('span');
			particle.classList.add('met_particl');
			//particle.style.willChange= 'opacity, transform';
			particle.style.animationDelay= 0 + '.' + Math.floor(Math.random()*num) + "s";
			parent.appendChild(particle);
			particls.push(particle);
		}
		return particls;
	},
	prepareHousesLights: function(num, parent) { 
		let lights= [ ];
		for(var a=1; a <= num; a++) { 
			let light= document.createElement('span');
			//light.style.visibility= 'hidden';
			light.classList.add('house_light');
			light.classList.add('house_light_'+a);
			//light.style.position= 'absolute';
			parent.appendChild(light);
			lights.push(light);
		}
		return lights;
	},
	prepareBackLights: function(num, parent) { 
		let back_lights= [ ];
		for(var a=1; a <= num; a++) { 
			let light= document.createElement('span');
			//light.style.visibility= 'hidden';
			light.classList.add('back_light');
			light.classList.add('back_light_'+a);
			//light.style.position= 'absolute';
			parent.appendChild(light);
			back_lights.push(light);
		}
		return back_lights;
	},
	getLightsOf: function(houses, ary) { 
		var children= [ ];
		for(var a=0; a < el.length; a++) { 
			let child= el.children[a];
			children.push(child);
		}
		return children;
	}, 
	prepareSteadyLights: function(num, parent) { 
		let steadyLights= [ ];
		for(var a=1; a <= num; a++) { 
			let steadyLight= document.createElement('span');
			steadyLight.classList.add('tree_steady_light');
			steadyLight.classList.add('tree_steady_light_' + a);
			parent.appendChild(steadyLight);
			steadyLights.push(steadyLight);
		}
		return steadyLights;
	},
	prepareDynamicLights: function(light_color, rgb, num, parent) { 
		let dynamicLights= [ ];
		for(var a=1; a <= num; a++) { 
			let dynamicLight= document.createElement('span');
			dynamicLight.classList.add('tree_dynamic_light');
			dynamicLight.style.background= 'radial-gradient(#fff 45%, ' + rgb + ' 70%)';
			dynamicLight.style.boxShadow= '0 0 3px ' + rgb;
			dynamicLight.classList.add(light_color); //共通スタイル
			dynamicLight.classList.add(light_color + '_' + a); //位置
			parent.appendChild(dynamicLight);
			dynamicLights.push(dynamicLight);
		}
		return dynamicLights;
	},
	prepareSnows: function(num, sky) { 
		//var total= Math.floor(Math.random()*num) + num;
		var snows= [ ];
		let skyStyle= getComputedStyle(sky, ' ');
		for(var a= 0; a <= num; a++) { 
			let snow= document.createElement('span');
			snow.classList.add('snow');
			/*snow.style.top= '-12px';*/
			snow.style.left= Math.floor(Math.random()*parseInt(skyStyle.width)) + "px";
			let size= [2, 3, 4, 5, 6];
			snow.style.width= size[Math.floor(Math.random()*5)] + "px";
			snow.style.height= snow.style.width;
			snow.style.animationDuration= Math.floor(25/parseInt(snow.style.width)) + "s";
			snow.style.visibility= "visible";
			snow.addEventListener('animationend', function() { 
				this.style.animationPlayState= 'paused';
				this.style.animationName= 'none';
			}, false);
			sky.appendChild(snow);
			snows.push(snow);
		}
		return snows;
	},
	prepareFlakes: function(times, img_arys, flakes_sky, animeNames) { 
		let flakes= [ ];
		let sizes= [8,10,15];
		function createFlakes() { 
			for(let f=0;f<img_arys.length;f++) { 
				let flake= document.createElement('img');
				flake.src= img_arys[f];
				flake.classList.add('flake');
				flake.style.left= Math.floor(Math.random()*423) + 'px';
				flake.style.width= sizes[Math.floor(Math.random()*sizes.length)]+'px';
				flake.style.height= 'auto';
				flake.alt= ' ';
				let defineDuration= Math.floor(100/parseInt(flake.style.width)) + "s";
				//flake.style.animationDuration= defineDuration+', '+defineDuration;
				//flake.style.animation= 'fallFlake, '+ animeNames[Math.floor(Math.random()*animeNames.length)];
				flake.style.animationDuration= defineDuration;
				flake.style.animationName= animeNames[Math.floor(Math.random()*animeNames.length)];
				flake.addEventListener('animationend', function() { 
					this.style.animationPlayState= 'paused';
					this.style.animationName= 'none';
				},false);
				flakes.push(flake);
				flakes_sky.appendChild(flake);
			}
		}
		for(let n=0; n < times; n++) { 
			createFlakes();
		}
		if(flakes != null) { 
			return flakes;
		}
	},
	createManySnows: function(num) { 
		var total= Math.floor(Math.random()*num) + num;
		var snows= [ ];
		for(var a= 0; a <= total; a++) { 
			let snow= document.createElement('span');
			//snow.setAttribute('class', 'snow');
			snow.classList.add('snow');
			snow.style.visibility= "visible";
			frame.appendChild(snow);
			snows.push(snow);
		}
		//reload();
		return snows;
	},
};

root.BackAnime= BackAnimeFuncs;

}(this));
