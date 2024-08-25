const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;


class Menu {

    constructor(

        id,
        menuNameEn,
        menuNameHe,
        pricePerPerson,
        items
    ) {

        this._id = id ? new mongodb.ObjectId(id) : null;
        this.menuNameEn = menuNameEn;
        this.menuNameHe = menuNameHe;
        this.pricePerPerson = pricePerPerson;
        this.items = items;
    }

    save() {

        const db = getDb();
        let dbOp;

        if (this._id) {

            dbOp = db.collection('menus').updateOne(

                {

                    _id : this._id,
                },
                { $set : this}
            );
        } else {

            dbOp = db.collection('menus').insertOne(this);
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
        .collection('menus')
        .find()
        .toArray()
        .then((menus) => {

            console.log(menus);

            return menus;
        })
        .catch((err) => {

            console.log(err);
        })
    }

    static deleteById(eventId) {

        const db = getDb();
  
        return db.collection('menus')
        .deleteOne({_id: new mongodb.ObjectId(eventId)})
        .then(result => {
  
            console.log('Deleted Menu');
        })
        .catch(err => {
  
            console.log(err);
        })
    }

}

module.exports = Menu;