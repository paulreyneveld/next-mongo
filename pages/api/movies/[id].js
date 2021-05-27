import { connectToDatabase } from "../../../util/mongodb"

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { id } = req.query;
    const movie = null;
    console.log(id);

    const movie = await db
        .collection("movies")
        .findById(id)
 
    res.json(movie);
}