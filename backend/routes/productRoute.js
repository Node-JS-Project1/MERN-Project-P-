const express=require('express')
const { getAllProduct } = require('../controller/productController')


const router=express.Router()

router.route('/product').get(getAllProduct)

modeule.exports=router