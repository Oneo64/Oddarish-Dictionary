const vowels = {
	"au": "œyː",
	"a": "a",
	"á": "ɑuː",
	"æ": "aiː",
	"ei": "eiː",
	"ey": "eyː",
	"e": "ɛ",
	"é": "jɛː",
	"-i": "e",
	"i": "ɪ",
	"í": "iː",
	"o": "o",
	"ó": "ouː",
	"ö": "œː",
	"u": "ʉ",
	"ú": "uː",
	"y": "ʏ",
	"ý": "yː",
	".": "",
	" ": " '"
}

const i_stems = ["i", "í", "e", "é", "y", "ý"];
const u_stems = ["u", "ú", "ö", "au"];

const consonants = {
	"b": "b",
	"dð": "ð̠",
	"d": "d",
	"ð": "ð̠",
	"fn": "vn",
	"f": "f",

	"gg": "g",
	"ggi": "c" + vowels["-i"],

	"gs": "xs",
	"gt": "xt",

	"-ág": vowels["á"] + "x",
	"-ug": vowels["u"] + "x",
	"-úg": vowels["ú"] + "x",
	"-gl": "kl̥",
	"-gð": "xθ",

	"ghh": "ɣ",

	"öggv": vowels["ö"] + "gʋ",
	"æggv": vowels["æ"] + "gʋ",
	"auggv": vowels["au"] + "gʋ",

	"ögg": vowels["ö"] + "g",
	"ægg": vowels["æ"] + "g",
	"augg": vowels["au"] + "g",

	"ög": vowels["ö"] + "ɣ",
	"æg": vowels["æ"] + "ɣ",
	"aug": vowels["au"] + "ɣ",
	
	//"gi": "c" + vowels["-i"],

	"g": "g",

	"hl": "l̥",
	"hn": "n̥",
	"hr": "r̥",
	"hv": "kʋ",
	"h": "h",
	"j": "j",
	"kv": "kf",
	"k": "k",
	"-tl": "t̪l",
	"-ll": "tl̥",
	"l": "l",
	"m": "m",
	"n": "n",
	"pv": "pʋ",
	"p": "p",
	"r": "r",
	"sv": "sʋ",
	"s": "s",
	"tv": "tʋ",
	"t": "t",
	"v": "v",
	"x": "ks",
	"z": "t͡s",
	"þ": "θ",
	"ing": "iŋg",
	"ng": "ŋg",
	"-ing": "iŋk",
	"-ng": "ŋk",
	".": "",
	" ": " '"
}

function replace(word, list, replace_with) {
	var w = word;

	for (var i = 0; i < list.length; i++) {
		w = w.replace(list[i], replace_with);
	}

	return w;
}

function ipa(word) {
	var ipa = "";
	var last_sound = "";

	for (var i = 0; i < word.length; i++) {
		for (var k = word.length; k > i; k--) {
			var check = word.substring(i, k);
			var sound = "";

			var is_ending = k == word.length || word.charAt(k) == ".";

			if (check == "g" && k > 1 && i_stems.includes(word.charAt(k - 2))) {
				sound = consonants["ghh"];
			} else if (check == "g" && k > 1 && word.charAt(k - 2) in vowels && (i_stems.includes(word.charAt(k)) || u_stems.includes(word.charAt(k)))) {
				sound = consonants["ghh"];
			} else if (is_ending && "-" + check in consonants) {
				sound = consonants["-" + check];
			} else if (is_ending && "-" + check in vowels) {
				sound = vowels["-" + check];
			} else if (check in consonants) {
				sound = consonants[check];
			} else if (check in vowels) {
				sound = vowels[check];
			}

			if (sound && sound != last_sound) {
				ipa += sound;
				last_sound = "" + sound;

				i = k - 1;
				k = 0;
				continue;
			}
		}
	}

	return "/'" + ipa + "/";
}
