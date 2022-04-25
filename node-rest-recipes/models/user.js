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
	}
});

export default mongoose.model('User', usersSchema);
