surveys = [{
	survey_name: "Application Form",
	survey_id: "S1",
	sections: [{
		section_id: "Instructions",
		section_name: "Instructions",
		questions: [{
			question_id: 'S1C1I1',
			question_type: 'para',
			question_text: 'Instruction: Read the prospectus carefully before filling in the application form.',
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
			question_text: 'Name : (As it appears in your MBBS Certificate)',
			question_placeholder: 'Enter Full Name',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C1Q2',
			question_type: 'text',
			question_text: "Name of Father / Husband : ",
			question_placeholder: "Enter Father / Husband Name",
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
			question_text: "Date of Birth - dd / mm / yyyy",
			question_placeholder: "dd/mm/yyyy",
			question_col_size: 'col-md-12'

		}, {
			question_id: 'S1C1Q8',
			question_type: 'text',
			question_text: "MBBS Registration No.",
			question_placeholder: "",
			question_col_size: 'col-md-12'

		}]

	}, {
		section_id: "ContactInfo",
		section_name: "Contact Info",
		questions: [{
			question_id: 'S1C2Q1',
			question_type: 'text',
			question_text: 'Address for correspondence :',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C2Q1a',
			question_type: 'text',
			question_text: 'City :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q1b',
			question_type: 'text',
			question_text: 'District :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q1c',
			question_type: 'text',
			question_text: 'State :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q1d',
			question_type: 'text',
			question_text: 'Pin :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q2',
			question_type: 'text',
			question_text: 'Permanent / Residential Address :',
			question_col_size: 'col-md-12'

		}, {
			question_id: 'S1C2Q2a',
			question_type: 'text',
			question_text: 'City :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q2b',
			question_type: 'text',
			question_text: 'District :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q2c',
			question_type: 'text',
			question_text: 'State :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q2d',
			question_type: 'text',
			question_text: 'Pin :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q3a',
			question_type: 'text',
			question_text: 'Telephone Nos (with STD code)',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q4a',
			question_type: 'text',
			question_text: 'Mobile Nos:',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q3b',
			question_type: 'text',
			question_text: '',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q4b',
			question_type: 'text',
			question_text: '',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C2Q5',
			question_type: 'text',
			question_text: 'Email Id :',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "ProfessionalQualifications",
		section_name: "Professional Qualifications",
		questions: [{
			question_id: 'S1C3Q1',
			question_type: 'para',
			question_text: 'M.B.B.S',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C3Q1a',
			question_type: 'text',
			question_text: 'Institution',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C3Q1b',
			question_type: 'text',
			question_text: 'Year of completion :',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C3Q2',
			question_type: 'para',
			question_text: 'PG Qualifications, if any : ',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C3Q2a',
			question_type: 'text',
			question_text: 'Institution',
			question_col_size: 'col-md-6'
		}, {
			question_id: 'S1C3Q2b',
			question_type: 'text',
			question_text: 'Year of completion :',
			question_col_size: 'col-md-6'
		}]
	}, {
		section_id: "WorkExperience",
		section_name: "Work Experience",
		questions: [{
			question_id: 'S1C4Q1',
			question_type: 'para',
			question_text: 'In chronological order from the year of qualification.',
			question_col_size: 'col-md-12'	
		}, {
			question_id: 'S1C4Q1a',
			question_type: 'text',
			question_text: 'From',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q1b',
			question_type: 'text',
			question_text: 'To',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q1c',
			question_type: 'text',
			question_text: 'Institution',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q1d',
			question_type: 'text',
			question_text: 'Type of practice',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q2a',
			question_type: 'text',
			question_text: 'From',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q2b',
			question_type: 'text',
			question_text: 'To',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q2c',
			question_type: 'text',
			question_text: 'Institution',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q2d',
			question_type: 'text',
			question_text: 'Type of practice',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q3a',
			question_type: 'text',
			question_text: 'From',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q3b',
			question_type: 'text',
			question_text: 'To',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q3c',
			question_type: 'text',
			question_text: 'Institution',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q3d',
			question_type: 'text',
			question_text: 'Type of practice',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q4a',
			question_type: 'text',
			question_text: 'From',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q4b',
			question_type: 'text',
			question_text: 'To',
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q4c',
			question_type: 'text',
			question_text: 'Institution',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q4d',
			question_type: 'text',
			question_text: 'Type of practice',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q5',
			question_type: 'radio',
			question_text: 'Are you practicing ?',
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_col_size: 'col-md-4'
		},  {
			question_id: 'S1C4Q6',
			question_type: 'radio',
			question_text: 'If yes, ',
			question_radios: [{
				rtext: "General",
				rval: "General"
			}, {
				rtext: "Specialization",
				rval: "Specialization"
			}],
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q7',
			question_type: 'text',
			question_text: 'Specialization',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q8',
			question_type: 'para',
			question_text: 'Working In :',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C4Q8a',
			question_type: 'checkbox',
			question_name: "WorkingIn",
			question_checkboxes: [{
				rtext: "Private Hospital",
				rval: "PrivateHospital"
			}, {
				rtext: "Corporate",
				rval: "Corporate"
			}, {
				rtext: "NGO/Mission",
				rval: "NGO_Mission"
			}, {
				rtext: "Govt. Hospital",
				rval: "GovtHospital"
			}],
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C4Q10',
			question_type: 'para',
			question_text: 'Working Hours :',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C4Q10a',
			question_type: 'text',
			question_text: 'Morning',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q10b',
			question_type: 'text',
			question_text: 'Afternoon',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q10c',
			question_type: 'text',
			question_text: 'Evening',
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C4Q9',
			question_type: 'para',
			question_text: 'Working Days :',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C4Q9a',
			question_type: 'radio',
			question_text: 'Monday',
			question_radios: [{
				rtext: "Morning",
				rval: "Morning"
			}, {
				rtext: "Afternoon",
				rval: "Afternoon"
			}, {
				rtext: "Evening",
				rval: "Evening"
			}],
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q9b',
			question_type: 'radio',
			question_text: 'Tuesday',
			question_radios: [{
				rtext: "Morning",
				rval: "Morning"
			}, {
				rtext: "Afternoon",
				rval: "Afternoon"
			}, {
				rtext: "Evening",
				rval: "Evening"
			}],
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q9c',
			question_type: 'radio',
			question_text: 'Wednesday',
			question_radios: [{
				rtext: "Morning",
				rval: "Morning"
			}, {
				rtext: "Afternoon",
				rval: "Afternoon"
			}, {
				rtext: "Evening",
				rval: "Evening"
			}],
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q9d',
			question_type: 'radio',
			question_text: 'Thursday',
			question_radios: [{
				rtext: "Morning",
				rval: "Morning"
			}, {
				rtext: "Afternoon",
				rval: "Afternoon"
			}, {
				rtext: "Evening",
				rval: "Evening"
			}],
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q9e',
			question_type: 'radio',
			question_text: 'Friday',
			question_radios: [{
				rtext: "Morning",
				rval: "Morning"
			}, {
				rtext: "Afternoon",
				rval: "Afternoon"
			}, {
				rtext: "Evening",
				rval: "Evening"
			}],
			question_col_size: 'col-md-2'
		}, {
			question_id: 'S1C4Q9f',
			question_type: 'radio',
			question_text: 'Sat / Sun',
			question_radios: [{
				rtext: "Morning",
				rval: "Morning"
			}, {
				rtext: "Afternoon",
				rval: "Afternoon"
			}, {
				rtext: "Evening",
				rval: "Evening"
			}],
			question_col_size: 'col-md-2'
		}]
	}, {
		section_id: "StatementOfPurpose",
		section_name: "Statement of Purpose",
		questions: [{
			question_id: 'S1C5Q1',
			question_type: 'text',
			question_text: 'What do you hope to gain from the PGDFM programme? (Not more than 4 sentences.)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C5Q2',
			question_type: 'radio',
			question_text: 'Willing to depute and sponsor a nurse or a clinic assistant to be trained as a Family Physician Assistant. Please refer to point No. 4 in page No. 4 of prospectus',
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "ContactCentre",
		section_name: "Contact Centre",
		questions: [{
			question_id: 'S1C6Q1',
			question_type: 'para',
			question_text: 'Choice of Contact Centre: (Please see the Prospectus for the list of Regional Centres)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C6Q1a',
			question_type: 'text',
			question_text: 'First Choice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C6Q1b',
			question_type: 'text',
			question_text: 'Second Choice',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "Undertaking",
		section_name: "Undertaking",
		questions: [{
			question_id: 'S1C7Q1',
			question_type: 'para',
			question_text: 'Undertaking :',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C7Q2',
			question_type: 'radio',
			question_text: 'All the information given above are complete and accurate. I declare that the Dept. of Distance Education is entitled to cancel my candidature immediately, should it become apparent that any of the particulars furnished above in this application form is/are false or incorrect. I have read the course regulations and promise to abide by them.',
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C7Q3',
			question_type: 'para',
			question_text: 'Please upload : Photocopy of MBBS Certificate and Photocopy of State Medical Council /MCI Registration Certificate on the next form.',
			question_col_size: 'col-md-12'
		}]
	}]
}, {
	survey_name: "Upload Certificates",
	survey_id: "S2",
	sections: [{
		section_id: "Scannedcopies",
		section_name: "Scanned Copies",
		questions: [{
			question_id: 'S2C1Q1',
			question_type: 'filepicker',
			question_text: 'MBBS Certificate',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S2C1Q2',
			question_type: 'filepicker',
			question_text: 'State / MCI Regn Certificate',
			question_col_size: 'col-md-12'
		}]
	}]
}, {
	survey_name: "Case Vignettes",
	survey_id: "S3",
	sections: [{
		section_id: "CaseVignettesInstructions",
		section_name: "Instructions",
		questions: [{
			question_id: 'S3C1Q1',
			question_type: 'para',
			question_text: 'This section is to give us a bird’s eye view of your patient management styles. Case scenarios are given and based on them fill in the details in the patient-management sheet given below.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C1Q2',
			question_type: 'para',
			question_text: '5 Case scenarios are given in the following pages',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C1Q3',
			question_type: 'para',
			question_text: 'Each of the case scenarios is followed by a patient-management sheet which you have to fill in soft copy and to be sent to us back by email along with Section I. Just sit back, relax and imagine each of the patients described below as sitting in your clinic with you and write what exactly you would do for each patient in your own local set up with all the limitations and challenges; avoid giving textbook answers for them! This is not for the purpose of assessing your knowledge but to give us a bird’s eye view of your patient management styles which will help us design and modify the course to suit your practice needs.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C1Q4',
			question_type: 'para',
			question_text: 'For example, Mr Ram comes to see you with a toothache. He is a diabetic and also wants you to look at the injury to his big toe he sustained 1 week ago. You examined him and found tooth abscess. The Primary diagnosis for Mr. Ram is Dental abscess and his secondary diagnoses are Diabetes and partially healed toe injury.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C1Q5',
			question_type: 'para',
			question_text: 'Please fill in all the columns. If some column does not fit in or is not relevant, fill in as ‘not applicable’ or ‘not relevant’',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C1Q6',
			question_type: 'para',
			question_text: 'Please note that what is portrayed in the Patient-management sheet is a record of a Single- time consultation with the patient. So do not write all that you will do for the management of the patient but imagine that the patient has come to you and record what you will do in this consultation.',
			question_col_size: 'col-md-12'
		}]
	}]
}, {
	survey_name: "Practice Portfolio",
	survey_id: "S4",
	sections: [{
		section_id: "PracticePortfolioInstructions",
		section_name: "Instructions",
		questions: [{
			question_id: 'S4C1Q1',
			question_type: 'para',
			question_text: 'This section applies only for those who are currently in some form of clinical practice. You need to fill up the case-management sheet for 5 of your patients. It is optional but we would be happy if you fill it up. This is to get a cross section of patient management approaches across the country which actually helps us to tailor the course as per the training needs of doctors in our country. All the data in this section will be analyzed anonymously and will have no bearing on the doctor or the patients or the institution you work for. Hence we request you to fill up the real information without being apprehensive.', 
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C1Q2',
			question_type: 'para',
			question_text: '2. There are 5 Patient-management sheets in this project booklet 3. You need to fill in one sheet for each patient 4. You need to record the first 5 consecutive consultations on the same consulting day, even if the patient comes for some trivial problem like a cold or comes for just repeat medicines. 5. All the details in the Patient-management sheet should be filled legibly 6. You need to enclose with each Patient-management sheet, a carbon-copy or a photocopy of the prescription you gave the patient. 7. You may be prescribing the drugs using trade names, you may write the same in the prescription you give the patient. But, when you write the same prescription on the Patient-management sheet, please write the generic name of the drug within brackets. 8. Please note that your individual prescriptions and patient-management will not be scrutinized. The prescriptions will be analysed anonymously (de-identified data) and a computer generated feedback about overall prescribing practices in the country will be sent to you.',
			question_col_size: 'col-md-12'
		}]
	}]
}];