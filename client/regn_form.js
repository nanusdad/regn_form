// Get Answers collection
Meteor.subscribe("answers");

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
	},
	isPara: function(qfield) {
		if (qfield === 'para') {
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
	// var apane = $('#section_content div.tab-pane.active');
	var apane = $('#survey_content div.tab-pane.fade.active.in div.active');
	// var fpane = $('#section_content div.tab-pane').first();
	var fpane = $('#survey_content div.tab-pane.fade.active.in div.tab-pane').first();
	// $('#section_content div.tab-pane').last();
	var lpane = $('#survey_content div.tab-pane.fade.active.in div.tab-pane').last();

	// This needs to happen on click of survey tab

	if (apane.get(0).id === fpane.get(0).id) {
		console.log('rendering');
		//$('.previous').addClass('disabled');
		$('.previous').hide();
	}

	if (apane.get(0).id === lpane.get(0).id) {
		console.log('rendering');
		//$('.previous').addClass('disabled');
		$('.next').hide();
	}
	// if (apane.get(0).id === fpane.get(0).id) {
	// 	console.log('rendering');
	// 	//$('.previous').addClass('disabled');
	// 	$('.previous').hide();
	// }

	function fillInputFields(element) {
		console.log(element.name);
		var el = element.name;
		var a = Answers.findOne({
			user_id: Meteor.userId()
		});
		var v = a[el];
		console.log('setting ' + el + ' to ' + v);
		$('#' + el).val(v);

		if (element.type !== "radio") {
			
			$('#' + el).val(v);
		}
		else {
			$('#' + v).prop('checked', true);
		}
		// var r = ($('#pdform input[type=radio]'));
		// _.values(r).forEach(function(element) {
		// 	if (element.type === "radio") {
		// 		// var rval = $('#' + element.id + ':checked').val();
		// 		console.log(element.name);
		// 		console.log('radio field ' + element.name + ' set to ' + a[element.name]);

		// 	}
		// });
	}


	var answers = $('#pdform').serializeArray();

	// Handle radio buttons

	 var r = ($('#pdform input[type=radio]'));
	 _.values(r).forEach(function(element) {
	 	if (element.type === "radio") {
			var rval = $('#' + element.id + ':checked').val();
	// 		console.log(element.name);
	// 		console.log('radio field ' + element.name);
	// 			console.log('radio setting' + rval + ' to true');
	// 			$('#' + rval).prop('checked', true);
			
			answers.push({
				name: element.name,
				type: 'radio'
			});


	 	}
	 });
	 console.log('render answers', answers);

	answers.forEach(fillInputFields);
};

Template.survey_tabs.events({
	'click .next-section-btn': function() {
		var values = {};

		function logArrayElements(element, index, array) {
			// console.log("a[" + index + "] = " + JSON.stringify(element));
			values[element.name] = element.value;
		}

		// var tab_id = 'pdform_' + $('#section_content div.tab-pane.active').get(0).id;
		// $('#' + tab_id).serializeArray().forEach(logArrayElements);
		$('#pdform').serializeArray().forEach(logArrayElements);

		// Handle radio buttons

		var r = ($('#pdform input[type=radio]'));
		_.values(r).forEach(function(element) {
			if (element.type === "radio") {
				var rval = $('#' + element.id + ':checked').val();
				console.log(element.name);
				if (!_.isUndefined(rval)) {
					values[element.id] = rval;
				}

			}
		});


		console.log(values);

		Meteor.call('insertAnswers', values, function(err, res) {
			if (err) {
				console.log('cannot insert' + err);
			} else {
				console.log('inserted' + res);
			}
		});

		var apane = $('#section_content div.tab-pane.active');
		console.log(apane);
		apane.removeClass('in active');
		// $('#PersonalDetails').removeClass('in active');
		apane.next().addClass('in active');

		var fpane = $('#section_content div.tab-pane').first();
		var lpane = $('#section_content div.tab-pane').last();
		// var npane = $('#section_content div.tab-pane.active').next();
		// var ppane = $('#section_content div.tab-pane.active').prev();
		var npane = $('#survey_content div.tab-pane.fade.active.in div.active').next();
		var ppane = $('#survey_content div.tab-pane.fade.active.in div.active').prev();

		var atab = $('#survey_content div.tab-pane.fade.active.in ul.nav li.active');
		var ntab = $('#survey_content div.tab-pane.fade.active.in ul.nav li.active').next();
		var ptab = $('#survey_content div.tab-pane.fade.active.in ul.nav li.active').prev();

		atab.removeClass('active');
		ntab.addClass('active');

		// if (npane.get(0).id === fpane.get(0).id) {
		if (npane.get(0) !== undefined) {
			$('.next').show();

		} else {
			$('.next').hide();
		}

		if (ppane.get(0) !== undefined) {
			$('.previous').show();
		} else {
			$('.previous').hide();
		}

		// 	function fillInputFields(element) {
		// 	console.log(element.name);
		// 	var el = element.name;
		// 	var a = Answers.findOne({user_id: Meteor.userId()});
		// 	var v = a[el];
		// 	console.log(v);
		// 	$('#' + el).val(v);
		// }
		// var tab_id = 'pdform_' + $('#section_content div.tab-pane.active').next().get(0).id;
		// $('#' + tab_id).serializeArray().forEach(fillInputFields);



		return false;
	},
	'click .prev-section-btn': function() {
		var apane = $('#section_content div.tab-pane.active');
		apane.removeClass('in active');
		apane.prev().addClass('in active');

		var atab = $('#survey_content div.tab-pane.fade.active.in ul.nav li.active');
		var ntab = $('#survey_content div.tab-pane.fade.active.in ul.nav li.active').next();
		var ptab = $('#survey_content div.tab-pane.fade.active.in ul.nav li.active').prev();

		atab.removeClass('active');
		ptab.addClass('active');

		var npane = $('#survey_content div.tab-pane.fade.active.in div.active').next()
		var ppane = $('#survey_content div.tab-pane.fade.active.in div.active').prev()

		// var npane = $('#section_content div.tab-pane.active').next();
		// var ppane = $('#section_content div.tab-pane.active').prev();

		if (npane.get(0) !== undefined) {
			$('.next').show();
		} else {
			$('.next').hide();
		}

		if (ppane.get(0) !== undefined) {
			$('.previous').show();
		} else {
			$('.previous').hide();
		}

		return false;

	}
});