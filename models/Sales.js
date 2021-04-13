const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    origin_country: {type: String, required: true},
    customer_country: {type: String, required: true},
    customer_state: {type: String, required: true},
    customer_VAT_number: {type: String, required: true},
    VAT_tax_rate: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}

})

module.exports = model('Link', schema)