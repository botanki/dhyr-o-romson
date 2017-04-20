module.exports = class Estate {

	schema() {
		return {
			id: {type: Number},
			area: {type: String},
			address: {type: String},
			type: {type: String},
			rooms: {type: Number},
			space: {type: Number},
			monthly_rental: {type: Number},
			price: {type: Number},
			img_master: {type: String},
			img_detail: {type: String},
			alt_1: {type: String},
			alt_2: {type: String},
			broker: [{
				id: {type: Number},
				img: {type: String},
				name: {type: String},
				phone: {type: String},
				email: {type: String}
			}],
			title: {type: String},
			body: {type: String},
			year: {type: Number},
			next_date: {type: Date},
			date_added: {type: Date},
			on_sale: {type: Boolean}
		};
	}

};
