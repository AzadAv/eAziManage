const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

// const ProductionList = [

//     {
//         id: 0,
//         orderName: "",
//         guestsNum: 50,
//         guestsType: "",
//         orderDate: "",
//         orderTime: "",
//         menuName: "",
//         eventType: true,
//         items: [
//           {
//             id: 0,
//             nameEn: "",
//             nameHe: "",
//             type: "",
//             quantity: 1,
//             ready: false,
//           }
//         ],
//         comments: [
//           {
//             id: 0,
//             topic: "",
//             department: "",
//             description: "",
//           },
//         ],
//         ready: false,
//       },
// ]

class ProductionListEvent {

    constructor(
        id,
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
    ) {

      this._id = id ? new mongodb.ObjectId(id) : null;
      this.orderName = orderName;
      this.guestsNum = guestsNum;
      this.guestsType = guestsType;
      this.orderDate = orderDate;
      this.orderTime = orderTime;
      this.menuName = menuName;
      this.eventType = eventType;
      this.price = price;
      this.items = items;
      this.comments = comments;
      this.ready = ready;
    }

    save() {

      const db = getDb();
      let dbOp;

      if (this._id) {

        dbOp = db.collection('productionList').updateOne(

          {
            _id : this._id,
        },
        { $set : this}
      );
      } else {

        dbOp = db.collection('productionList').insertOne(this);
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
      .collection('productionList')
      .find()
      .toArray()
      .then((productionListItems) => {
  
          console.log(productionListItems);
          return productionListItems;
      })
      .catch((err) =>{
  
          console.log(err);
      })
    }
    
    static deleteById(eventId) {

      const db = getDb();

      return db.collection('productionList')
      .deleteOne({_id: new mongodb.ObjectId(eventId)})
      .then(result => {

          console.log('Deleted production list event');
      })
      .catch(err => {

          console.log(err);
      })
    }
}

module.exports = ProductionListEvent;