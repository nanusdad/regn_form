var surveys = [{
	survey_name: "Questionnaire1",
	sections: [{
		section_id: "PersonalDetails",
		section_name: "Personal Details",
		questions: [{
			question_id: 'S1C1Q1',
			question_type: 'text',
			question_text: 'Full Name',
			question_placeholder: 'Enter Full Name',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C1Q2',
			question_type: 'text',
			question_text: "Father's / Husband's Name",
			question_placeholder: "Enter Father's / Husband's name",
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C1Q3',
			question_type: 'radio',
			question_text: "Sex",
			question_radios: [{
				rtext: "Male",
				rval: "Male"
			}, {
				rtext: "Female",
				rval: "Female"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C1Q4',
			question_type: 'text',
			question_text: "Age",
			question_placeholder: "",
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C1Q5',
			question_type: 'text',
			question_text: "Religion",
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C1Q6',
			question_type: 'text',
			question_text: "Nationality",
			question_placeholder: "Indian",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C1Q7',
			question_type: 'text',
			question_text: "Birthdate",
			question_placeholder: "dd/mm/yyyy",
			question_col_size: 'col-md-12'

		}, {
			question_id: 'S1C1Q8',
			question_type: 'text',
			question_text: "MBBS Registration Number",
			question_placeholder: "",
			question_col_size: 'col-md-12'

		}]

	}, {
		section_id: "ContactInfo",
		section_name: "Contact Info",
		questions: [{
			question_id: 'S2C2Q1',
			question_type: 'text',
			question_text: 'Mailing Address',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S2C2Q2',
			question_type: 'text',
			question_text: 'Permanent Address',
			question_col_size: 'col-md-12'

		}]
	}, {
		section_id: "Education",
		section_name: "Education",
		questions: [{
			question_id: 'S2C2Q1',
			question_type: 'text',
			question_text: 'My Second Question',
			question_col_size: 'col-md-12'			
		}]
	}]
}, {
	survey_name: "Questionnaire2",
	sections: [{
		section_id: "Essay",
		section_name: "Essay",
		questions: [{
			question_id: 'S2C2Q1',
			question_type: 'text',
			question_text: 'My Second Question',
			question_col_size: 'col-md-12'
		}]

	}]
}];

Template.main.email_verified = function() {
	return Meteor.users.findOne({
		_id: Meteor.userId()
	}, {
		emails: {
			$slice: 0
		}
	}).emails[0].verified;
};

Template.survey_tabs.surveys = function() {
	return surveys;
};

Template.survey_tabs.helpers({
	isText: function(qfield) {
		if (qfield === 'text') {
			return true;
		} else {
			return false;
		}
	},
	isCheckBox: function(qfield) {
		if (qfield === 'checkbox') {
			return true;
		} else {
			return false;
		}
	},
	isRadio: function(qfield) {
		if (qfield === 'radio') {
			return true;
		} else {
			return false;
		}
	}
});

Template.survey_tabs.rendered = function() {
	// $('#survey_tabs a:first').tab('show'); // Show first tab on initial load
	$('#survey_tabs li:first').addClass('active');
	$('#survey_content div:first').addClass('in active');
	$('#section_tabs li:first').addClass('active');
	$('#section_content div:first').addClass('in active');
};

Template.survey_tabs.events({
	'click .section-submit': function() {
		var values = {};

		function logArrayElements(element, index, array) {
			// console.log("a[" + index + "] = " + JSON.stringify(element));
			values[element.name] = element.value;
		}

		$('#pdform').serializeArray().forEach(logArrayElements);
		console.log(values);
		var apane = $('#section_content div.tab-pane.active');
		console.log(apane);
		apane.removeClass('in active');
		// $('#PersonalDetails').removeClass('in active');
		apane.next().addClass('in active');
		// $('#PersonalDetails').next().addClass('in active');
		return false;
	}
});