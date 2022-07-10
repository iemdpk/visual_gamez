const express = require('express')
const router = express.Router()
var mysql = require('mysql');
const {connect, con} = require('../mysqlConnect');
var uuid = require("uuid");

router.get('/registration_owner', (req, res) => {
  var number = req.query.number;
  var special_id = uuid.v4();
  con.query("INSERT INTO `owner_registration` (`id`, `name`, `address`, `special_id`, `contact_number`) VALUES (NULL, 'N.A', 'N.A', '"+special_id+"', '"+number+"');",(err,result)=>{
    var data = {"status":"ok","msg":"Number Register Successfull"}
    res.send(data);
  });
});

router.get('/registration_extra_data', (req, res) => {
  var special_id = req.query.special_id;
  var name = req.query.name;
  var address = req.query.address;
  var landmark = req.query.landmark;
  con.query("update `owner_registration`  set `name` = '"+name+"',`address`='"+address+"',`landmark`='"+landmark+"' WHERE `special_id` = '"+special_id+"'",(err,result)=>{
    var data = {"status":"ok","msg":"Number Updated Successfull"}
    res.send(data);
  });
});



module.exports = router