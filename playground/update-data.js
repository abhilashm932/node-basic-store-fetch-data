const {MongoClient, ObjectId  } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo',(err,db)=>{
    if(err){
        return console.log('error in connectiong to database');
    }

    console.log('connection successful with the database');

    db.collection('todolist').findOneAndUpdate({
        _id : new ObjectId('59eb2f458906a51190123d09') 
    },
    {
        $set:
            {
                text: 'Abhilash'
            },
        $inc: 
            { 
                age: -2 
            }
    },{
        returnOriginal : false
    }).then((res) => {
        console.log(res);
    })

})