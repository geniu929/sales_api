const {Router} = require('express')
const Sales = require('../models/Sales')
const SalesTax = require("sales-tax")
const auth =require('../middleware/auth.middleware')
const router = Router()

router.post('/generate',auth, async(req, res)=> {
    try{
        const from =   req.body
        const oc = from.origin_country
        const cc = from.customer_country
        const cs = from.customer_state
        const cvn = from.customer_VAT_number

        SalesTax.setTaxOriginCountry ( oc )
        const tax =  SalesTax.getSalesTax(cc, cs, cvn)
        const sales = new Sales({oc, cc, cs, cvn, tax, owner: req.user.userId})

        await sales.save()

        res.status(201).json({tax})

    }catch(e){
        res.status(500).json({message: 'error 500'})
    }
})

module.exports = router