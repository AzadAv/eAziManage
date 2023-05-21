const mongodb = require("mongodb");
const WaitingListEvent = require('../models/waiting-list');
const ObjectId = mongodb.ObjectId;

//waiting-list/events => GET
exports.getWaitingListEvents = (req,res,next) => {

    WaitingListEvent.fetchAll()
    .then((events) => {

        res.json(events);
    })
    .catch((err) => console.log(err));
}

//waiting-list/add-event => POST
exports.postAddEventToWaitingList = (req,res,next) => {

    console.log(req.body);
     
    const name  = req.body.name;
    const guestsNum = req.body.guestsNum;
    const guestsType = req.body.guestsType;
    const date = req.body.date;
    const time = req.body.time;
    const menu = req.body.menu;
    const eventType = req.body.eventType;
    const price = req.body.price;
    const menuItems = req.body.menuItems;
    const comments = req.body.comments;
    const event = new WaitingListEvent(

        null,
        name,
        guestsNum,
        guestsType,
        date,
        time,
        menu,
        eventType,
        price,
        menuItems,
        comments
        
    );
    event
        .save()
        .then((result) => {

            console.log("Created Event");
            res.send('Added Successfully');
        })
        .catch((err) => {
            console.log(err);
          });

}

//waiting-list/edit-event => POST
exports.postEditEventOnWaitingList = (req,res,next) => {

    const eventId = req.body.eventId;
    const updatedName  = req.body.name;
    const updatedGuestsNum = req.body.guestsNum;
    const updatedGuestsType = req.body.guestsType;
    const updatedDate = req.body.date;
    const updatedTime = req.body.time;
    const updatedMenu = req.body.menu;
    const updatedEventType = req.body.eventType;
    const updatedPrice = req.body.price;
    const updatedMenuItems = req.body.menuItems;
    const updatedComments = req.body.comments;

    const event = new WaitingListEvent(

        new ObjectId(eventId),
        updatedName,
        updatedGuestsNum,
        updatedGuestsType,
        updatedDate,
        updatedTime,
        updatedMenu,
        updatedEventType,
        updatedPrice,
        updatedMenuItems,
        updatedComments

    )

    event
        .save()
        .then((result) => {

            console.log("UPDATED Event!");
            res.send("UPDATED Event!");
        })
        .catch((err) => console.log(err));
}

//waiting-list/delete-event => POST
exports.postDeleteEventOnWaitingList = (req,res,next) => {

    const eventId = req.body.eventId;
    WaitingListEvent.deleteById(eventId)
    .then((argument) => {

        console.log("Destroyed product");
        res.send("Destroyed product");
    })
    .catch((err) => console.log(err));
}