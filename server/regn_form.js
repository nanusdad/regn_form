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
		console.log(Meteor.userId());
		answer_recs["user_id"] = Meteor.userId();
		console.log(JSON.stringify(answer_recs));

		Answers.insert(answer_recs);
	}

});