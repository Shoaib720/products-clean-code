export default function makeProductDB ({ makeDB }) {
  return Object.freeze({
    findById
  })
  async function findById({id: _id}) {
    const db = await makeDB();
    const result = await db.collection('products').find({_id});
    console.log(result);
    const found = await result.toArray();
    if(found.length === 0){
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info }
  }
}