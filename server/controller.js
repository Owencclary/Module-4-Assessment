/*------Arrays for Data Storage------*/
const friends = []
const toDo = []
const exercises = {
    yoga: ['Downward Dog', 'Mountain Pose', 'Butterfly Pose'],
    strength: ['20 Barbell Squats', 'Hit 225lbs on the Bench Press', 'Dead lift 225lbs 1000 Times', 'Hold a plank for 5 minutes'],
    aerobic: ['Run a 5k!', 'Go Mountain Biking', 'Walk 10k steps!']
  }

/*------Server Functions-------*/
module.exports = {

    /*------Get Compliment-------*/
    getCompliment: (req, res) => {
        // Compliments array
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment with the array and math.random
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    /*------Get Fortune-------*/
    getFortune: (req, res) => {
        // Fortunes array
        const fortunes = ["Disbelief destroys the magic.", "Change is happening in your life, so go with the flow!", "Technology is the art of arranging the world so we do not notice it."];
      
        // choose a random fortune with the array and math.random
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        console.log(randomFortune);
        res.status(200).send(randomFortune);
    },

    /*------Add To Do-------*/
    addToDo: (req, res) => {
        const toDoItem = req.body;

        try {
            toDo.push(toDoItem);
            res.status(201).send('To Do Added!');
        } catch (err) {
            res.status(400).send("Error in adding to do");
        }
    },

    /*------Remove To Do-------*/
    checkOffToDo: (req, res) => {
        toDoItem = req.body
        if (toDo.includes(toDoItem)) {
            toDo.splice(toDo.indexOf(toDoItem), 1);
            res.status(200).send('Task Complete!')
        } else {
            res.status(400).send("Error in checking off to do")
        }
    },

    /*------Exercise Generator-------*/
    getExercise: (req, res) => {
        const exerciseType = req.body.exerciseType

        if (!exerciseTypes.includes(exerciseType)) {
            console.error('Invalid exercise type:', exerciseType);
            return res.status(400).send('Invalid exercise type');
        }
        
        const randomIndex = Math.floor(Math.random() * exercises[exerciseType].length);
        const exercise = exercises[exerciseType][randomIndex];
        
        res.status(200).send(exercise);
    },

    /*------Add Friend-------*/
    addFriend: (req, res) => {
        const { name, number } = req.body;
        console.log(toDo);

        try {
            const newFriend = { name, number };
            friends.push(newFriend);
            res.status(201).send(newFriend);
        } catch (err) {
            console.log(err)
            res.status(400).send("Error in adding friend");
        }
    },

    /*------Call Friend-------*/
    callFriend: (req, res) => {

        try {
            // Sends a random friend to call to the client
            let randomFriend = friends[Math.floor(Math.random() * friends.length)];
            res.status(200).send(randomFriend);
        } catch (err) {
            console.log(err)
            res.status(400).send("Error in calling friend");
        }
    },

    /*------Update Phone Number-------*/
    updatePhoneNumber: (req, res) => {
        const { name, newNumber } = req.body;
        console.log(friend, newNumber)
        
        try {
            const friendToUpdate = friends.find(friend => friend.name === name);
            friendToUpdate.number = newNumber;
            res.status(200).send(newNumber);
        } catch (err) {
            console.log(err)
            res.status(400).send("Error in updating phone number");
        }
    }
}
