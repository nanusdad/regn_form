Template.main.email_verified = function() {
	return Meteor.users.findOne({ _id: Meteor.userId() }, { emails: { $slice : 0 } } ).emails[0].verified;
}