Meteor.startup(function() {
	console.log('we are here ooo');
		console.log(Surveys.find().count());
	if(Surveys.find().count() === 0) {
		console.log('we are here');
		console.log(init_surveys);
		init_surveys.forEach(function (element) {
			Surveys.insert(element);
		});
	}
});


Meteor.publish('answers', function() {
	console.log(this.userId);
	return Answers.find({
		user_id: this.userId
	});
});

Meteor.publish('surveys', function() {
	return Surveys.find({});
});

Meteor.methods({

	/**
	 * Insert answers
	 */
	insertAnswers: function(answer_recs) {
		var userid = Meteor.userId();
		console.log(userid);
		answer_recs["user_id"] = userid;
		console.log(JSON.stringify(answer_recs));
		var answers = JSON.stringify(answer_recs);
		if (Answers.findOne({ user_id: userid })) {
			console.log(answers);
			Answers.update({user_id: userid}, { $set: JSON.parse(answers) });
			// Answers.update({ user_id: "CoLm94sMNRBej9hG3"}, { $set: { S1C1Q1: "Arun"} })
		} else {
			Answers.insert(answer_recs);
		}
	}

});


Accounts.emailTemplates.siteName = "CMC Dist Edu";
Accounts.emailTemplates.from = "CMC Dist Edu Admin <admin@cmcdistedu.org>";
Accounts.emailTemplates.verifyEmail.subject = function (user) {
    return "Welcome to CMC Dist Edu";
};
Accounts.emailTemplates.verifyEmail.text = function (user, url) {
   return "Thank you for registering for step 2 of Family Med application.!\n\n"
     + " To activate your account, simply click the link below:\n\n"
     + url;
};
