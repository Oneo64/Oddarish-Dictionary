const noun_declensions = {
	// MASCULINE
	// fallback
	masculine: [
		"", "inn", "ar", "arnir",
		"u", "unn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	// default -r
	masculine_r: [
		"", "rinn", "ar", "arnir",
		"u", "unn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	// -dr
	masculine_dr: [
		"", "inn", "ar", "arnir",
		"u", "unn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	// -gtr, -ptr, -gðr
	masculine_r2: [
		"", "inn", "ir", "irnir",
		"u", "unn", "i", "ina",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	// -rr, -gr
	masculine_rr: [
		"", "rinn", "ar", "arnir",
		" ", "inn", "a", "ana",
		"i", "num", "um", "unum",
		"s", "sins", "ja", "janna",
	],

	// default -ll
	masculine_ll: [
		"", "linn", "ar", "arnir",
		" ", "inn", "a", "ana",
		"i", "num", "um", "unum",
		"s", "sins", "a", "anna",
	],
	// -ill
	masculine_ill: [
		"", "illinn", "lar", "larnir",
		"lu", "lunn", "la", "lana",
		"li", "linum", "lum", "lunum",
		"ils", "lins", "la", "lanna",
	],

	// default -ir
	masculine_ir: [
		"", "irinn", "r", "rnir",
		"ur", "urnu", "r", "rnir",
		"ur", "urnum", "rum", "runum",
		"ur", "urins", "ra", "ranna",
	],
	// -nir
	masculine_ir2: [
		"", "irinn", "ar", "arnir",
		"u", "inn", "a", "ana",
		"i", "inum", "um", "unum",
		"is", "isins", "a", "anna",
	],

	// -i
	masculine_i: [
		"", "inn", "ar", "arnir",
		"a", "ann", "a", "ana",
		"a", "anum", "um", "unum",
		"a", "ans", "a", "anna",
	],
	// -nn
	masculine_nn: [
		"", "ninn", "ar", "arnir",
		"u", "nunn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "ins", "a", "anna",
	],

	// FEMININE
	// fallback
	feminine: [
		"", "in", "ir", "irnar",
		"", "ina", "ir", "irnar",
		"", "inni", "um", "unum",
		"ar", "arinnar", "a", "anna",
	],

	// default -a
	feminine_a: [
		"", "an", "ur", "urnar",
		"u", "una", "ur", "urnar",
		"u", "unni", "um", "unum",
		"u", "unnar", "a", "anna",
	],
	// -ja
	feminine_ja: [
		"", "an", "ar", "arnar",
		"u", "una", "ar", "arnar",
		"u", "unni", "um", "unum",
		"u", "unnar", "a", "anna",
	],

	// default -ei
	feminine_ei: [
		"", "énn", "jar", "jarnar",
		"", "énna", "jar", "jarnar",
		"", "énni", "jum", "junum",
		"z", "jar", "ja", "janna",
	],

	// default -ir
	feminine_ir: [
		"", "irin", "r", "rnar",
		"ur", "urina", "r", "rnar",
		"ur", "urinni", "rum", "runum",
		"ur", "urinnar", "ra", "ranna",
	],

	// NEUTER
	neuter: [
		"", "it", "a", "in",
		"", "it", "a", "in",
		"i", "inu", "um", "unum",
		"s", "sins", "a", "anna",
	],
	neuter_i: [
		"", "it", "íri", "írinir",
		"", "it", "íri", "írinir",
		"", "inu", "jum", "junum",
		"is", "isins", "ja", "janna",
	],
	neuter_a: [
		"", "at", "u", "un",
		"", "at", "u", "un",
		"", "anu", "um", "unum",
		"", "ans", "na", "nanna",
	],
	neuter_á: [
		"á", "áet", "eyri", "eyrin",
		"á", "áet", "eyri", "eyrin",
		"æ", "æinu", "eyjum", "eyjunum",
		"ás", "ásins", "eyja", "eyjanna",
	]
};

const u_umlaut = {
	"a": "ö",
	"ja": "jö"
};

const i_umlaut = {
	"a": "e",
	"á": "æ",
	"o": "ö",
	"ó": "ö",
	"u": "y",
	"ú": "ý",
	"au": "ey",
	"ju": "y",
	"jo": "ý",
	"jö": "é"
};

const past_tense_sound_shift = {
	"e": "a",
	"é": "á",
	"ei": "æ",
	"æ": "ó"
};

function apply_umlaut(word, rules) {
	var vowels = "aáæeéiíoóöuúyý";
	var last_vowel_pos = 0;

	for (var i = 0; i < word.length - 1; i++) {
		if (vowels.includes(word.charAt(i))) last_vowel_pos = i;
	}

	var vowel = word.charAt(last_vowel_pos);

	if (last_vowel_pos > 0 && (word.charAt(last_vowel_pos - 1) == "j" || vowels.includes(word.charAt(last_vowel_pos - 1)))) vowel = word.charAt(last_vowel_pos - 1) + vowel;

	if (vowel in rules) {
		return word.substring(0, last_vowel_pos - (vowel.length - 1)) + rules[vowel] + word.substring(last_vowel_pos + 1);
	} else {
		return word;
	}
}

function can_apply_umlaut(word, rules) {
	return word != apply_umlaut(word, rules);
}

function get_noun_declension(w, t) {
	if (w in special_declensions) {
		return special_declensions[w];
	}

	if (w.includes("-") && w.substring(w.indexOf("-") + 1) in special_declensions) {
		var declension = special_declensions[w.substring(w.indexOf("-") + 1)];

		for (var i = 0; i < declension.length; i++) {
			declension[i] = w.substring(0, w.indexOf("-") + 1) + declension[i];
		}

		return declension;
	}

	var vowels = "aáæeéiíoóöuúyý";

	var declension = [];
	var word = w.replaceAll("-", "");

	if (word.endsWith(")")) word = word.substring(0, word.length - 4);
	
	if (word.endsWith("nir")) {
		for (var i = 0; i < 16; i++) {
			if (noun_declensions.masculine_ir2[i] == "") {
				declension.push(word);
			} else {
				declension.push(word.substring(0, word.length - 2) + noun_declensions.masculine_ir2[i]);
			}
		}
	} else if (t == "masculine noun") {
		if (word.endsWith("ir")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_ir[i] == "") {
					declension.push(word);
				} else if (word.charAt(word.length - 4) == "ó" && noun_declensions.masculine_ir[i].startsWith("r")) {
					declension.push(word.substring(0, word.length - 4) + "æ" + word.charAt(word.length - 3) + noun_declensions.masculine_ir[i]);
				} else if (word.charAt(word.length - 4) == "a" && noun_declensions.masculine_ir[i].startsWith("r")) {
					declension.push(word.substring(0, word.length - 4) + "e" + word.substring(word.length - 3, word.length - 2) + noun_declensions.masculine_ir[i]);
				} else if (word.charAt(word.length - 5) == "ó" && noun_declensions.masculine_ir[i].startsWith("r")) {
					declension.push(word.substring(0, word.length - 5) + "æ" + word.substring(word.length - 4, word.length - 2) + noun_declensions.masculine_ir[i]);
				} else if (word.charAt(word.length - 5) == "a" && noun_declensions.masculine_ir[i].startsWith("r")) {
					declension.push(word.substring(0, word.length - 5) + "e" + word.substring(word.length - 4, word.length - 2) + noun_declensions.masculine_ir[i]);
				} else {
					declension.push(word.substring(0, word.length - 2) + noun_declensions.masculine_ir[i]);
				}
			}
		} else if (word.endsWith("dr")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_dr[i] == "") {
					declension.push(word);
				} else {
					declension.push(word + noun_declensions.masculine_dr[i]);
				}
			}
		} else if (word.endsWith("spr") || word.endsWith("ptr") || word.endsWith("gðr")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_r2[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine_r2[i]);
				}
			}
		} else if (word.endsWith("rr") || word.endsWith("gr")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_rr[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine_rr[i]);
				}
			}
		} else if (word.endsWith("ll") && !word.endsWith("ill")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_ll[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine_ll[i]);
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
		} else if (word.endsWith("nn")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_nn[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.masculine_nn[i]);
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
		} else if (!vowels.includes(word.charAt(word.length - 4)) && word.endsWith("ill")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.masculine_ill[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 3) + noun_declensions.masculine_ill[i]);
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
		if (word.endsWith("ir")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine_ir[i] == "") {
					declension.push(word);
				} else if (word.charAt(word.length - 4) == "ó" && noun_declensions.feminine_ir[i].startsWith("r")) {
					declension.push(word.substring(0, word.length - 4) + "æ" + word.charAt(word.length - 3) + noun_declensions.feminine_ir[i]);
				} else if (word.charAt(word.length - 5) == "ó" && noun_declensions.feminine_ir[i].startsWith("r")) {
					declension.push(word.substring(0, word.length - 5) + "æ" + word.substring(word.length - 4, word.length - 2) + noun_declensions.feminine_ir[i]);
				} else {
					declension.push(word.substring(0, word.length - 2) + noun_declensions.feminine_ir[i]);
				}
			}
		} else if (word.endsWith("ja")) {
			for (var i = 0; i < 16; i++) {
				if (noun_declensions.feminine_ja[i] == "") {
					declension.push(word);
				} else {
					declension.push(word.substring(0, word.length - 1) + noun_declensions.feminine_ja[i]);
				}
			}
		} else if (word.endsWith("a")) {
			var last_vowel_pos = 0;

			for (var i = 0; i < word.length - 1; i++) {
				if (vowels.includes(word.charAt(i))) last_vowel_pos = i;
			}

			var vowel = word.charAt(last_vowel_pos);

			if (last_vowel_pos > 0 && word.charAt(last_vowel_pos - 1) == "j") vowel = "j" + vowel;

			if (vowel in u_umlaut) {
				for (var i = 0; i < 16; i++) {
					if (noun_declensions.feminine_a[i] == "") {
						declension.push(word);
					} else {
						var shifted = word.substring(0, word.length - 1);

						if (noun_declensions.feminine_a[i].charAt(0) == "u") {
							shifted = word.substring(0, last_vowel_pos - (vowel.length - 1)) + u_umlaut[vowel] + word.substring(last_vowel_pos + 1, word.length - 1);
						}

						declension.push(shifted + noun_declensions.feminine_a[i]);
					}
				}
			} else {
				for (var i = 0; i < 16; i++) {
					if (noun_declensions.feminine_a[i] == "") {
						declension.push(word);
					} else {
						declension.push(word.substring(0, word.length - 1) + noun_declensions.feminine_a[i]);
					}
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
			if (noun_declensions.neuter_i[i] == "") {
				declension.push(word);
			} else {
				declension.push(word.substring(0, word.length - 1) + noun_declensions.neuter_i[i]);
			}
		}
	} else if (word.endsWith("a")) {
		for (var i = 0; i < 16; i++) {
			if (noun_declensions.neuter_a[i] == "") {
				declension.push(word);
			} else {
				declension.push(word.substring(0, word.length - 1) + noun_declensions.neuter_a[i]);
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

	for (var i = 0; i < 16; i++) {
		declension[i] = declension[i].replace("sss", "ss");
		declension[i] = declension[i].replace("úu", "ú");
	}

	return declension;
}

function add_verb_ending_basic(word, ending) {
	var vowels = "aáæeéiíoóöuúyý";

	if (ending == "u" && word in special_declensions && "imperative" in special_declensions[word]) {
		return special_declensions[word]["imperative"];
	}

	if (word.endsWith("e")) {
		if (ending == "u") {
			return word.substring(0, word.length - 1) + "ý";
		} else {
			return word.substring(0, word.length - 1) + "andi";
		}
	}

	if (word.endsWith("a")) {
		var shifted = word.substring(0, word.length - 1);

		if (ending == "u") {
			if (word.endsWith("úa")) return word.substring(0, word.length - 2) + "ú";
			if (word.endsWith("óa")) return word.substring(0, word.length - 1);
			if (word.endsWith("va")) return word.substring(0, word.length - 2) + "u";

			var last_vowel_pos = 0;

			for (var i = 0; i < word.length - 1; i++) {
				if (vowels.includes(word.charAt(i))) last_vowel_pos = i;
			}

			var vowel = word.charAt(last_vowel_pos);

			if (last_vowel_pos > 0 && word.charAt(last_vowel_pos - 1) == "j") vowel = "j" + vowel;
			
			if (vowel in u_umlaut) {
				shifted = word.substring(0, last_vowel_pos - (vowel.length - 1)) + u_umlaut[vowel] + word.substring(last_vowel_pos + 1, word.length - 1);
			}
		}

		return shifted + ending;
	} else if (word.endsWith("á")) {
		if (ending == "u") {
			if (word.endsWith("já")) return word;
			if (word.endsWith("á")) return word.substring(0, word.length - 1) + "auju";
		}
	}

	return word + ending;
}

function add_adj_ending_basic(w, ending) {
	var word = w;
	var vowels = "aáæeéiíoóöuúyý";

	if (word.endsWith("ill")) {
		word = word.substring(0, word.length - 3) + "l";

		if (ending == "") return word + "i";
		if (ending == "na") return word + "ana";
	}

	if (word.endsWith("nn")) return word.substring(0, word.length - 1) + ending;

	if (word.endsWith("r") && !vowels.includes(word.charAt(word.length - 2))) {
		if (word.endsWith("nr") && ending == "na") {
			return word.substring(0, word.length - 2) + "na";
		}

		if (ending == "") {
			if (word.endsWith("ðr") || word.endsWith("tr")) {
				return word.substring(0, word.length - 2) + "tt";
			}

			if (word.endsWith("dr")) {
				return word.substring(0, word.length - 2) + "t";
			}

			if (word.endsWith("llr") || word.endsWith("mr") || word.endsWith("nr") || word.endsWith("gr") || word.endsWith("kr")) {
				return word.substring(0, word.length - 1) + "t";
			}
		} else {
			if (word.endsWith("ligr")) {
				if (ending == "a") return word.substring(0, word.length - 1) + "t";

				if (ending.endsWith("a") && !ending.endsWith("na")) {
					return word.substring(0, word.length - 1) + ending.substring(0, ending.length - 1);
				} else {
					return word.substring(0, word.length - 1) + ending;
				}
			}
		}
		
		return word.substring(0, word.length - 1) + ending;
	}

	if (word.endsWith("an") && ending == "na") {
		return word.substring(0, word.length - 2) + "ir";
	}

	if (word.endsWith("æ") && ending.trim().length != 0) {
		if (ending.startsWith("ar")) return word + ending.substring(1);
		if (vowels.includes(ending.charAt(0))) return word + "j" + ending;
	}

	return word + ending;
}

function get_past_tense(word) {
	if (word in special_declensions && "past_tense" in special_declensions[word]) {
		return special_declensions[word]["past_tense"];
	}
	
	var vowels = "aáæeéiíoóöuúyý";

	// organised funct test

	if (word.endsWith("inna")) {
		return word.substring(0, word.length - 4) + "ynnði";
	} else if (word.endsWith("á")) {
		return word.substring(0, word.length - 1) + "ékki";
	} else if (word.endsWith("óa")) {
		return word.substring(0, word.length - 1) + "ði";
	} else if (word.endsWith("úa")) {
		return word.substring(0, word.length - 2) + "jóði";
	} else if (word.endsWith("eyja")) {
		return word.substring(0, word.length - 2) + "ði";
	} else {
		var stem = word.substring(0, word.length - 1);
		var ending = "";
		var ja_ending = false;

		for (var i = word.length - 2; i > 0; i--) {
			if (vowels.includes(word.charAt(i))) break;
			if (word.charAt(i) == "j") ja_ending = true; else ending = word.charAt(i) + ending;
		}

		if (ja_ending) {
			if (can_apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift)) {
				if ("kpsz".includes(ending.charAt(0)) && ending != "pp") {
					return apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift) + "ti";
				}

				if ("frg".includes(ending.charAt(ending.length - 1))) return apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift) + "ði";
				if ("mn".includes(ending.charAt(ending.length - 1))) return apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift) + "di";
				if (ending == "l") return apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift) + "di";
			} else if (ending.endsWith("g") || ending.endsWith("r")) {
				return word.substring(0, word.length - 2) + "ði";
			} else if (ending == "l") {
				return word.substring(0, word.length - 2) + "di";
			}

			return word + "ði";
		} else {
			if (word.endsWith("va")) return word.substring(0, word.length - 2) + "uði";
			if (ending == "mm" || ending == "nn") return stem + "di";

			if (ending.length == 2 && "kpsz".includes(ending.charAt(1)) && ending != "kk" && ending != "pp") {
				return word.substring(0, word.length - 1) + "ti";
			}

			if (ending.length == 1) {
				if ("kpsz".includes(ending)) return stem + "ti";
				if ("fr".includes(ending)) return stem + "ði";
				if (ending == "m" || ending == "n") return stem + "di";
			}

			if (ending.endsWith("g")) return stem + "ði";
		}
	}

	return stem + "aði";
}

function get_past_participle(word) {
	if (word in special_declensions && "past_participle" in special_declensions[word]) {
		return special_declensions[word]["past_participle"];
	}

	var vowels = "aáæeéiíoóöuúyý";

	if (word.endsWith("á")) {
		return word.substring(0, word.length - 1) + "enginn";
	} else if (word.endsWith("óa")) {
		return word.substring(0, word.length - 2) + "einn";
	} else if (word.endsWith("eyja")) {
		return word.substring(0, word.length - 2) + "inn";
	} else if ("gkp".includes(word.charAt(word.length - 2)) && vowels.includes(word.charAt(word.length - 3))) {
		return word.substring(0, word.length - 1) + "tr";
	} else if ("sz".includes(word.charAt(word.length - 2))) {
		return word.substring(0, word.length - 1) + "tr";
	} else {
		var stem = word.substring(0, word.length - 1);
		var ending = "";
		var ja_ending = false;

		for (var i = word.length - 2; i > 0; i--) {
			if (vowels.includes(word.charAt(i))) break;
			if (word.charAt(i) == "j") ja_ending = true; else ending = word.charAt(i) + ending;
		}

		if (ja_ending) {
			if (can_apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift)) {
				return apply_umlaut(word.substring(0, word.length - 2), past_tense_sound_shift) + "inn";
			}

			return word.substring(0, word.length - 2) + "inn";
		}
	}

	return stem + "inn";
}

function get_supine(participle) {
	if (participle.endsWith("yinn")) {
		return participle.substring(0, participle.length - 3) + "ð";
	}

	if (participle.endsWith("tr")) {
		return participle.substring(0, participle.length - 1);
	}

	return participle.substring(0, participle.length - 2) + "ð";
}

function get_present_tense(word, pov) {
	if (word in special_declensions && "present_tense" in special_declensions[word]) {
		if (Array.isArray(special_declensions[word]["present_tense"])) {
			return special_declensions[word]["present_tense"][pov - 1];
		} else {
			return special_declensions[word]["present_tense"];
		}
	}

	var stem = word.substring(0, word.length - 1);
	var vowels = "aáæeéiíoóöuúyý";

	// makes sure that only -a verb endings are removed
	if ("áæeéiíoóöuúyý".includes(word.charAt(word.length - 1))) stem = word;

	if (pov == 1) {
		if ((stem.endsWith("f") || stem.endsWith("r") || stem.endsWith("g") || stem.endsWith("t")) && !stem.endsWith("tt") && !stem.endsWith("rr")) {
			return stem;
		} else if (stem.endsWith("eyj")) {
			return stem.substring(0, stem.length - 1);
		} else {
			return word;
		}
	} else if (pov == 2) {
		if ((stem.endsWith("f") || stem.endsWith("r") || stem.endsWith("g") || stem.endsWith("t")) && !stem.endsWith("tt") && !stem.endsWith("rr")) {
			return stem + "i";
		} else if (stem.endsWith("ú")) {
			return stem.substring(0, stem.length - 1) + "ý";
		} else if (stem.endsWith("á")) {
			return stem.substring(0, stem.length - 1) + "æ";
		} else if (stem.endsWith("eyj")) {
			return stem.substring(0, stem.length - 1) + "r";
		} else {
			return stem + "ar";
		}
	} else {
		if ((stem.endsWith("f") || stem.endsWith("r") || stem.endsWith("g") || stem.endsWith("t")) && !stem.endsWith("tt") && !stem.endsWith("rr")) {
			return stem + "ir";
		} else if (word.endsWith("va")) {
			return stem.substring(0, stem.length - 1) + "ur";
		} else if (stem.endsWith("ú")) {
			return stem.substring(0, stem.length - 1) + "ýr";
		} else if (stem.endsWith("á")) {
			return stem.substring(0, stem.length - 1) + "ær";
		} else if (stem.endsWith("eyj")) {
			return stem.substring(0, stem.length - 1) + "r";
		} else if (stem.endsWith("lj")) {
			return stem.substring(0, stem.length - 1) + "ar";
		} else {
			return stem + "ar";
		}
	}

	return stem + "ir";
}

function get_gerund(word) {
	if (word in special_declensions && "gerund" in special_declensions[word]) {
		return special_declensions[word]["gerund"];
	}

	var stem = word.substring(0, word.length - 1);
	var vowels = "aáæeéiíoóöuúyý";

	// makes sure that only -a verb endings are removed
	if ("áæeéiíoóöuúyý".includes(word.charAt(word.length - 1))) stem = word;

	if (stem.endsWith("á")) {
		return stem.substring(0, stem.length - 1) + "æing";
	} else if (stem.endsWith("eyj")) {
		return stem.substring(0, stem.length - 1) + "ning";
	} else if (stem.endsWith("lj")) {
		return stem.substring(0, stem.length - 1) + "ing";
	} else if (stem.endsWith("j")) {
		return stem + "ang";
	} else {
		return stem + "ing";
	}
}

function get_mediopassive(word) {
	if (word in special_declensions && "mediopassive" in special_declensions[word]) {
		return special_declensions[word]["mediopassive"];
	}

	var stem = word.substring(0, word.length - 1);
	var vowels = "aáæeéiíoóöuúyý";

	// makes sure that only -a verb endings are removed
	if ("áæeéiíoóöuúyý".includes(word.charAt(word.length - 1))) stem = word;

	if (stem.endsWith("j")) {
		return stem.substring(0, stem.length - 1) + "jask";
	} else {
		return stem + "ask";
	}
}

function get_mediopassive_past(word) {
	if (word in special_declensions && "past_tense_mediopassive" in special_declensions[word]) {
		return special_declensions[word]["past_tense_mediopassive"];
	}

	return get_past_tense(word) + "sk";
}

function get_mediopassive_present(word) {
	if (word in special_declensions && "present_mediopassive" in special_declensions[word]) {
		return special_declensions[word]["present_mediopassive"];
	}

	var stem = word.substring(0, word.length - 1);
	var vowels = "aáæeéiíoóöuúyý";

	// makes sure that only -a verb endings are removed
	if ("áæeéiíoóöuúyý".includes(word.charAt(word.length - 1))) stem = word;

	if (stem.endsWith("ú")) {
		return stem.substring(0, stem.length - 1) + "ýisk";
	} else if (stem.endsWith("á")) {
		return stem.substring(0, stem.length - 1) + "æsk";
	} else if (stem.endsWith("j")) {
		return stem.substring(0, stem.length - 1) + "isk";
	} else {
		return stem + "isk";
	}
}
