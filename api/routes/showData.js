const express = require('express')
const router = express.Router()
var mysql = require('mysql');
const {connect, con} = require('../mysqlConnect');

router.get('/showData', (req, res) => {
    con.query("SELECT * FROM `leads`",(err,result)=>{
        res.send(JSON.stringify(result));
      });
});

module.exports = router;
