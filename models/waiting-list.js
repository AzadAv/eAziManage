const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class WaitingListEvent {
  constructor(
    id,
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
  ) {

    this._id = id ?  new mongodb.ObjectId(id) : null;
    this.name = name;
    this.guestsNum = guestsNum;
    this.guestsType = guestsType;
    this.date = date;
    this.time = time;
    this.menu = menu;
    this.eventType = eventType;
    this.price = price;
    this.menuItems = menuItems;
    this.comments = comments;
  }

  save() {

    const db = getDb();
    let dbOp;

    if(this._id) {

        dbOp = db.collection('waitingList').updateOne(

            {
                _id : this._id,
            },
            { $set : this}
        );
    } else {

        dbOp = db.collection('waitingList').insertOne(this);
    }

    return dbOp
    .then((result) => {

        console.log(result);
    })
    .catch((err) =>{

        console.log(err);
    })
  }

  static fetchAll() {

    const db = getDb();

    return db
    .collection('waitingList')
    .find()
    .toArray()
    .then((waitingListItems) => {

        console.log(waitingListItems);
        return waitingListItems;
    })
    .catch((err) =>{

        console.log(err);
    })
  }

  static deleteById(eventId) {

    const db = getDb();

    return db.collection('waitingList')
    .deleteOne({_id: new mongodb.ObjectId(eventId)})
    .then(result => {

        console.log('Deleted waiting list event');
    })
    .catch(err => {

        console.log(err);
    })
  }

}

// {  
//   "name" : "Test",
//   "guestsNum" : "Test num",
//   "guestsType" : "Test guests type",
//   "date" : "Test date",
//   "time" : "Test time",
//   "menu" : "Test menu",
//   "eventType" : "Test type",
//   "price" : "Test price",
//   "menuItems" : [

//       {
//        "id" : 0,
//         "nameEn": "Water with cucumbers",
//         "nameHe": "מים עם מלפפון",
//         "type": "drinks",
//         "quantity": 1
//       },
//       {
//         "id" : 1,
//         "nameEn": "Lemonade",
//         "nameHe": "לימונדה",
//         "type": "drinks",
//         "quantity": 1
//        }

// ],
//   "comments" : [{
//           "id": 0,
//           "topic": "Test",
//           "department": "Test Department",
//           "description": "Test Description"
//       },
//       {   "id": 1,
//           "topic": "Test 2",
//           "department": "Test Department 2",
//           "description": "Test Description 2"
//       }]
// }
module.exports = WaitingListEvent;
