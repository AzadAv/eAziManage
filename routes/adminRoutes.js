const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//EVENTS

//management/events => GET
router.get('/events', adminController.getEvents);


//MENUS

//management/menus => GET
router.get('/menus', adminController.getMenus);

//management/add-menu => POST 
router.post('/add-menu',adminController.postAddMenu);

//management/update-menu => POST
router.post('/edit-menu',adminController.postEditMenu);

//management/delete-menu => POST
router.post('/delete-menu',adminController.postDeleteMenu);

//MENU ITEMS

//management/menu-items => GET
router.get('/menu-items',adminController.getMenuItems);

//management/add-item => POST
router.post('/add-item', adminController.postAddItem);

//management/update-item => POST
router.post('/edit-item',adminController.postEditMenuItem)

//management/delete-item => POST
router.post('/delete-item', adminController.postDeleteMenuItem);


module.exports = router;