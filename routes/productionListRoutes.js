const express = require('express');
const router = express.Router();
const productionListController = require('../controllers/productionListController');

//production-list/events => GET 
router.get('/events',productionListController.getProductionListEvents);

//production-list/add-event => POST
router.post('/add-event',productionListController.postAddEventToProductionList);

//production-list/edit-event => POST
router.post('/edit-event',productionListController.postEditEventOnProductionList);

//production-list/delete-event => POST
router.post('/delete-event', productionListController.postDeleteEventOnProductionList);

//production-list/count-orders
router.post('/count-orders', productionListController.postCountOrdersByDate);


module.exports = router;
