const noun_declensions = {
	masculine: [
		"", "inn", "ar", "arnir",
		"u", "unu", "ar", "arnir",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	masculine_r: [
		"", "rinn", "ar", "arnir",
		"u", "unu", "ar", "arnir",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	masculine_i: [
		"", "inn", "ar", "arnir",
		"a", "anu", "ar", "arnir",
		"a", "anum", "um", "unum",
		"a", "ans", "a", "anna",
	],
	masculine_dr: [
		"", "inn", "ar", "arnir",
		"u", "inn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	feminine: [
		"", "in", "ir", "irnar",
		"", "ina", "ir", "irnar",
		"", "inni", "um", "unum",
		"s", "sins", "a", "anna",
	],
	feminine_a: [
		"", "an", "ir", "irnar",
		"u", "una", "ir", "irnar",
		"u", "unni", "um", "unum",
		"u", "unnar", "a", "anna",
	],
	feminine_ja: [
		"", "an", "ar", "arnar",
		"u", "una", "ar", "arnar",
		"u", "unni", "um", "unum",
		"u", "unnar", "a", "anna",
	],
	feminine_ei: [
		"", "énn", "jar", "jarnar",
		"", "énna", "jar", "jarnar",
		"", "énni", "jum", "junum",
		"z", "jar", "ja", "janna",
	],
	neuter: [
		"", "it", "ur", "urnir",
		" ", "it", "ur", "urnir",
		"i", "inni", "um", "unum",
		"s", "sins", "a", "anna",
	],
	neuter_á: [
		"á", "áet", "eyr", "eyrnar",
		"á", "áet", "eyr", "eyrnar",
		"æ", "æinni", "eyjum", "eyjunum",
		"ás", "ásins", "eyja", "eyjanna",
	],
	nir: [
		"", "inn", "íri", "ærinn",
		"u", "ynu", "íri", "ærinn",
		"i", "ynum", "yrjum", "ærunum",
		"is", "ins", "yrja", "æranna",
	]
};

function get_noun_declension(w, t) {
	var declension = [];
	var word = w.replace("-", "");

	if (word.endsWith(")")) word = word.substring(0, word.length - 4);
	
	if (word.endsWith("nir")) {
		for (var i = 0; i < 16; i++) {
			if (noun_declensions.nir[i] == "") {
				declension.push(word);
			} else {
				declension.push(word.substring(0, word.length - 2) + noun_declensions.nir[i]);
			}
		}
	} else if (t == "masculine noun") {
		if (word.endsWith("dr")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_dr[i] == "") {
					declension.push(word);
				} else {
					declension.push(word + noun_declensions.masculine_dr[i]);
				}
			}
		} else if (word.endsWith("r")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_r[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine_r[i]);
				}
			}
		} else if (word.endsWith("i")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_i[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine_i[i]);
				}
			}
		} else if (word.charAt(word.length - 1) == word.charAt(word.length - 2)) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine[i]);
				}
			}
		} else {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine[i] == "") {
					declension.push(word);
				} else {
					declension.push(word + noun_declensions.masculine[i]);
				}
			}
		}
	} else if (t == "feminine noun") {
		if (word.endsWith("ja")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine_ja[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.feminine_ja[i]);
				}
			}
		} else if (word.endsWith("a")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine_a[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.feminine_a[i]);
				}
			}
		} else if (word.endsWith("ei")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine_ei[i] == "") {
					declension.push(word);
				} else {
					declension.push(word + noun_declensions.feminine_ei[i]);
				}
			}
		} else if (word.charAt(word.length - 1) == word.charAt(word.length - 2)) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.feminine[i]);
				}
			}
		} else {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine[i] == "") {
					declension.push(word);
				} else {
					declension.push(word + noun_declensions.feminine[i]);
				}
			}
		}
	} else if (word.endsWith("i")) {
		for (var i = 0; i < 16; i++) {
			if (noun_declensions.neuter[i] == "" || (word.endsWith("vi") && (noun_declensions.neuter[i] == " " || noun_declensions.neuter[i] == "i"))) {
				declension.push(word);
			} else {
				if (word.endsWith("vi") && (!"aui".includes(noun_declensions.neuter[i].charAt(0)))) {
					declension.push(word + noun_declensions.neuter[i]);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.neuter[i]);
				}
			}
		}
	} else if (word.endsWith("á")) {
		for (var i = 0; i < 16; i++) {
			if (noun_declensions.neuter_á[i] == "") {
				declension.push(word);
			} else {
				declension.push(word.substring(0, word.length - 1) + noun_declensions.neuter_á[i]);
			}
		}
	} else {
		for (var i = 0; i < 16; i++) {
			if (noun_declensions.neuter[i] == "") {
				declension.push(word);
			} else {
				declension.push(word + noun_declensions.neuter[i]);
			}
		}
	}

	return declension;
}

function get_past_tense(word) {
	var stem = word.substring(0, word.length - 1);
	var vowels = "aáæeéiíoóöuúyý";

	// makes sure that only -a verb endings are removed
	if ("áæeéiíoóöuúyý".includes(word.charAt(word.length - 1))) stem = word;

	var last_letter = stem.charAt(stem.length - 1);
	var last_2_letters = last_letter;

	if (word.length >= 3) last_2_letters = stem.charAt(stem.length - 2) + stem.charAt(stem.length - 1);

	if (word.length >= 3 && (vowels.includes(stem.charAt(stem.length - 2)) || stem == word)) {
		if ("frgdá".includes(last_letter) || vowels.includes(last_letter)) {
			return stem + "ði";
		}

		if ("lmn".includes(last_letter)) {
			return stem + "di";
		}

		if ("bkpsð".includes(last_letter) || last_2_letters == "lf") {
			return stem + "ti";
		}
	}

	return stem + "aði";
}