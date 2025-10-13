const vowels = {
	"au": "œyː",
	"a": "a",
	"ái": "ɑiː",
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
	" ": " "
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

	"gl": "gl",
	"gm": "gm",
	"gn": "gn",
	"gs": "xs",
	"gt": "xt",

	"-ag": vowels["a"] + "x",
	"-ág": vowels["á"] + "x",
	"-ug": vowels["u"] + "x",
	"-úg": vowels["ú"] + "x",
	"-gl": "kl̥",
	"-gð": "xθ",

	"ghh": "ɣ",

	"öggv": vowels["ö"] + "gʋ",
	"æggv": vowels["æ"] + "gʋ",
	"auggv": vowels["au"] + "gʋ",

	"öggj": vowels["ö"] + "c",
	"æggj": vowels["æ"] + "c",
	"auggj": vowels["au"] + "c",

	"ögg": vowels["ö"] + "g",
	"ægg": vowels["æ"] + "g",
	"augg": vowels["au"] + "g",

	"ögð": vowels["ö"] + "xθ",
	"ægð": vowels["æ"] + "xθ",
	"augð": vowels["au"] + "xθ",

	"ög": vowels["ö"] + "ɣ",
	"æg": vowels["æ"] + "ɣ",
	"aug": vowels["au"] + "ɣ",

	"ggj": "c",
	"gj": "c",

	"ggv": "gʋ",
	"gv": "gʋ",
	"g": "g",

	"hl": "l̥",
	"hn": "n̥",
	"hr": "r̥",
	"hv": "kʋ",
	"h": "h",
	"j": "j",
	"kkj": "kj",
	"kj": "kj",
	"kj-": "cʰ",
	"kv": "kf",
	"k-": "kʰ",
	"k": "k",
	"-tl": "t̪l",
	"-llr": "lr",
	"ll": "tl̥",
	"l": "l",
	"m": "m",
	"n": "n",
	"pv": "pʋ",
	"p-": "pʰ",
	"p": "p",

	"r_ending": "r̩",

	"r": "r",
	"sv": "sʋ",
	"s": "s",
	"tv": "tʋ",
	"t-": "tʰ",
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
	" ": " "
}

// exceptions go here!!!
const exceptions = {
	"'atl̥a": "'ala",
	"'fʏrɪr": "'fɪrɪr",
	"'hatl̥ouː": "'halouː"
}

function replace(word, list, replace_with) {
	var w = word;

	for (var i = 0; i < list.length; i++) {
		w = w.replace(list[i], replace_with);
	}

	return w;
}

function ipa(_word, english) {
	var word = _word;

	if (english) {
		word = word.replace("th", "þ").replace("dh", "ð");
		word = word.replace("ya", "ja").replace("yaw", "já").replace("ye", "é").replace("yoo", "jú").replace("you", "jo").replace("yoe", "jö").replace("yo", "jo").replace("yu", "ju");
		word = word.replace("aw", "á").replace("je", "é").replace("ee", "í").replace("ou", "ó").replace("oe", "ö").replace("oo", "ú").replace("yy", "ý");
	}

	var ipa = "";
	var last_sound = "";

	var syllables = 0;
	var last_ending = 0;
	var last_ending2 = 0;

	for (var i = 0; i < word.length; i++) {
		for (var k = word.length; k > i; k--) {
			var check = word.substring(i, k);
			var sound = "";

			var is_ending = k == word.length || word.charAt(k) == "." || word.charAt(k) == " ";
			var is_starting = i == last_ending2;

			if (check == " ") {
				if (syllables > 1) {
					ipa = ipa.substring(0, last_ending) + "'" + ipa.substring(last_ending);
				}

				syllables = 0;
				last_ending = ipa.length + 1;
				last_ending2 = i + 1;
			}

			if (check == "r" && is_ending && !(word.charAt(k - 2) in vowels) && word.charAt(k - 2) != "r") {
				sound = consonants["r_ending"];
			} else if (check == "g" && !is_starting && k > 1 && i_stems.includes(word.charAt(k - 2))) {
				sound = consonants["ghh"];
			} else if (check == "g" && !is_starting && k > 1 && word.charAt(k - 2) in vowels && (i_stems.includes(word.charAt(k)) || u_stems.includes(word.charAt(k)))) {
				sound = consonants["ghh"];
			} else if (is_ending && "-" + check in consonants) {
				sound = consonants["-" + check];

				if (/[aáæeéiíoóöuúyý]/i.test(sound)) syllables++;
			} else if (is_ending && "-" + check in vowels) {
				sound = vowels["-" + check];
				syllables++;
			} else if (is_starting && check + "-" in consonants) {
				sound = consonants[check + "-"];

				if (/[aáæeéiíoóöuúyý]/i.test(sound)) syllables++;
			} else if (check in consonants) {
				sound = consonants[check];

				if (/[aáæeéiíoóöuúyý]/i.test(sound)) syllables++;
			} else if (check in vowels) {
				sound = vowels[check];
				syllables++;
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

	if (syllables > 1) ipa = ipa.substring(0, last_ending) + "'" + ipa.substring(last_ending);

	var exceptions_keys = Object.keys(exceptions);

	for (var i = 0; i < exceptions_keys.length; i++) {
		ipa = ipa.replace(exceptions_keys[i], exceptions[exceptions_keys[i]]);
	}

	return "/" + ipa + "/";
}
