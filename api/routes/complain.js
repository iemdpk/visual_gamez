var express = require('express')
var router = express.Router();
const {connect, con} = require('../mysqlConnect');
var uuid = require("uuid");

router.get("/complainRequest",(req,res)=>{
    
    var owner_special_id = req.query.owner_special_id;
    var renter_special_id = req.query.renter_special_id;
    var complain_photo = req.query.complain_photo;
    var complain_request = req.query.complain_request;
    var room_special_id = req.query.room_special_id;

    if(owner_special_id.length == undefined){
    con,query("INSERT INTO `complain` (`owner_special_id`, `renter_special_id`, `complain_photo`, `complain_request`, `room_special_id`) VALUES ('"+owner_special_id+"', '"+renter_special_id+"', '"+complain_photo+"', '"+complain_request+"', '"+room_special_id+"')",(err,result,field)=>{
        res.send(result);
    });
}
else{
    var data = {"msg":"it is not reciveing"};
    res.send(data);
}

});

module.exports = router;