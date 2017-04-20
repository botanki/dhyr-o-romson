module.exports = class Broker {

	schema(){
		return {
			id: {type: Number},
			img: {type: String},
			name: {type: String},
			phone: {type: String},
			email: {type: String},
			about: {type: String}
		};
	}
};
