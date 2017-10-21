const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo',(err,db) =>{
    if(err){
        return console.log('error in connectiong to database');
    }

    console.log('connected to database successfully');

    // db.collection('todolist').deleteMany({name:'abhilash'}).then((res)=> {
    //     console.log(res);
    // })

    // db.collection('todolist').deleteOne({text:'abhilash'}).then((res)=> {
    //     console.log(res)
    // })

    db.collection('todolist').findOneAndDelete({age : 24}).then((res) =>{
        console.log(res);
    })

})
