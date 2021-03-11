const CustomError = require("../extensions/custom-error");

const chainMaker = {

	chain: [],
	
	getLength() {
		return this.chain.length;
	},
	
	addLink(value) {
		if (!arguments){
			this.chain.push(`( )`);
		} else {
			this.chain.push(`( ${value} )`);
		}
		return this;
		},
	
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	
	removeLink(position){
		if(position >= this.chain.length || !position.isInteger ||position.isNaN ) {
			this.chain = [];
			throw new CustomError('Not implemented');
			} else {
			this.chain.splice(position - 1, 1);
			return this;
		}
	},
	
		
	finishChain() {
		let str = this.chain.join('~~');
		this.chain = [];
		return str;
		},
	
};
   


module.exports = chainMaker;
