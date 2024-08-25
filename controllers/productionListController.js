const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const ProductionListEvent = require('../models/production-list');

//production-list/events => GET 
exports.getProductionListEvents = (req,res,next) =>{


    ProductionListEvent.fetchAll()
    .then((events) => {

        res.json(events);
    })
    .catch((err) => console.log(err));
}
//production-list/add-event => POST
exports.postAddEventToProductionList = (req,res,next) =>{

    const orderName = req.body.orderName;
    const guestsNum = req.body.guestsNum;
    const guestsType = req.body.guestsType;
    const orderDate = req.body.orderDate;
    const orderTime = req.body.orderTime;
    const menuName = req.body.menuName;
    const eventType = req.body.eventType;
    const price = req.body.price;
    const items = req.body.items;
    const comments = req.body.comments;
    const ready = req.body.ready;

    const event = new ProductionListEvent(

            null,
            orderName,
            guestsNum,
            guestsType,
            orderDate,
            orderTime,
            menuName,
            eventType,
            price,
            items,
            comments,
            ready,
    );
    event.save()
    .then((result) =>{

        console.log("Created Event");
            res.send('Added to production list Successfully');
    })
    .catch((err) => {

        console.log(err);
    })
    
}
//production-list/update-event => POST
exports.postEditEventOnProductionList = (req,res,next) =>{

    const eventId = req.body.eventId;
    const updatedOrderName = req.body.orderName;
    const updatedGuestsNum = req.body.guestsNum;
    const updatedGuestsType = req.body.guestsType;
    const updatedOrderDate = req.body.orderDate;
    const updatedOrderTime = req.body.orderTime;
    const updatedMenuName = req.body.menuName;
    const updatedEventType = req.body.eventType;
    const updatedPrice = req.body.price;
    const updatedItems = req.body.items;
    const updatedComments = req.body.comments;
    const updatedReady = req.body.ready;

    const event = new ProductionListEvent(

        new ObjectId(eventId),
        updatedOrderName,
        updatedGuestsNum,
        updatedGuestsType,
        updatedOrderDate,
        updatedOrderTime,
        updatedMenuName,
        updatedEventType,
        updatedPrice,
        updatedItems,
        updatedComments,
        updatedReady,
        );
        event.save()
        .then((result) =>{

            console.log("Updated Production List Event");
                res.send('Updated event at production list Successfully');
        })
        .catch((err) => {

            console.log(err);
        })


}
//production-list/delete-event => POST
exports.postDeleteEventOnProductionList = (req,res,next) =>{

    const eventId = req.body.eventId;
    ProductionListEvent.deleteById(eventId)
    .then((argument) => {

        console.log("Destroyed production list item");
        res.send("Destroyed production list item");
    })
    .catch((err) => console.log(err));
}

//production-list/count-orders
exports.postCountOrdersByDate = (req,res,next) => {

    ProductionListEvent.fetchAll()
    .then((orders) => {

        let ordersNum = 0;
        // res.json(events);
        orders.map((order)=> {


            if(order.orderDate === req.body.orderDate){

                ordersNum=ordersNum+1;
            }
        })

        // res.send("Helloo");
        res.json(ordersNum);  
    })
    .catch((err) => console.log(err));
}