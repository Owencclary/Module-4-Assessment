/*------Server Setup-------*/
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

/*------Get Controller Functions-------*/
const { 
    getCompliment, 
    getFortune, 
    addToDo,
    getExercise, 
    addFriend,
    callFriend,
    updatePhoneNumber     
} = require('./controller')

/*------Send Data to client-------*/
app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.post("/api/to-do", addToDo)
app.delete("/api/to-do/:id")
app.get("/api/exercise", getExercise)
app.post("/api/friends", addFriend)
app.put("/api/friends/call", callFriend)
app.put("/api/friends/update-phone", updatePhoneNumber)


/*------Starts Server-------*/
app.listen(4000, () => console.log("Server running on 4000"));
