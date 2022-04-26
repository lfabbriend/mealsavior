import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
	userName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	ownrecipes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Recipe'
		}
	],
	favrecipes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Recipe'
		}
	]
});

export default mongoose.model('User', usersSchema);
