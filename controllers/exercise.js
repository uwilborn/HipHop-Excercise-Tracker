const router = require('express').Router();
const Exercise = require('../models/exercise');
;


router.get("/",function(req,res){
    Exercise.find()
.then(exercises => res.json(exercises))
.catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add",function(req,res){
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);
const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
})
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

