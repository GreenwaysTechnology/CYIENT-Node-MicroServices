const MongoClient = require('mongodb').MongoClient


class CustomerService {

    findAll() {

        return new Promise((resolve, reject) => {
            let url = "mongodb://localhost:27017/customersdb";
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                const dbo = db.db("customersdb");
                dbo.collection("customers").find({}).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                        db.close();
                    } else {
                        resolve(result)
                        db.close();
                    }

                });
            });
        })

    }
}
module.exports = new CustomerService();