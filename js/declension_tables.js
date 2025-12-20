var declension_tables_html = {
	"noun": `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="gender" rowspan="2">neuter</th> <th colspan="2">singular</th> <th colspan="2">plural</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="n0"></td> <td id="n1"></td> <td id="n2"></td> <td id="n3"></td> </tr>
		<tr> <th>accusative</th> <td id="n4"></td> <td id="n5"></td> <td id="n6"></td> <td id="n7"></td> </tr>
		<tr> <th>dative</th> <td id="n8"></td> <td id="n9"></td> <td id="n10"></td> <td id="n11"></td> </tr>
		<tr> <th>genitive</th> <td id="n12"></td> <td id="n13"></td> <td id="n14"></td> <td id="n15"></td> </tr>
	</tbody></table>`,
	"noun_sg": `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="gender" rowspan="2">neuter</th> <th colspan="2">singular only</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="n0"></td> <td id="n1"></td> </tr>
		<tr> <th>accusative</th> <td id="n4"></td> <td id="n5"></td> </tr>
		<tr> <th>dative</th> <td id="n8"></td> <td id="n9"></td> </tr>
		<tr> <th>genitive</th> <td id="n12"></td> <td id="n13"></td> </tr>
	</tbody></table>`,
	"noun_pl_indef": `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="gender">neuter</th> <th>plural indefinite</th> </tr>
		<tr> <th>nominative</th> <td id="n2"></td> </tr>
		<tr> <th>accusative</th> <td id="n6"></td> </tr>
		<tr> <th>dative</th> <td id="n10"></td> </tr>
		<tr> <th>genitive</th> <td id="n14"></td> </tr>
	</tbody></table>`,
	"noun_mobile": `<table id="noun_declension_mobile" class="pfont" hidden><tbody>
		<tr> <th id="_declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="_gender" rowspan="2">neuter</th> <th colspan="2">singular</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="_n0"></td> <td id="_n1"></td> </tr>
		<tr> <th>accusative</th> <td id="_n4"></td> <td id="_n5"></td> </tr>
		<tr> <th>dative</th> <td id="_n8"></td> <td id="_n9"></td> </tr>
		<tr> <th>genitive</th> <td id="_n12"></td> <td id="_n13"></td> </tr>
		<tr> <th></th> <th colspan="2">plural</th> </tr>
		<tr> <th>nominative</th> <td id="_n2"></td> <td id="_n3"></td> </tr>
		<tr> <th>accusative</th> <td id="_n6"></td> <td id="_n7"></td> </tr>
		<tr> <th>dative</th> <td id="_n10"></td> <td id="_n11"></td> </tr>
		<tr> <th>genitive</th> <td id="_n14"></td> <td id="_n15"></td> </tr>
	</tbody></table>`,
	"verb": `<table id="verb_declension" class="pfont"><tbody>
		<tr> <th id="declension_top2" colspan="3">declension for...</th> </tr>
		<tr> <th>infinitive</th> <td id="infinitive" colspan="2"></td> </tr>
		<tr> <th>imperative</th> <td id="imperative" colspan="2"></td> </tr>
		<tr> <th>present participle</th> <td id="present_participle" colspan="2"></td> </tr>
		<tr> <th>past participle</th> <td id="past_participle" colspan="2"></td> </tr>
		<tr> <th></th> <th>present tense</th> <th>past tense</th> </tr>
		<tr> <th>1st person</th> <td id="1st_present"></td> <td id="past_tense" rowspan="3"></td> </tr>
		<tr> <th>2nd person</th> <td id="2nd_present"></td> </tr>
		<tr> <th>3rd person</th> <td id="3rd_present"></td> </tr>
		<tr> <th>gerund</th> <td id="gerund" colspan="2"></td> </tr>
	</tbody></table>`,
	"verb_mediopassive": `<table id="mediopassive_declension" class="pfont"><tbody>
		<tr> <th id="mediopassive_top" colspan="2">declension for...</th> </tr>
		<tr> <th>infinitive</th> <td id="infinitive2"></td> </tr>
		<tr> <th>present tense</th> <td id="present_tense2"></td> </tr>
		<tr> <th>past tense</th> <td id="past_tense2"></td> </tr>
	</tbody></table>`,
	"verb_impersonal": `<table id="verb_declension" class="pfont"><tbody>
		<tr> <th id="declension_top2" colspan="3">declension for...</th> </tr>
		<tr> <th>infinitive</th> <td id="infinitive" colspan="2"></td> </tr>
		<tr> <th>past participle</th> <td id="past_participle" colspan="2"></td> </tr>
		<tr> <th></th> <th>present tense</th> <th>past tense</th> </tr>
		<tr> <th>3rd person</th> <td id="3rd_present"></td> <td id="past_tense"></td> </tr>
		<tr> <th>gerund</th> <td id="gerund" colspan="2"></td> </tr>
	</tbody></table>`,
	"adjective": `<table id="adjective_declension" class="pfont"><tbody>
		<tr> <th id="adjective_top" colspan="3">declension for...</th> </tr>
		<tr> <th></th> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>positive</th> <td id="a0" colspan="2"></td> </tr>
		<tr> <th>attributive</th> <td id="a1"></td> <td id="a2"></td> </tr>
		<tr> <th>comparative</th> <td id="a3"></td> <td id="a4"></td> </tr>
		<tr> <th>superlative</th> <td id="a5"></td> <td id="a6"></td> </tr>
		<tr> <th>adverb form</th> <td id="a7"></td> <td id="a8"></td> </tr>
		<tr> <th>noun form</th> <td id="a9"></td> <td id="a10"></td> </tr>
	</tbody></table>`,
};
