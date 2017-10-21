const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo',(err,db) =>{
    if(err){
        return console.log('error in connectiong to database');
    }

    console.log('connected to database successfully');

    db.collection('todolist').find({name: 'raj'}).toArray().then((dosc) => {
        console.log('the list of data');
        console.log(dosc);
    },(err) => {
        console.log('error in fetching the data')
    })

})

// 59eb2f458906a51190123d09