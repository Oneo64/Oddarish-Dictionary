const verb_conjugations = {
	// a-stem
	a_stem: [
		"a", "ar", "ar",
		"aði", "aðir", "aði",
		"aðr"
	],

	// i-stem
	i_stem_voiced: [
		"i", "ir", "ir",
		"di", "dir", "di",
		"inn"
	],
	i_stem_voiceless: [
		"i", "ir", "ir",
		"ti", "tir", "ti",
		"tr"
	],
	i_stem_dh: [
		"i", "ir", "ir",
		"ddi", "ddir", "ddi",
		"ddr"
	],
	i_stem_eyja: [
		"", "r", "r",
		"ði", "ðir", "ði",
		"ðinn"
	],

	// specials
	va_stem: [
		"vu", "vur", "vur",
		"vuði", "vuðir", "vuði",
		"vuðr"
	],
	a_stem2: [
		"æ", "ær", "ær",
		"ékki", "ékkir", "ékki",
		"énginn"
	],
	oa_stem: [
		"ei", "eir", "eir",
		"óði", "óðir", "óði",
		"einn"
	],
	ua_stem: [
		"ý", "ýr", "ýr",
		"ýði", "ýðir", "ýði",
		"ýinn"
	],
	egja_stem: [
		"egi", "egir", "egir",
		"agði", "agðir", "agði",
		"aginn"
	],
};

function get_verb_conjugation(word, thing) {
	var vowels = "aáæeéiíoóöuúyý";
	var last_vowel_pos = 0;

	for (var i = 0; i < word.length - 1; i++) {
		if (vowels.includes(word.charAt(i))) last_vowel_pos = i;
	}

	var vowel = word.charAt(last_vowel_pos);

	if (last_vowel_pos > 0 && vowels.includes(word.charAt(last_vowel_pos - 1))) vowel = word.charAt(last_vowel_pos - 1) + vowel;

	var stem_test = "a";

	if (vowel.length == 1) {
		if ("eéiíyýæ".includes(vowel)) stem_test = "i";
	} else {
		if (vowel == "au" || vowel == "ey") stem_test = "i";
	}

	if (word.endsWith("va") && !vowels.includes(word.charAt(last_vowel_pos - 3))) stem_test = "va";
	if (word.endsWith("á")) stem_test = "á";
	if (word.endsWith("óa")) stem_test = "óa";
	if (word.endsWith("úa")) stem_test = "úa";
	if (word.endsWith("egja")) stem_test = "egja";

	// get conjugation
	var conjugation = [];
	var ending_size = 1;

	if (stem_test == "a") {
		conjugation = verb_conjugations.a_stem;
	} else if (stem_test == "i") {
		conjugation = verb_conjugations.i_stem_voiced;

		if ("fkpsztd".includes(word.charAt(word.length - 2)) || word.endsWith("lla")) {
			conjugation = verb_conjugations.i_stem_voiceless;
		}

		if (word.endsWith("ja")) {
			if ("fkpsztd".includes(word.charAt(word.length - 3))) {
				conjugation = verb_conjugations.i_stem_voiceless;
				ending_size = 2;
			}

			if (word.endsWith("eyja")) {
				conjugation = verb_conjugations.i_stem_eyja;
				ending_size = 2;
			}
		}

		if (word.endsWith("ða")) {
			conjugation = verb_conjugations.i_stem_dh;
			ending_size = 2;
		}
	} else {
		switch (stem_test) {
			case "va":
				conjugation = verb_conjugations.va_stem;
				ending_size = 2;
				break;

			case "á":
				conjugation = verb_conjugations.a_stem2;
				break;

			case "óa":
				conjugation = verb_conjugations.oa_stem;
				ending_size = 2;
				break;

			case "úa":
				conjugation = verb_conjugations.ua_stem;
				ending_size = 2;
				break;

			case "egja":
				conjugation = verb_conjugations.egja_stem;
				ending_size = 4;
				break;
		}
	}

	return word.substring(0, word.length - ending_size) + conjugation[thing];
}
