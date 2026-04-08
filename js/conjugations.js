const verb_conjugations = {
	// a-stem
	a_stem: [
		"a", "ar", "ar",
		"aði", "aðir", "aði",
		"aðr", "að"
	],

	// i-stem
	i_stem_voiced: [
		"i", "ir", "ir",
		"di", "dir", "di",
		"inn", "ið"
	],
	i_stem_voiceless: [
		"i", "ir", "ir",
		"ti", "tir", "ti",
		"tr", "t"
	],
	i_stem_dh: [
		"ði", "ðir", "ðir",
		"ddi", "ddir", "ddi",
		"ðinn", "ðið"
	],
	i_stem_eyja: [
		"", "r", "r",
		"ði", "ðir", "ði",
		"ðinn", "ðið"
	],

	// specials
	va_stem: [
		"vu", "vur", "vur",
		"vuði", "vuðir", "vuði",
		"vuðr", "vuð"
	],
	a_stem2: [
		"æ", "ær", "ær",
		"ékki", "ékkir", "ékki",
		"énginn", "éngið"
	],
	oa_stem: [
		"ei", "eir", "eir",
		"óði", "óðir", "óði",
		"einn", "eitt"
	],
	ua_stem: [
		"ý", "ýr", "ýr",
		"ýði", "ýðir", "ýði",
		"ýinn", "ýið"
	],
	egja_stem: [
		"egi", "egir", "egir",
		"agði", "agðir", "agði",
		"aginn", "agið"
	],
};

const irregular_conjugations = {
	"vesa": [
		"ar", "art", "ar",
		"var", "vart", "var",
		"vestr", "vest"
	],
	"verta": [
		"verti", "vertir", "vertir",
		"varti", "vartir", "varti",
		"vertinn", "vertið"
	],
	"fasta": [
		"fest", "fest", "fest",
		"fast", "fast", "fast",
		"fastinn", "fastið"
	],
	"gera": [
		"ger", "gerð", "ger",
		"gar", "garð", "gar",
		"gerinn", "gerið"
	],
	"geta": [
		"get", "gest", "get",
		"gat", "gast", "gat",
		"getinn", "getið"
	],
	"fara": [
		"fer", "ferð", "fer",
		"far", "farð", "far",
		"farinn", "farið"
	],
	"vaxa": [
		"vex", "vext", "vex",
		"vax", "vaxt", "vax",
		"vaxinn", "vaxið"
	],


	"setja": [
		"set", "sest", "set",
		"setti", "settir", "setti",
		"settinn", "settið"
	],
	"vita": [
		"vit", "vist", "vit",
		"vitti", "vittir", "vitti",
		"vittinn", "vittið"
	],

	"muna": [
		"mun", "munt", "mun",
		"myndi", "myndir", "myndi",
		"muninn", "munið"
	],
	"skola": [
		"skal", "skalt", "skall",
		"sköldi", "sköldir", "sköldi",
		"skolinn", "skolið"
	],
	"vilja": [
		"vil", "vilt", "vill",
		"vildi", "vildir", "vildi",
		"vilinn", "vilið"
	],

	"hafa": [
		"hef", "hefst", "hef",
		"haf", "hafst", "haf",
		"hafinn", "hafið"
	],
	"jafa": [
		"jef", "jefst", "jef",
		"jaf", "jafst", "jaf",
		"jafinn", "jafið"
	],
	"sega": [
		"seg", "segst", "seg",
		"sag", "sagst", "sag",
		"saginn", "sagið"
	],
	"sitja": [
		"sit", "sist", "sit",
		"sat", "sast", "sat",
		"satinn", "satið"
	],
	"svekkja": [
		"svekk", "svekkst", "svekk",
		"svakk", "svakkst", "svakk",
		"svakkinn", "svakkið"
	],
	"vega": [
		"veg", "vegst", "veg",
		"vag", "vagst", "vag",
		"vaginn", "vagið"
	],

	"finna": [
		"finn", "finnst", "finn",
		"fann", "fannst", "fann",
		"fondinn", "fondið"
	],
	"minna": [
		"minn", "minnst", "minn",
		"mann", "mannst", "mann",
		"mondinn", "mondið"
	],
	"vinna": [
		"vinn", "vinnst", "vinn",
		"vann", "vannst", "vann",
		"vondinn", "vondið"
	],

	"gengja": [
		"gengi", "gengir", "gengir",
		"gangði", "gangðir", "gangði",
		"gengðr", "gengt"
	],
	"ekka": [
		"ekki", "ekkir", "ekkir",
		"akkti", "akktir", "akkti",
		"ekktr", "ekkt"
	],
	"tekja": [
		"teki", "tekir", "tekir",
		"takti", "taktir", "takti",
		"tektr", "tekt"
	],

	"sve": [
		"svi", "svir", "svir",
		"svá", "svár", "svá",
		"svaðr", "svað"
	],
	"elda": [
		"elda", "eldar", "eldar",
		"eldaði", "eldaðir", "eldaði",
		"eldaðr", "eldað"
	],
	"firra": [
		"firra", "firrar", "firrar",
		"firraði", "firraðir", "firraði",
		"firraðr", "firrað"
	],
	"deyja": [
		"dey", "deyr", "deyr",
		"dó", "dór", "dó",
		"deyðr", "deytt"
	],
}

function get_verb_conjugation(word, thing) {
	if (word in irregular_conjugations) {
		var newc = [];

		for (var i = 0; i < irregular_conjugations[word].length; i++) {
			newc.push(irregular_conjugations[word][i]);
		}

		return newc;

		//return irregular_conjugations[word][thing];
	}

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
		if (vowel == "au" || vowel == "ey" || vowel == "ei") stem_test = "i";
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

	var newc = [];

	for (var i = 0; i < conjugation.length; i++) {
		newc.push(word.substring(0, word.length - ending_size) + conjugation[i]);
	}

	return newc;

	//return word.substring(0, word.length - ending_size) + conjugation[thing];
}

function get_gerund(word) {
	if (word in special_declensions && "gerund" in special_declensions[word]) {
		return special_declensions[word]["gerund"];
	}

	var stem = word.substring(0, word.length - 1);
	var vowels = "aáæeéiíoóöuúyý";

	// makes sure that only -a verb endings are removed
	if ("áæeéiíoóöuúyý".includes(word.charAt(word.length - 1))) stem = word;

	if (stem.endsWith("eyj")) {
		return stem.substring(0, stem.length - 1) + "ning";
	} else if (stem.endsWith("lj")) {
		return stem.substring(0, stem.length - 1) + "ing";
	} else if (stem.endsWith("j")) {
		return stem + "ang";
	} else {
		return stem + "ing";
	}
}

function add_verb_ending_basic(word, ending) {
	var vowels = "aáæeéiíoóöuúyý";

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
			if (word.endsWith("úa")) return word.substring(0, word.length - 1);
			if (word.endsWith("óa")) return word.substring(0, word.length - 1) + "u";
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
		if (ending == "u") return word;
	}

	return word + ending;
}
