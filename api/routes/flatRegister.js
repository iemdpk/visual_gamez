var express = require('express')
var router = express.Router();
const {connect, con} = require('../mysqlConnect');

router.get("/flatRegister",(req,res)=>{

    // `id`, `room_no`, `flat_allocated_special_id`, `flat_electricity_bill`, `flat_maintaince_charges`, `flat_rent`, `total_earning_from_flat`, `owner_special_id`, `avance_payment`\

    var roomNo = req.query.room_no;
    var flat_rent = req.query.flat_rent;
    var owner_special_id = req.query.owner_special_id;
    con.query("INSERT INTO `flats` (`room_no`,`flat_rent`,`owner_special_id`) VALUES ('"+roomNo+"','"+flat_rent+"', '"+owner_special_id+"');",(err,result)=>{
        res.send(result);
    })
 });

module.exports = router;