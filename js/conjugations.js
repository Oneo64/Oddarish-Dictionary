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
	i_stem_frg: [
		"i", "ir", "ir",
		"ði", "ðir", "ði",
		"inn", "ið"
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
	"lægja": [
		"læ", "læst", "læ",
		"ló", "lóst", "ló",
		"læginn", "lægið"
	],
	"spera": [
		"sper", "sperð", "sper",
		"spar", "sparð", "spar",
		"sperinn", "sperið"
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
		"vissi", "vissir", "vissi",
		"vittinn", "vittið"
	],

	"muna": [
		"mun", "munt", "mun",
		"myndi", "myndir", "myndi",
		"muninn", "munið"
	],
	"skilja": [
		"skil", "skilt", "skill",
		"skildi", "skildir", "skildi",
		"skilinn", "skilið"
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

	"brinna": [
		"brinn", "brinnst", "brinn",
		"brann", "brannst", "brann",
		"brondinn", "brondið"
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
	"fakka": [
		"fekki", "fekkir", "fekkir",
		"fakkti", "fakktir", "fakkti",
		"fakktr", "fakkt"
	],
	"tekja": [
		"teki", "tekir", "tekir",
		"takti", "taktir", "takti",
		"tektr", "tekt"
	],

	// jó-stem
	"frjósa": [
		"frýs", "frýst", "frýs",
		"fraus", "fraust", "fraus",
		"frosinn", "frosið"
	],
	"gjófa": [
		"gýf", "gýfst", "gýf",
		"gauf", "gaufst", "gauf",
		"gjofinn", "gjofið"
	],
	"hjóga": [
		"hýg", "hýgst", "hýg",
		"haug", "haugst", "haug",
		"hjoginn", "hjogið"
	],
	"jósa": [
		"ýs", "ýst", "ýs",
		"aus", "aust", "aus",
		"josinn", "josið"
	],
	"njóta": [
		"nýt", "nýst", "nýt",
		"naut", "naust", "naut",
		"notinn", "notið"
	],
	"sjóna": [
		"sýn", "sýnt", "sýn",
		"saun", "saunt", "saun",
		"soninn", "sonið"
	],
	"skjóta": [
		"skýt", "skýst", "skýt",
		"skaut", "skaust", "skaut",
		"skotinn", "skotið"
	],
	"spjónna": [
		"spýnn", "spýnnst", "spýnn",
		"spaunn", "spaunnst", "spaunn",
		"sponninn", "sponnið"
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
	if (word.endsWith("rra")) stem_test = "a";

	// get conjugation
	var conjugation = [];
	var ending_size = 1;
	var ablaut = false;

	if (stem_test == "a") {
		conjugation = verb_conjugations.a_stem;
	} else if (stem_test == "i") {
		conjugation = verb_conjugations.i_stem_voiced;

		if ("kpsztd".includes(word.charAt(word.length - 2)) || word.endsWith("lla")) {
			conjugation = verb_conjugations.i_stem_voiceless;
		}

		if ("frg".includes(word.charAt(word.length - 2))) {
			conjugation = verb_conjugations.i_stem_frg;
			ablaut = true;
		}

		if (word.endsWith("ja")) {
			ending_size = 2;

			if ("kpsztd".includes(word.charAt(word.length - 3))) {
				conjugation = verb_conjugations.i_stem_voiceless;
			} else if ("frg".includes(word.charAt(word.length - 3))) {
				conjugation = verb_conjugations.i_stem_frg;
				ablaut = true;
			} else if (word.endsWith("eyja")) {
				conjugation = verb_conjugations.i_stem_eyja;
			} else {
				conjugation = verb_conjugations.i_stem_voiced;
			}
		}

		if (word.endsWith("ða")) {
			conjugation = verb_conjugations.i_stem_dh;
			ending_size = 2;
		}

		if (!vowels.includes(word.charAt(word.length - 3)) && (word.endsWith("na") || word.endsWith("sa"))) {
			if (!word.endsWith("nna") && !word.endsWith("ssa")) {
				conjugation = verb_conjugations.a_stem;
				ending_size = 1;
			}
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
		var word2changed = word;

		if (ablaut && (i >= 3 && i <= 7)) {
			if (vowel == "e") {
				word2changed = word.substring(0, last_vowel_pos) + "a" + word2changed.substring(last_vowel_pos + 1, word.length);
			}
		}

		var word2 = word2changed.substring(0, word2changed.length - ending_size) + conjugation[i];

		word2 = word2.replace("dt", "t");
		word2 = word2.replace("stt", "st");
		word2 = word2.replace("ltt", "lt");
		word2 = word2.replace("ttt", "tt");

		newc.push(word2);
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
