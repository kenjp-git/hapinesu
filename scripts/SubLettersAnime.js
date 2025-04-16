//2021/01/03-10:39
//storage/emulated/0/ハピネス/scripts/SubLettersAnime.js

//(function() {
let sub_letters_style=` 
.sub_title { 
	position: absolute; left: 295px; top: 205px;
	font-weight: bold;
	/*letter-spacing: -8px;*/
	/*transition: all ease-out 0.7s;*/
	/*outline: 2px solid orange;*/
}

.sub_letter { 
	position: absolute;
	font-weight: bold;
	letter-spacing: -5px;
	color: #FFB84D;/*#FFB039;*/
	opacity: 0;
	will-change: opacity, letter-spacing;
	transition: all ease 0.9s;
	/*outline: 1px solid blue;*/
}

#letter_ver { 
	position: absolute; left: 45px; top: 17.5px;
	display: block; width: 80px;
	font-weight: bold;/*normal;*/
	letter-spacing: 2px;
	font-size: 8px;
	color: #6FCDFF;
	opacity: 0;
	will-change: opacity;
	transition: opacity ease 1s;
}

.letter_Anime { 
	
}
`;
hap_motion.applyCssDocToDOM(sub_letters_style, basic_stylesheet);

//first La La La LaLa
/*var sub_letters= { };
var sub_title= document.getElementById('sub_title');
var sub_letters= sub_title.children;
for(let a=0; a < sub_letters.length; a++) { 
	sub_letters[a].classList.add('sub_letter');
}*/
var sub_letter= document.getElementById('sub_letter');
//sub_letter.classList.add('sub_letter');
var letter_ver= document.getElementById('letter_ver');
var subTitleAnime= `
	//sub_letters[0].style.opacity= '1';
	//sub_letters[0].style.transform= 'translate(25px, 0)';
	//sub_letters[0].style.letterSpacing= '2px';
	sub_letter.style.opacity= '1';
	sub_letter.style.transform= 'translate(25px, 0)';
	sub_letter.style.letterSpacing= '2px';
	setTimeout(function() { 
		//letters[1].style.letterSpacing= '2px';
		letter_ver.style.opacity= '1';
	}, 1000);
`;
hap_motion.addAnime('0:11.1', subTitleAnime);
//}());

