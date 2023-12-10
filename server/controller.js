/*------Database Connection-------*/
const friends = require('./friends.json')
const tasks = require('./tasks.json')
const exercise = require('./exercises.json')

let globalTaskId = 3

/*------Server Functions-------*/
module.exports = {
    getAllFriends: (req, res) => res.status(200).send(friends),
    getAllTasks: (req, res) => res.status(200).send(tasks),
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Disbelief destroys the magic.", "Change is happening in your life, so go with the flow!", "Technology is the art of arranging the world so we do not notice it."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        console.log(randomFortune);
        res.status(200).send(randomFortune);
    },
    addFriend: (req, res) => {
        let { name } = req.body;
        let newFriend = {
            name
        }
        friends.push(newFriend);
        res.status(200).send(friends);
    },
    getRandomFriend: (req, res) => { 
        let randomIndex = Math.floor(Math.random() * friends.length);
        let randomFriend = friends[randomIndex].name;
        res.status(200).send(randomFriend)
    },
    updateTaskPriority: (req, res) => {
        let { id } = req.params
        let index = tasks.findIndex(elem => +elem.id === +id)
        tasks[index].priority++
        res.status(200).send(tasks)
    },
    addTask: (req, res) => {
        let { task } = req.body
        let taskId = globalTaskId
        let newTask = {
            id: taskId,
            task,
            priority: 0
        }
        globalTaskId++
        tasks.push(newTask)
        res.status(200).send(tasks)
    },
    completeTask: (req, res) => {
        let index = tasks.findIndex(elem => elem.id === +req.params.id)
        tasks.splice(index, 1)
        res.status(200).send(tasks)
    },
    getExercise: (req, res) => {

        let randomIndex = Math.floor(Math.random() * exercise.length);
        let randomExercise = exercise[randomIndex];

        res.status(200).send(randomExercise);
    }
}