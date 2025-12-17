var declension_tables_html = {
	"noun": `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">orðraðingpung fyrir...</th> </tr>
		<tr> <th id="gender" rowspan="2">eigeinligr</th> <th colspan="2">einfell</th> <th colspan="2">máklifell</th> </tr>
		<tr> <th>óþærbúandi</th> <th>þærbúandi</th> <th>óþærbúandi</th> <th>þærbúandi</th> </tr>
		<tr> <th>fyristfell</th> <td id="n0"></td> <td id="n1"></td> <td id="n2"></td> <td id="n3"></td> </tr>
		<tr> <th>tilfell</th> <td id="n4"></td> <td id="n5"></td> <td id="n6"></td> <td id="n7"></td> </tr>
		<tr> <th>affell</th> <td id="n8"></td> <td id="n9"></td> <td id="n10"></td> <td id="n11"></td> </tr>
		<tr> <th>ekkningfell</th> <td id="n12"></td> <td id="n13"></td> <td id="n14"></td> <td id="n15"></td> </tr>
	</tbody></table>`,
	"noun_sg": `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">orðraðingpung fyrir...</th> </tr>
		<tr> <th id="gender" rowspan="2">eigeinligr</th> <th colspan="2">einfell (kost á einfelli)</th> </tr>
		<tr> <th>óþærbúandi</th> <th>þærbúandi</th> </tr>
		<tr> <th>fyristfell</th> <td id="n0"></td> <td id="n1"></td> </tr>
		<tr> <th>tilfell</th> <td id="n4"></td> <td id="n5"></td> </tr>
		<tr> <th>affell</th> <td id="n8"></td> <td id="n9"></td> </tr>
		<tr> <th>ekkningfell</th> <td id="n12"></td> <td id="n13"></td> </tr>
	</tbody></table>`,
	"noun_pl_indef": `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">orðraðingpung fyrir...</th> </tr>
		<tr> <th id="gender">eigeinligr</th> <th>máklifell óþærbúandi</th> </tr>
		<tr> <th>fyristfell</th> <td id="n2"></td> </tr>
		<tr> <th>tilfell</th> <td id="n6"></td> </tr>
		<tr> <th>affell</th> <td id="n10"></td> </tr>
		<tr> <th>ekkningfell</th> <td id="n14"></td> </tr>
	</tbody></table>`,
	"noun_mobile": `<table id="noun_declension_mobile" class="pfont" hidden><tbody>
		<tr> <th id="_declension_top" colspan="5">orðraðingpung fyrir...</th> </tr>
		<tr> <th id="_gender" rowspan="2">eigeinligr</th> <th colspan="2">einfell</th> </tr>
		<tr> <th>óþærbúandi</th> <th>þærbúandi</th> </tr>
		<tr> <th>fyristfell</th> <td id="_n0"></td> <td id="_n1"></td> </tr>
		<tr> <th>tilfell</th> <td id="_n4"></td> <td id="_n5"></td> </tr>
		<tr> <th>affell</th> <td id="_n8"></td> <td id="_n9"></td> </tr>
		<tr> <th>ekkningfell</th> <td id="_n12"></td> <td id="_n13"></td> </tr>
		<tr> <th></th> <th colspan="2">máklifell</th> </tr>
		<tr> <th>fyristfell</th> <td id="_n2"></td> <td id="_n3"></td> </tr>
		<tr> <th>tilfell</th> <td id="_n6"></td> <td id="_n7"></td> </tr>
		<tr> <th>affell</th> <td id="_n10"></td> <td id="_n11"></td> </tr>
		<tr> <th>ekkningfell</th> <td id="_n14"></td> <td id="_n15"></td> </tr>
	</tbody></table>`,
	"verb": `<table id="verb_declension" class="pfont"><tbody>
		<tr> <th id="declension_top2" colspan="3">orðraðingpung fyrir...</th> </tr>
		<tr> <th>fyristfell</th> <td id="infinitive" colspan="2"></td> </tr>
		<tr> <th>klepunorð</th> <td id="imperative" colspan="2"></td> </tr>
		<tr> <th>núfabingorð</th> <td id="present_participle" colspan="2"></td> </tr>
		<tr> <th>fyrfabingorð</th> <td id="past_participle" colspan="2"></td> </tr>
		<tr> <th></th> <th>núligr</th> <th>fyrligr</th> </tr>
		<tr> <th>ek, við</th> <td id="1st_present"></td> <td id="past_tense" rowspan="3"></td> </tr>
		<tr> <th>þú, þé</th> <td id="2nd_present"></td> </tr>
		<tr> <th>það, þetta<br>hann, hon<br>þei, þæ, þó</th> <td id="3rd_present"></td> </tr>
		<tr> <th>nafnorð</th> <td id="gerund" colspan="2"></td> </tr>
	</tbody></table>`,
	"verb_mediopassive": `<table id="mediopassive_declension" class="pfont"><tbody>
		<tr> <th id="mediopassive_top" colspan="2">orðraðingpung fyrir...</th> </tr>
		<tr> <th>fyristfell</th> <td id="infinitive2"></td> </tr>
		<tr> <th>núligr</th> <td id="present_tense2"></td> </tr>
		<tr> <th>fyrligr</th> <td id="past_tense2"></td> </tr>
	</tbody></table>`,
	"verb_impersonal": `<table id="verb_declension" class="pfont"><tbody>
		<tr> <th id="declension_top2" colspan="3">orðraðingpung fyrir...</th> </tr>
		<tr> <th>fyristfell</th> <td id="infinitive" colspan="2"></td> </tr>
		<tr> <th>fyrfabingorð</th> <td id="past_participle" colspan="2"></td> </tr>
		<tr> <th></th> <th>núligr</th> <th>fyrligr</th> </tr>
		<tr> <th>það, þær</th> <td id="3rd_present"></td> <td id="past_tense"></td> </tr>
		<tr> <th>nafnorð</th> <td id="gerund" colspan="2"></td> </tr>
	</tbody></table>`,
	"adjective": `<table id="adjective_declension" class="pfont"><tbody>
		<tr> <th id="adjective_top" colspan="3">orðraðingpung fyrir...</th> </tr>
		<tr> <th></th> <th>óþærbúandi</th> <th>þærbúandi</th> </tr>
		<tr> <th>rótorð</th> <td id="a0" colspan="2"></td> </tr>
		<tr> <th>fyrr nafnorð</th> <td id="a1"></td> <td id="a2"></td> </tr>
		<tr> <th>gærligr</th> <td id="a3"></td> <td id="a4"></td> </tr>
		<tr> <th>ypanligr</th> <td id="a5"></td> <td id="a6"></td> </tr>
		<tr> <th>verkhrimlingorð</th> <td id="a7"></td> <td id="a8"></td> </tr>
		<tr> <th>nafnorð</th> <td id="a9"></td> <td id="a10"></td> </tr>
	</tbody></table>`,
};
