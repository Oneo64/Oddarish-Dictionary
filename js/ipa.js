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
	"-úi": "uːe",
	"úi": "wɪ",
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
	"fn-": "vn",
	"-fn": "vn",
	"f": "f",

	"g-": "g",
	"gv-": "gʋ",
	"gj-": "c",
	"gé-": "c" + vowels["é"].substring(1),

	"g": "ɣ",
	"gg": "g",
	"ggv": "gʋ",

	"ggj": "c",
	"ggé": "c" + vowels["é"].substring(1),
	"-ggi": "c" + vowels["-i"],
	"ggi": "c" + vowels["i"],

	"gl": "gl",
	"gm": "gm",
	"gn": "gn",
	"gs": "χs",
	"gt": "χt",

	"-fl": "fl̩",
	"-gl": "kl̥",
	"-gð": "χθ",

	"-ag": vowels["a"] + "χ",
	"-ág": vowels["á"] + "χ",
	"-óg": vowels["ó"] + "χ",
	"-ug": vowels["u"] + "χ",
	"-úg": vowels["ú"] + "χ",

	"-agna": vowels["a"] + "χn" + vowels["a"],
	"-ágna": vowels["á"] + "χn" + vowels["a"],
	"-ógna": vowels["ó"] + "χn" + vowels["a"],
	"-ugna": vowels["u"] + "χn" + vowels["a"],
	"-úgna": vowels["ú"] + "χn" + vowels["a"],

	"hé": "j̊" + vowels["é"].substring(1),
	"hj": "j̊",
	"hl": "l̥",
	"hn": "n̥",
	"hr": "r̥",
	"hv": "kʋ",
	"h": "h",
	"j": "j",

	"kkj": "hkj",
	"kj": "kj",

	"kj-": "cʰ",
	"ké-": "cʰ" + vowels["é"].substring(1),

	"kkv": "hkʋ",
	"kv": "kʋ",
	"kv-": "kf",
	"k-": "kʰ",
	"k": "k",
	"kk": "hk",

	"-llr": "lr̩",
	"-llt": "l̥t",

	"ll": "tl̥",
	"l": "l",

	"m": "m",
	"n": "n",
	"mm": "m̥m",
	"nn": "n̥n",
	"-mm": "m̥",
	"-nn": "n̥",

	"pv": "pʋ",
	"p-": "pʰ",
	"p": "p",
	"pp": "hp",

	"r_ending": "r̩",

	"r": "r",

	"sv": "sʋ",
	"s": "s",
	"tv": "tʋ",
	"t-": "tʰ",
	"t": "t",
	"tt": "ht",
	"v": "v",
	"x": "ks",
	"z": "t͡s",
	"þ": "θ",
	"þv": "θʋ",
	"ing": "iŋg",
	"ng": "ŋg",
	"-ing": "iŋk",
	"-ng": "ŋk",

	"lk": "l̥k",
	"lp": "l̥p",
	"lt": "l̥t",

	"mk": "m̥k",
	"mp": "m̥p",
	"mt": "m̥t",

	"nk": "n̥k",
	"np": "n̥p",
	"nt": "n̥t",

	"rk": "r̥k",
	"rp": "r̥p",
	"rt": "r̥t",

	"mmk": "mk",
	"mmp": "mp",
	"mmt": "mt",

	"nnk": "nk",
	"nnp": "np",
	"nnt": "nt",

	"rrk": "rk",
	"rrp": "rp",
	"rrt": "rt",

	".": "",
	" ": " "
}

// exceptions go here!!!
const exceptions = {
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
			var is_starting = i == last_ending2 || word.charAt(k - 2) == "." || word.charAt(k - 2) == " ";

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

			if (sound.length == 3 && /[aáæeéiíoóöuúyý]/i.test(sound.charAt(0)) && /[aáæeéiíoóöuúyý]/i.test(sound.charAt(2))) {
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
