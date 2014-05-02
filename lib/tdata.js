surveys = [{
	survey_name: "Confirm Details",
	survey_id: "S1",
	sections: [{
		section_id: "Instructions",
		section_name: "Instructions",
		questions: [{
			question_id: 'S1C1I1',
			question_type: 'para',
			question_text: 'Instruction: This form is a continuation of the application from the previous application page.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S1C1I2',
			question_type: 'para',
			question_text: 'You will need your application number from the previous application pages. Please confirm some personal details in the first form and finish up the Case Vignettes and Practice Portfolio sections.',
			question_col_size: 'col-md-12'

		}]
	},{
		section_id: "PersonalDetails",
		section_name: "Personal Details",
		questions: [{
			question_id: 'S1C1Q1',
			question_type: 'text',
			question_text: 'Name : (As entered in the previous application page)',
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
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S1C1Q4',
			question_type: 'text',
			question_text: "Age",
			question_placeholder: "",
			question_col_size: 'col-md-8'
		}, {
			question_id: 'S1C1Q7',
			question_type: 'text',
			question_text: "Date of Birth - dd / mm / yyyy",
			question_placeholder: "dd/mm/yyyy",
			question_col_size: 'col-md-12'

		}, {
			question_id: 'S1C1Q8',
			question_type: 'text',
			question_text: "Application No. (from previous application page)",
			question_placeholder: "",
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
	}, {
		section_id: "CasVig1",
		section_name: "Case Scenario 1",
		questions:[{
			question_id: 'S3C2Q1',
			question_type: 'para',
			question_text: '25 year old Mr. Mani comes to your clinic with history of cough for 3weeks and fever on and off for 2 weeks. He brings about small quantities of sputum mostly whitish but sometimes yellowish in colour, but never blood-stained. He also complains of malaise and fatigue with loss of weight and appetite. He is a farmer but also has a thriving business in the nearby city. He is not a known diabetic or hypertensive. He smokes 10 beedis per day for the last 10 years.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q2',
			question_type: 'para',
			question_text: 'On examination, he is thin man, his weight was 47 kg. His temperature was 100◦ mildly anaemic and his skin is mildly hyperpigmented. F. No significant lymphadenopathy. He is mildly anaemic and his skin is mildly hyperpigmented.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q3',
			question_type: 'para',
			question_text: 'On examination of the respiratory system, there was a mild tracheal shift to the right with bronchial breathing and fine crepitations over the right infraclavicular area. CVS: Normal heart sounds. No murmurs heard. Abdomen: No hepatosplenomegaly.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q4',
			question_type: 'para',
			question_text: 'Patient-management Sheet 1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q5',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q6',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C2Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C2Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C2Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "CasVig2",
		section_name: "Case Scenario 2",
		questions:[{
			question_id: 'S3C2Q1',
			question_type: 'para',
			question_text: '50 year old Mr. Kamal has had type 2 diabetes for the past 8 years. He now presents to you with mild burning of feet during night time which sometimes makes it difficult for him to sleep. He works as a company executive and travels a lot and this makes it difficult to adhere to diet schedules and tablets. He does not smoke or consume alcohol. His BMI was 32 Kg/m2 his BP was 150/100mmHg. He is on Metformin 1 gm. BD and Glibenclamide 15 mg OD. His latest HbA1c 8.4%. His systemic examination is normal. He is known to have mild background retinopathy.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q4',
			question_type: 'para',
			question_text: 'Patient-management Sheet 1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q5',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q6',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C3Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C3Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C3Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "CasVig3",
		section_name: "Case Scenario 3",
		questions:[{
			question_id: 'S3C4Q1',
			question_type: 'para',
			question_text: 'You are a Medical officer working in a remote PHC.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q2',
			question_type: 'para',
			question_text: '11months old Swathi was brought by the mother with history of fever, cough and runny nose for 3 days. She was treated with some cough syrup and Paracetamol from a local medical store. The baby has been feeding well. She is fully immunized and has had no significant illnesses in the past. Her developmental milestones have been normal till date. There is no family history of tuberculosis or bronchial asthma.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q3',
			question_type: 'para',
			question_text: 'On examination the baby is alert and active. Weight of the baby is 10 Kg. She has a temperature of 101◦ F, heart rate is 120/ min and the respiratory rate was 56/min and there was no chest indrawing. All other systems including throat and ear are normal on examination.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q4',
			question_type: 'para',
			question_text: 'Patient-management Sheet 1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q5',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q6',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C4Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C4Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C4Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "CasVig4",
		section_name: "Case Scenario 4",
		questions:[{
			question_id: 'S3C5Q1',
			question_type: 'para',
			question_text: '27 year old Mr. Paranthaman presented with severe abdominal pain and high grade fever since yesterday night. On further questioning, he told that initially he had low grade fever, vomiting and lower abdominal pain for 3 days for which he was Did you admit the patient? Yes: or No: If Yes , Reason: treated locally. The abdomen pain first started in the lower abdomen, especially on the right side but from last night it is severe and has spread all over the abdomen. He passed stools yesterday which were normal. He does not smoke or drink. He is not on any medications.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q2',
			question_type: 'para',
			question_text: 'On examination, his pulse is 110/min and BP is 80/46. He is mildly dehydrated. There is generalised tenderness all over the abdomen. Abdominal rigidity is also present. Other systems are normal on examination.',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q4',
			question_type: 'para',
			question_text: 'Patient-management Sheet 1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q5',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q6',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C5Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C5Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C5Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	},{
		section_id: "CasVig5",
		section_name: "Case Scenario 5",
		questions:[{
			question_id: 'S3C6Q1',
			question_type: 'para',
			question_text: '22 year old Mrs. Gomati who is a primigravida presents to you for the first time at 20weeks of gestation with complaints of ‘feeling weak’. She is from an affluent family and the parents who have accompanied her are very worried about her health. They want you to prescribe expensive tonics and injections for her. They also have heard that it would be good to do ultrasound abdomen for all pregnant women every 2 months to look for the normal growth the baby and want you to order it regularly for Mrs. Gomati. You have an imaging centre nearby which is pretty good and also offers you a facilitation charge for each ultrasound request you send. Your friend who has recently taken an agency for ‘Haemfast’, an iron tonic from the US, has requested you to prescribe this drug for all your antenatal mothers..',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q2',
			question_type: 'para',
			question_text: 'On examination, Mrs. Gomati looks pale, her pulse is 104/minute, BP 90/60mmHg, and other system examination was normal.', 
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q4',
			question_type: 'para',
			question_text: 'Patient-management Sheet 1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q5',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q6',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C6Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S3C6Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S3C6Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}]
}, {
	survey_name: "Practice Portfolio",
	survey_id: "S4",
	sections: [{
		section_id: "PracticeStatus",
		section_name: "Practice Status",
		questions:[{
			question_id: 'S4C0Q1',
			question_type: 'radio',
			question_text: "Are you a practicing physician?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-12'
		}]
	},
	{
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
			question_text: 'There are 5 Patient-management sheets in this section. You need to fill in one section for each patient. You need to record the first 5 consecutive consultations on the same consulting day, even if the patient comes for some trivial problem like a cold or comes for just repeat medicines. All the details in the Patient-management sheet should be filled. You may be prescribing the drugs using trade names, you may write the same in the prescription you give the patient. But, when you write the same prescription on the Patient-management sheet, please write the generic name of the drug within brackets. Please note that your individual prescriptions and patient-management will not be scrutinized. The prescriptions will be analysed anonymously (de-identified data) and a computer generated feedback about overall prescribing practices in the country will be sent to you.',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "PracticePortfolio1",
		section_name: "Practice 1",
		questions: [{
			question_id: 'S4C2Q1',
			question_type: 'text',
			question_text: 'Presenting complaints of the patient & relevant history (in patient\'s own words)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q2',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q3',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C2Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C2Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C2Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C2Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C2Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "PracticePortfolio2",
		section_name: "Practice 2",
		questions: [{
			question_id: 'S4C3Q1',
			question_type: 'text',
			question_text: 'Presenting complaints of the patient & relevant history (in patient\'s own words)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q2',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q3',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C3Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C3Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C3Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C3Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C3Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "PracticePortfolio3",
		section_name: "Practice 3",
		questions: [{
			question_id: 'S4C4Q1',
			question_type: 'text',
			question_text: 'Presenting complaints of the patient & relevant history (in patient\'s own words)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q2',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q3',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C4Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C4Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C4Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C4Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C4Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "PracticePortfolio4",
		section_name: "Practice 4",
		questions: [{
			question_id: 'S4C5Q1',
			question_type: 'text',
			question_text: 'Presenting complaints of the patient & relevant history (in patient\'s own words)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q2',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q3',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C5Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C5Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C5Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C5Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C5Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}, {
		section_id: "PracticePortfolio5",
		section_name: "Practice 5",
		questions: [{
			question_id: 'S4C6Q1',
			question_type: 'text',
			question_text: 'Presenting complaints of the patient & relevant history (in patient\'s own words)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q2',
			question_type: 'text',
			question_text: 'Primary Diagnosis (with differential diagnosis)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q3',
			question_type: 'text',
			question_text: 'Secondary Diagnoses / problems',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q7',
			question_type: 'para',
			question_text: 'Drug Prescription (generic name of the drug along with strength, dosage & no.of days)',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q8',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q9',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q10',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q11',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q12',
			question_type: 'text',
			question_text: '5',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q13',
			question_type: 'text',
			question_text: '6',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S3C6Q14',
			question_type: 'text',
			question_text: '7',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q15',
			question_type: 'text',
			question_text: '8',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q16',
			question_type: 'text',
			question_text: '9',
			question_col_size: 'col-md-10'
		}, {
			question_id: 'S4C6Q17',
			question_type: 'text',
			question_text: 'Advice',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q18',
			question_type: 'para',
			question_text: 'Procedures/Other Treatments/Counseling done at your clinic itself during this visit',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q19',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q20',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q21',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q22',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q23',
			question_type: 'para',
			question_text: 'Laboratory investigations /Imaging Test/ other tests ordered',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q24',
			question_type: 'text',
			question_text: '1',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q25',
			question_type: 'text',
			question_text: '2',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q26',
			question_type: 'text',
			question_text: '3',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q27',
			question_type: 'text',
			question_text: '4',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q28',
			question_type: 'radio',
			question_text: "Did you refer the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C6Q29',
			question_type: 'text',
			question_text: 'If Yes, to whom / where?',
			question_col_size: 'col-md-12'
		}, {
			question_id: 'S4C6Q30',
			question_type: 'radio',
			question_text: "Did you admit the patient?",
			question_radios: [{
				rtext: "Yes",
				rval: "Yes"
			}, {
				rtext: "No",
				rval: "No"
			}],
			question_placeholder: "",
			question_col_size: 'col-md-4'
		}, {
			question_id: 'S4C6Q31',
			question_type: 'text',
			question_text: 'If Yes, reason:',
			question_col_size: 'col-md-12'
		}]
	}]
}];
