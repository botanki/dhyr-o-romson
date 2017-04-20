module.exports = class Estate extends Broker {

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
			brokers:[{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Broker'
			}],
			title: {type: String},
			body: {type: String},
			year: {type: Number},
			next_date: {type: Date},
			date_added: {type: Date},
			on_sale: {type: Boolean}
		};
	}

	populate(){
		return 'brokers';
	}

};
