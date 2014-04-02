surveys = [{
	survey_name: "Questionnaire1",
	survey_id: "S1",
	sections: [{
		section_id: "Instructions",
		section_name: "Instructions",
		questions: [{
			question_id: 'S1C1I1',
			question_type: 'para',
			question_text: 'lorem ipsum',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C1I2',
			question_type: 'para',
			question_text: 'this and that ...',
			question_col_size: 'col-md-12'

		}]
	},{
		section_id: "PersonalDetails",
		section_name: "Personal Details",
		questions: [{
			question_id: 'S1C1Q1',
			question_type: 'text',
			question_text: 'First Name',
			question_placeholder: 'Enter First Name',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C1Q2',
			question_type: 'text',
			question_text: "Last Name",
			question_placeholder: "Enter Last Name",
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
			question_text: "Race",
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
			question_text: "Registration Number",
			question_placeholder: "",
			question_col_size: 'col-md-12'

		}]

	}, {
		section_id: "ContactInfo",
		section_name: "Contact Info",
		questions: [{
			question_id: 'S1C2Q1',
			question_type: 'text',
			question_text: 'Mailing Address',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C2Q2',
			question_type: 'text',
			question_text: 'Permanent Address',
			question_col_size: 'col-md-12'

		}]
	}, {
		section_id: "Education",
		section_name: "Education",
		questions: [{
			question_id: 'S3C1Q1',
			question_type: 'text',
			question_text: 'Bachelors Degree',
			question_col_size: 'col-md-12'
		}]
	}]
}, {
	survey_name: "Questionnaire2",
	survey_id: "S2",
	sections: [{
		section_id: "Essay",
		section_name: "Essay",
		questions: [{
			question_id: 'S2C1Q1',
			question_type: 'text',
			question_text: 'My First Question',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S2C1Q2',
			question_type: 'text',
			question_text: 'My Second Question',
			question_col_size: 'col-md-12'
		}]

	},{
		section_id: "Writing",
		section_name: "Writing",
		questions: [{
			question_id: 'S2C2Q1',
			question_type: 'text',
			question_text: 'My Third Question',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S2C2Q2',
			question_type: 'text',
			question_text: 'My Fourth Question',
			question_col_size: 'col-md-12'
		}]

	}]
}];