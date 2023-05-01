const express = require("express");
const router = express.Router();

router.get("/new-event",function(req, res, next) {

    
    res.send("New event get API");
});

module.exports = router;