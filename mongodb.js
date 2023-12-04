const { MongoClient, ObjectId } = require('mongodb-legacy')

const conectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(conectionURL, { useNewUrlParser:true }, (error,client)=>{
    if (error){
        return console.log('Unable to conect to database: '+error);
    }
    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description:'Clean the house'
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log(e)
    })
})