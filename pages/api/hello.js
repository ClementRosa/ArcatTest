import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {

  if(req.method !== 'GET') {
    res.status(500).json({message: 'Méthode non prise en charge'})

  }

  const client = await clientPromise;
  const db = client.db("Test");
  const result = await db.collection("data").find({
    timestamp: { $gt: 1229212214291 } 
  }).limit(150).toArray();



  res.status(200).json(result)
}
