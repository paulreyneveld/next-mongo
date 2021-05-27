import { connectToDatabase } from "../../../util/mongodb"
import { ObjectId } from 'mongodb'

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { id } = req.query;
    console.log(typeof id);
    console.log(id);

    const movie = await db
        .collection("movies")
        .find({ _id: ObjectId(id) })
        .toArray();
 
    res.json(movie);
}