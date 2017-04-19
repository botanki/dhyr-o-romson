module.exports = class Broker {

	schema(){
		return {
			id: {type: number},
			img: {type: string},
			name: {type: string},
			phone: {type: number},
			email: {type: string},
			about: {type: string}
		}
	}
}
