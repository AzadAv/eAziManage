const express = require('express');
const router = express.Router();
const waitingListController = require('../controllers/waitingListController');

//waiting-list/events => GET
router.get('/events',waitingListController.getWaitingListEvents);

//waiting-list/add-event => POST
router.post('/add-event', waitingListController.postAddEventToWaitingList);

//waiting-list/edit-event => POST
router.post('/edit-event', waitingListController.postEditEventOnWaitingList)

//waiting-list/delete-event => POST
router.post('/delete-event', waitingListController.postDeleteEventOnWaitingList);


module.exports = router;