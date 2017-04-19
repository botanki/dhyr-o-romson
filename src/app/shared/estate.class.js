module.export = class Estate extends Broker {

	schema() {
		return Object.assign({}, super.schema(),{
			id: {type: number},
			area: {type: string},
			address: {type: string},
			type: {type: string},
			rooms: {type: number},
			space: {type: number},
			monthly_rental: {type: number},
			price: {type: number},
			img_master: {type: string},
			img_detail: {type: string},
			alt_1: {type: string},
			alt_2: {type: string},
			brokers: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Broker'
			}],
			title: {type: string},
			body: {type: string},
			year: {type: number},
			next_date: {type: date},
			date_added: {type: date},
			on_sale: {type: boolean}
		});
	}

	populate(){
		return 'brokers';
	}

};
