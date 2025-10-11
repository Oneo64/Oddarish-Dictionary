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
		"", "an", "ir", "irnar",
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
		"", "it", "ur", "urnir",
		"i", "inni", "um", "unum",
		"s", "sins", "a", "anna",
	]
};

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