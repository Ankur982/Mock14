const router = require("express").Router();
const Question = require("../models/Questions")
// const question = require("../quetions.json")




router.get("/qustions", async (req, res) => {
    const { category, difficulty} = req.query;
    const queryObject = {};

    if (category) {
        queryObject.category = category;
    }

    if (difficulty) {
        queryObject.difficulty = difficulty;
      }

    let apiData = Question.find(queryObject);

    let limit = Number(req.query.limit) || 5;
    apiData = apiData.limit(limit);

    const Questions = await apiData;
    res.status(200).json({ Questions});
});




// const insertQuestion = async () => {
//     try {
//         const docs = await Question.insertMany(question);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertQuestion()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))



module.exports = router;