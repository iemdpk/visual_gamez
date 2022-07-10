var express = require('express')
var router = express.Router();
const {connect, con} = require('../mysqlConnect');
var uuid = require("uuid");

router.get("/rentalRegister",(req,res)=>{
    var special_id = uuid.v4();
    var name = req.query.name;
    var address = req.query.address;
    var phone_1 = req.query.phone_1;
    var phone_2 = req.query.phone_2;
    var id_proof = req.query.id_proof;
    var job_occupation = req.query.job_occupation;
    var company_school_name = req.query.company_school_name;
    var room_allot_special_id = req.query.room_allot_special_id;
    var owner_special_id = req.query.owner_special_id
    var starting_date = req.query.starting_date;

if(name.length =undefined){
        con.query("INSERT INTO `Renter` (`special_id`, `name`, `address`, `phone_1`, `phone_2`, `id_proof`, `job_occupation`, `company/School_name`, `room_allot_special_id`, `owner_special_id`, `starting_date`) VALUES ('"+special_id+"', '"+name+"', '"+address+"', '"+phone_1+"', '"+phone_2+"', '"+id_proof+"', '"+job_occupation+"', '"+company_school_name+"', '"+room_allot_special_id+"', '"+owner_special_id+"', '"+starting_date+"');",(err,result,fields)=>{
        res.send(result);
    });
}
else{
    var msg =  {"msg":"Please Enter The Complete Data"};
    res.status(200).send(msg);
}
});

module.exports = router;