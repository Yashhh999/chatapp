const MongoClient=require("mongodb");
const {email,password}=require("../app/register/page")
async function run(){
    const uri =
    "mongodb+srv://yash:yash@cluster0.nipsp49.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  await client.close();
}
run().catch(console.dir);