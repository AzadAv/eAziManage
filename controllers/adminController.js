// exports.getEvents
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const Menu = require('../models/menu');
const MenuItem = require('../models/menu-item');
const ProductionListEvent = require("../models/production-list");

//management/events => GET
exports.getEvents = (req,res,next) => {

    ProductionListEvent.fetchAll()
    .then((events) => {

        res.json(events);
    })
    .catch ((err) => console.log(err));
}

//management/add-event => POST


//management/update-event => POST

// MENUS

//management/menus => GET
exports.getMenus = (req,res,next) => {

    Menu.fetchAll()
    .then((menus) => {

        res.json(menus);
    })
    .catch((err) => console.log(err));
}

//management/add-menu => POST
exports.postAddMenu = (req,res,next) => {

    const menuNameEn = req.body.menuNameEn;
    const menuNameHe = req.body.menuNameHe;
    const pricePerPerson = req.body.pricePerPerson;
    const items = req.body.items;
    const menu = new Menu(

        null,
        menuNameEn,
        menuNameHe,
        pricePerPerson,
        items
    );
    menu
    .save()
    .then((result) =>{

        console.log("Created Menu");
        res.send("Created new Menu");
    })
    .catch((err)=>{

        console.log(err);
    })
}

//management/update-menu => POST
exports.postEditMenu = (req,res,next) => {

    const menuId = req.body.menuId;
    const updatedMenuNameEn = req.body.nameEn;
    const updatedMenuNameHe = req.body.nameHe;
    const updatedPricePerPerson = req.body.pricePerPerson;
    const updatedItems = req.body.items;
    const menu = new Menu(

        new ObjectId(menuId),
        updatedMenuNameEn,
        updatedMenuNameHe,
        updatedPricePerPerson,
        updatedItems
    ) 

    menu
    .save()
    .then((result) =>{

        console.log('Updated Menu');
        res.send(result);
    })
    .catch((err) => console.log(err));
}

//management/delete-menu => POST
exports.postDeleteMenu = (req,res,next) => {

    const menuId = req.body.menuId;
    Menu.deleteById(menuId)
    .then(() =>{

        console.log("Deleted Menu");
        res.send("Successfully deleted menu");
    })
    .catch((err) => console.log(err));
}
// MENU ITEMS

//management/items => GET
exports.getMenuItems = (req,res,next) => {

    MenuItem.fetchAll()
    .then((menuItems)=> {

        res.json(menuItems);
    })
    .catch((err) => console.log(err));
}
//management/add-item => POST
exports.postAddItem = (req,res,next) => {

    const itemNameEn = req.body.nameEn;
    const itemNameHe = req.body.nameHe;
    const quantity = 1;
    const cost = req.body.cost;
    const type = req.body.type;
    const menuItem = new MenuItem(

        null,
        itemNameEn,
        itemNameHe,
        quantity,
        cost,
        type
    );
    menuItem
        .save()
        .then((result) => {

            console.log("Created Menu Item");
            res.send("New menu item successfully added");
        })
        .catch((err) => {

            console.log(err);
        })
}
//management/update-item
exports.postEditMenuItem = (req,res,next) => {

    const menuItemId = req.body.menuItemId;
    const updatedItemNameEn = req.body.nameEn;
    const updatedItemNameHe = req.body.nameHe;
    const updatedQuantity = req.body.quantity;
    const updatedCost = req.body.cost;
    const updatedType = req.body.type;

    const menuItem = new MenuItem(

        new ObjectId(menuItemId),
        updatedItemNameEn,
        updatedItemNameHe,
        updatedQuantity,
        updatedCost,
        updatedType
    )

    menuItem
        .save()
        .then((result) => {

            console.log('updated menu Item');
            res.send(result);
        })
        .catch((err) => console.log(err));
}
//management/delete-item
exports.postDeleteMenuItem = (req,res,next ) => {

    const menuItemId = req.body.menuItemId;
    MenuItem.deleteById(menuItemId)
    .then((argument) => {

        console.log("Deleted menu Item");
        res.send("Deleted menu item");
    })
    .catch((err) => console.log(err));
}