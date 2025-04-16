//2021/01/07-15:20

//2mk_ScrollTimeCtrl.js


(function (global) {

global.ScrollTimeCtrl= ScrollTimeCtrl;

function ScrollTimeCtrl(args) {
	this.targetE= args.targetE; this.motion_length= args.motion_length; //clock //'4:17.0';play()実行でミリ秒に変わる
	this.scroll_origin= args.scroll_origin; this.scroll_end= args.scroll_end; this.logs= args.logs;
	//this.printLog(targetE);

	this.timing;//100miliseconds
	this.length_mlsec;//milliseconds
	this.motions= [ ];//{ };
	this.anime= {}; //'0:10.0': "love"};
	this.timerID;
	this.current_time_mlsec;//milliseconds
	this.remaining_mlsec;//milliseconds
};

/*var timer= setInterval(function () {
	if (time != null) {
		scrollTo(0, time);
	}
	begin = begin + timing;
}, timing);
*/


ScrollTimeCtrl.prototype = {
	playFrom: function(thisPointClk) { //clock
		//window.scrollTo(0, this.motions[thisPoint]);
		thisPointMLsec = this.toMillisec(thisPointClk);
		this.current_time_mlsec= thisPointMLsec;//milliseconds
		let scroll_y_axis= this.mlsecToScrollY(thisPointMLsec);
		this.targetE.scrollTo(0, scroll_y_axis);
		this.length_mlsec= this.toMillisec(this.motion_length);
		this.remaining_mlsec= this.length_mlsec - this.current_time_mlsec;
	},
	setIntervalTiming: function(timing) {
		this.timing=timing;//milliseconds
		//this.printLog(timing);
	},
	makeMotions: function(motions) { 
		this.motions= motions;
	},
	addAnime:function(clock, m_str) { 
		let mlsec= this.toMillisec(clock);
		let delay= (mlsec - this.current_time_mlsec).toString();
		let motion= new Function(m_str).toString();
		let timeout= new Function('setTimeout('+motion+','+delay+');');
		this.motions.push(timeout);
	},
	old_addAnime: function(clock, motion) { 
		if (this.anime.hasOwnProperty(clock)) { 
			this.printLog(clock + " is already set");
		} else {
			this.anime[clock]= new Function(motion);
		}
		/*
		
		*/
	},
	play: function() {
		//let time= motions[beginning];
		//let timing = this.timing;
		/*function processor(obj) { 
			this.running(obj);
			if(this.remaining_mlsec > 0) { 
				timer();
			}
		}*/
		//var timerID; 
		/*function timer() { 
			timerID= setTimeout(processor, this.timing, this);
		}*/

		if (this.remaining_mlsec > 0) { 
			//this.timer();
			this.timerID = setInterval(//function (obj) {
			
			/*this.scrolling;*/ //} 
				//obj.running(obj); obj.flowing2(obj)
				this.running, this.timing, this
			);
			
			for(let m=0; m < this.motions.length; m++){ 
				this.motions[m]();
			}
		}
		//this.printLog(this.ID);
		//this.motion_length= this.toMillisec(this.motion_length);
		//let length_mlsec= this.toMillisec(this.motion_length);
		
		/*setTimeout(function(obj) {
			//clearInterval(obj.timerID);
		}, this.remaining_mlsec, this);*/
	}, 
	play2:  function() {
		if (this.remaining_mlsec > 0) { 
			for(let m=0; m < this.motions.length; m++){ 
				this.motions[m]();
			}
			this.logs.textContent = this.clock;
			setTimeout(this.runCntdwn, this.toMillisec(this.clock_start_at), this);
		}
	},
	runCntdwn: function (obj) {
		obj.timerID = setInterval(function(obj) { 
			console.log(obj.clock)
			obj.remaining_mlsec = obj.toMillisec(obj.clock);
			//console.log(obj.remaining_mlsec)
			obj.remaining_mlsec -= 1000;
			if(obj.remaining_mlsec <= 0) {
				clearInterval(obj.timerID);
			}
			obj.clock = obj.toClockStr(obj.remaining_mlsec);
			obj.logs.textContent = obj.clock;
		}, 1000, obj);
	}, 
	flowing: function(obj) { 
		let currentT= obj.current_time_mlsec;
		obj.targetE.scrollBy({
			top: 0.5, 
			left: 0, 
			behavior: 'smooth'
		});
		obj.logs.textContent= obj.printCurrentClock();
		//obj.printLog(obj.remaining_mlsec);
		if (currentT >= obj.length_mlsec) { 
			clearInterval(obj.timerID);
		}
		/*let length_mlsec= toMillisec(obj.motion_length);
		setTimeout(function() {
			clearInterval(obj.timerID);
		}, length_mlsec);*/
		obj.current_time_mlsec += obj.timing;
		obj.remaining_mlsec -= obj.timing;
	},
	scrolling: function(obj) {
		//this.logs.textContent= JSON.stringify(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));
		//obj.printLog('thanks');

		let currentT= obj.current_time_mlsec;
		let currentClock = obj.toClockStr(currentT);//現ミリ秒を時刻に変換
		let scroll_amountY = obj.motions[currentClock];//スクロール量
		//obj.printLog(scroll_amountY);
		//let amountFloat= scroll_a
		if (scroll_amountY != undefined) {
			obj.targetE.scrollTo({
				left: 0, 
				top: scroll_amountY, 
				behavior: 'smooth'});
			//obj.targetE.scrollTo(0, scroll_amountY);
			//obj.printLog(scroll_amountY);
			//obj.printLog(JSON.stringify(obj.targetE));
			//obj.logs.textContent= obj.printCurrentClock();
		}
		obj.logs.textContent= obj.printCurrentClock();
		if (currentT >= obj.toMillisec(obj.motion_length)) { 
			clearInterval(obj.timerID);
		}
		//currentT += obj.timing;
		obj.current_time_mlsec += obj.timing;
		//obj.printLog('thanks');
	},
	callMotions: function(obj) { 
		
	},
	flowing2: function(obj) { 
		//let currentT= obj.current_time_mlsec;
		//obj.targetE.scrollBy(0, 1);
		/*obj.targetE.scrollBy({
			top: 2, 
			left: 0, 
			behavior: 'smooth'
		});*/
	},
	timer: function() { 
		this.timerID= setTimeout(this.running, this.timing, this);
	},
	running: function(obj) { 
		let currentT= obj.current_time_mlsec;
		let currentClock = obj.toClockStr(currentT);

		/*for(let m=0; m < obj.motions.length; m++){ 
			obj.motions[m]();
		}*/
		obj.logs.textContent= obj.printCurrentClock();
		//obj.logs.textContent= obj.remaining_mlsec;

		if (currentT >= obj.length_mlsec) { 
			//clearTimeout(obj.timerID);
			clearInterval(obj.timerID);
		}

		obj.current_time_mlsec += obj.timing;
		obj.remaining_mlsec -= obj.timing; 
	},
	old_running: function(obj) { 
		let currentT= obj.current_time_mlsec;
		let currentClock = obj.toClockStr(currentT);

		//obj.flowing2(obj);
		if(obj.anime[currentClock] != undefined) {
			obj.anime[currentClock]();
			//obj.printLog(obj.anime[currentClock]);
			//eval(obj.anime[currentClock]);
		}

		obj.logs.textContent= obj.printCurrentClock();
		//obj.logs.textContent= obj.remaining_mlsec;

		if (currentT >= obj.length_mlsec) { 
			//clearTimeout(obj.timerID);
			clearInterval(obj.timerID);
		}
		//else {obj.timer();}

		obj.current_time_mlsec += obj.timing;
		obj.remaining_mlsec -= obj.timing; 
	},
	pause: function() { 
		clearInterval(this.timerID);
	},
	showStars: function() { //La La La LaLa
		let stars= document.getElementById('stars');
		stars.style.display= 'visible';
	},
	showerMeteor: function() { //This night full of stars
		let meteors= document.getElementById('meteors');
		meteors.style.display= 'visible';
		setTimeout(function() { 
			meteors.style.display= 'hidden';
		}, 1000);
	},
	showSnows: function() { //Everytime you show your smile
		let snows= document.getElementById('snows');
		snows.style.display= 'visible';
	},
	lightHouses: function() { //Eh! Everywhere in the town
		let houses_lights= document.getElementById('houses_lights');
		houses_lights.style.display= 'visible';
	},
	showSnowFlakes: function() { //Oh! It's glittering. Oh! powdery snow
		let flakes= document.getElementById('flakes');
		flakes.display= 'visible';
	},
	lightTreeSteady: function() { //Hey! Everytime you show your smile
		let tree= document.getElementById('tree');
		tree.style.display= 'visible';
	},
	animateTreeLight: function() { //La La La La La
		let tree= document.getElementById('tree');
		tree.style.animation= 'visible';
	},
	toMillisec: function(clockStr) {
		let clock_ary= clockStr.split(':');//arrays
		let sec_ml_ary= clock_ary[1].split('.');
		clock_ary[1]= sec_ml_ary;
		let min= parseInt(clock_ary[0])*60*1000;//milliseconds
		let sec= parseInt(clock_ary[1][0])*1000;//milliseconds
		let mlsec= clock_ary[1][1]*100;//milliseconds
		let total_mlsec= min + sec + mlsec;
		return total_mlsec;
	},
	toClockStr: function(mlsec) { 
		let min= Math.floor((mlsec/1000)/60);//minutes
		let sec= Math.floor(mlsec/1000)-(min*60);//seconds
		let r_mlsec= (mlsec - min*60*1000 - sec*1000);//r_mlsec
		r_mlsec= Math.floor(r_mlsec/100);
		if (sec < 10) {sec= `0${sec.toString()}`};
		let clockStr= min.toString() + ':' + sec + '.' + r_mlsec.toString();
		return clockStr;
	},
	clockToScrollY: function(clockStr) {
		let total_amount=this.scroll_end - this.scroll_origin;
		let motion_length_mlsec= this.toMillisec(this.motion_length);
		//let rate= total_amount/motion_length_mlsec;
		let time_mlsec= this.toMillisec(clockStr);
		let amount= (time_mlsec/motion_length_mlsec)*total_amount;
		let y_axis= amount + this.scroll_origin;
		return y_axis;
	},
	mlsecToScrollY: function(mlsec) { 
		let scroll_total_amount= this.scroll_end - this.scroll_origin;
		let motion_length_mlsec= this.toMillisec(this.motion_length);
		let amount= scroll_total_amount*(mlsec/motion_length_mlsec);
		let y_axis= amount + this.scroll_origin;
		return y_axis;
	},
	applyCssDocToDOM: function(cssDoc, stylesheet) { 
		let posOfSymbols= this.findPosOfSymol(cssDoc, "}");
		let cssRulesAry= this.cssDocToAry(cssDoc, posOfSymbols);
		for(let num=0; num < cssRulesAry.length; num++) { 
			let rule= cssRulesAry[num];//.toString();
			/*if(rule.includes('@') == true) { 
				logs2.textContent= 'yes';
				if(rule.includes('keyframes')||rule.includes('media') == false) { 
					continue;
				}
			}*/
			stylesheet.insertRule(rule, stylesheet.cssRules.length);
		}
	},
	cssDocToAry: function(cssDoc, dividers) { 
		let cssArys= [ ];
		let curnt_pos=0;
		for(let a=0; a < dividers.length; a++) {
			let cssRule= cssDoc.slice(curnt_pos, dividers[a]+1);
			cssArys.push(cssRule);
			curnt_pos=dividers[a] +1;
		}
		return cssArys;
	},
	findPosOfSymol: function(txt, symbol) { //?コメントの中にbraceがあったらどう処理するか。?
		let posArys= [ ];
		let curnt_pos= 0;
		let bracePos, keyFpos; //= txt.indexOf(symbol, curnt_pos);
		//for(let a=0; a < txt.length; a++) { 
		//while(txt.indexOf(symbol, curnt_pos) != 0) { 
		do { 
			keyFpos=txt.indexOf('@'/*keyframes'*/, curnt_pos);//@キーワードのスペルチェックも必要
			bracePos= txt.indexOf(symbol, curnt_pos);
			//let atRuleEndPos= txt.indexOf('s', keyFpos);
			//let atRuleName= txt.slice(keyFpos, atRuleEndPos);
			//logs2.textContent= keyFpos;//atRuleName;//txt.charAt(keyFpos-3);
			//if(atRuleName != '
			//if(pos != undefined) {
			if((bracePos > keyFpos) && (keyFpos > -1)/*keyFpos != -1/*|| keyFpos == -1*/) { 
				let keyF_range= txt.slice(keyFpos, bracePos+1);
				logs3.textContent= keyF_range.includes('%').toString();
				/*
				let atRuleEndPos= txt.indexOf(' ', keyFpos);
				let atRuleName= txt.slice(keyFpos, atRuleEndPos).toString();
				//logs2.textContent= atRuleName;//atRuleName;//txt.charAt(keyFpos-3);
				if((atRuleName !== '@keyframes')&&(atRuleName !== '@media')) { 
					//logs2.textContent= atRuleName+'hello';
					if((keyF_range.includes('%')||keyF_range.includes('from')) == true) { 
						//logs2.textContent= atRuleName+'world';
						let hundredPos= txt.indexOf('100%'||'to', keyFpos);
						let hundredBracePos= txt.indexOf(symbol, hundredPos);
						let keyFBracePos= txt.indexOf(symbol, hundredBracePos + 1);
						posArys.push(keyFBracePos);
						curnt_pos= keyFBracePos + 1;
						logs2.textContent= txt.charAt(keyFBracePos);
						continue; 
					}else {
						curnt_pos= bracePos + 1;
						continue; 
					}
				}else if((atRuleName == '@keyframes')||(atRuleName == '@media')) { 
				*/
				//if(keyFpos == -1) {break;}
				//let keyF_range= txt.slice(keyFpos, bracePos+1);
				//logs3.textContent= /*txt.charAt(bracePos);*//*keyF_range.includes('%').toString();*/
				if((keyF_range.includes('%')||keyF_range.includes('from')) == false) { 
					posArys.push(bracePos);
					curnt_pos= bracePos + 1;
					continue; 
					//logs3.textContent= 'no %';
				}else { 
					let hundredPos= txt.indexOf('100%'||'to', keyFpos);
					let hundredBracePos= txt.indexOf(symbol, hundredPos);
					let keyFBracePos= txt.indexOf(symbol, hundredBracePos + 1);
					posArys.push(keyFBracePos);
					curnt_pos= keyFBracePos + 1;
					continue;
				}//}
			}else if(/*(bracePos < keyFpos) &&*/ (bracePos > -1) /*&& keyFpos != -1 /*|| bracePos > -1*/) { //キーフレームがない時も
				//if(bracePos == -1) {break;}
				posArys.push(bracePos);
				curnt_pos= bracePos + 1;
				//} else { break; }
			}
			/*}else if(bracePos == -1) { //any brace doesn't exist
				break;
			}*/
		}while(bracePos != -1);
		//}while(keyFpos != -1 && bracePos != -1);
		return posArys;
	}, 
	printLog: function(content) {
		let span= /*window.*/document.createElement('span');
		span.textContent= content;
		this.logs.appendChild(span);
	},
	printCurrentClock: function() { 
		let mlsec= this.current_time_mlsec;
		let currentClock= this.toClockStr(mlsec);
		return currentClock;
	},
	btnClick: function(btn, target) { //targetはScrollTimeCtrl.jsのインスタンス
		//hap_motion.play();
		//logs.textContent= btn; //btn.getAttribute('data-flag');
		var flag= btn.dataset.flag; //btn.getAttribute('data-flag');
		//logs.textContent= flag;
		if (flag == 'false') { 
			target.play();
			btn.setAttribute('data-flag', 'true');
			//btn.dataset.flag= "true";
			btn.textContent= "┃┃";
		}else if(flag == 'true') { //pause
			target.pause();
			btn.setAttribute('data-flag', 'false');
			btn.textContent= "▶";
		}
	},
	btnClick2: function() {
		this.clock = '0:20.0';
		this.clock_start_at = '0:05.0';
		this.play2();
	},
};



/*ScrollTimeCtrl.motions= {
	'0:10': this.scroll_origin,
	'3:00': ,
	'4:17': ,
};
*/

}(this));