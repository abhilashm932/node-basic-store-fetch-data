const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo',(err,db) => {
    if(err){
      return  console.log("faied to connect with the database",err)
    }

    console.log('connected with the database');

    db.collection('todolist').insertOne({
        text: 'some text',
        compleated:false
    },(err, result) =>{
        if(err){
            return console.log('error in creating a db');
        }

        console.log( JSON.stringify(result.ops,undefined,2) )
    });


    db.close();
});
