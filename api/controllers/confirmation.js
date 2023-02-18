import mongo from '../database/mongo';
const DATABASE = process.env.DATABASE;

const findAll = async (req, res) => {
  await mongo.connect();

  const confirmations = await mongo
    .db(DATABASE)
    .collection('confirmations')
    .find({})
    .toArray()

  // await mongo.close()
  res.json(confirmations)
}

export default {
  findAll
}
