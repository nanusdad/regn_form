Meteor.publish('answers', function() {
	console.log(this.userId);
	return Answers.find({
		user_id: this.userId
	});
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