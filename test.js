/**
 * Created by seymour.h on 05/21/2016.
 */
var mongo = require('mongodb');
var uri = "mongodb://localhost:27017/example";

mongo.MongoClient.connect(uri, function (error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }

    db.collection('sample').insert({x: 1}, function (error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        db.collection('sample').find().toArray(function (error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }

            console.log('Found docs:');
            docs.forEach(function (doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });
    });
});//MongoClient