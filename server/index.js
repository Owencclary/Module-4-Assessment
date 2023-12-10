/*------Server Setup-------*/
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

/*------Controller Functions Connection-------*/
const {
    getCompliment,
    getFortune,
    addFriend,
    getRandomFriend, 
    updateTaskPriority, 
    addTask, 
    completeTask,
    getExercise,
    getAllTasks,
    getAllFriends
} = require('./controller')

/*------Controller/Client Communication------*/
app.get('/', (req, res) => {
    res.sendFile('client/index.html', {root: __dirname});
})
app.get(`/api/compliment`, getCompliment)
app.get(`/api/fortune`, getFortune)
app.post(`/api/tasks`, addTask)
app.delete(`/api/tasks/:id`, completeTask)
app.get(`/api/friends`, getRandomFriend)
app.post(`/api/friends`, addFriend)
app.put(`/api/tasks/:id`, updateTaskPriority)
app.get(`/api/exercise`, getExercise)
app.get(`/api/tasks/start`, getAllTasks)
app.get(`/api/friends/start`, getAllFriends)

app.use(express.static(__dirname + '/client'));

/*------Start Server-------*/
app.listen(4000, () => console.log(`running on 4000`))