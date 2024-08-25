const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class MenuItem {

    constructor(

        id,
        nameEn,
        nameHe,
        quantity,
        cost,
        type
    ) {

        this._id = id ? new mongodb.ObjectId(id) : null;
        this.nameEn = nameEn;
        this.nameHe = nameHe;
        this.quantity = quantity;
        this.cost = cost;
        this.type = type
    }

    save() {

        const db = getDb();
        let dbOp;

        if (this._id) {

            dbOp = db.collection('menuItemsList').updateOne(

                {

                    _id : this._id,
                },
                { $set : this}
            );
        } else {

            dbOp = db.collection('menuItemsList').insertOne(this);
        }

        return dbOp
        .then((result) => {

            console.log(result);
        })
        .catch((err) => {

            console.log(err);
        })
    }

    static fetchAll() {

        const db = getDb();

        return db
        .collection('menuItemsList')
        .find()
        .toArray()
        .then((menuItemsList) => {

            console.log(menuItemsList);

            return menuItemsList;
        })
        .catch((err) => {

            console.log(err);
        })
    }

    static deleteById(eventId) {

        const db = getDb();
  
        return db.collection('menuItemsList')
        .deleteOne({_id: new mongodb.ObjectId(eventId)})
        .then(result => {
  
            console.log('Deleted Menu item');
        })
        .catch(err => {
  
            console.log(err);
        })
    }
}

module.exports = MenuItem;