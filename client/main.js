/*------HTML Element Initialization-------*/
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const toDoBtn = document.getElementById("toDoButton")
const taskList = document.getElementById("task-list")
const exerciseBtn = document.getElementById("exerciseButton")
const addFriendBtn = document.getElementById("friend-phone-button")
const callFriendBtn = document.getElementById("call-a-friend")
const updateNumBtn = document.getElementById("new-friend-phone-button")
const friendList = document.getElementById("friend-list")

let toDoListSize = 0
const friendListArray = []

/*------Functions for Server Communication Use-------*/
// Sends a get request to the server to return a random compliment
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
// Sends a get request to the server to return a random fortune
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
// Sends a post request to the server to add a new task
const addToDo = () => {
    const taskInput = document.getElementById("task-input")
    const task = taskInput.value;
    axios.post("http://localhost:4000/api/to-do/", task)
        .then(res => {
            const data = res.data;
            taskInput.value = '';
            toDoListSize++
            addToDoElement()
        })
        .catch(error => {
            console.error('Error adding to-do:', error);
            alert('Error adding to-do. Please try again.');
    });
};
// Deletes a task from the servers to-do API
const checkOffToDo = () => {
    //const task = document.get
    //ta
    axios.delete(`http://localhost:4000/api/to-do/${taskId}`)
        .then(res => {
            const data = res.data; 
            alert('Task Complete!');
            toDoListSize-- 
            checkOffToDo()
    });
};
// Sends a get request to the server to get a random exercise from the exercise array according to the exercise type input
const getExercise = () => {
    const exerciseInputElement = document.getElementById("exercise-type-input");
    const exerciseInput = exerciseInputElement.value;

    axios.get(`http://localhost:4000/exercise/`, exerciseInput)
      .then(response => {
        const exercise = response.data
        alert(exercise)
      })
      .catch(error => {
        console.error('Error fetching exercise:', error);
      });
};
// Adds a friend to the servers friends API
const addFriend = () => {
    const friend = { friendName, friendNumber }
    axios.post("http://localhost:4000/api/friends/", friend)
        .then(res => {
            const data = res.data;
            addFriend(data)  
    });
};
// Sends a get request to the servers friends API to return a random friend
const callFriend = () => {
    axios.get("http://localhost:4000/api/friends/call/")
        .then(res => {
            const data = res.data;  
            alert(`Give ${data} a call!`)
    });
};
// Sends a put request to the servers friends API for a new number
const updatePhoneNumber = () => {
    const newNum = document.getElementById("new-friends-phone").value
    axios.put("http://localhost:4000/api/friends/update-phone", newNum)
        .then(res => {
            const data = res.data;
            updateFriendNumber(data)  
    });
};

/*------HTML Functions-------*/
// Adds to do HTML Element
function addToDoElement(task) {
    taskList.innerHTML = ''
    document.createElement('div')
    userCard.classList.add('user-card')
    userCard.innerHTML = 
    `<p class="task">Task: ${data}</p>`
    userContainer.appendChild(userCard)
}
// Removes to do HTML Element
function checkOffToDo() {
    const toDoItem = document.getElementById(toDoListSize)
    toDoItem.remove()
}
// Adds a friend userCard to the HTML
function addFriend() {
    friendList.innerHTML = ''
    document.createElement('div')
    userCard.classList.add('user-card')
    userCard.innerHTML = 
    `<p class="${data.friend.name}">Friend: ${data.friend.name}</p>
    <p class="${data.friend.number}">Number: ${data.friend.number}</p>`
    userContainer.appendChild(userCard)
}
// Updates the text content of the friends phone number
function updatePhoneNumber(newNum) {
    const friendNumber = document.getElementById(data.friend.number)
    friendNumber.textContent = newNum
}

/*------Event Listeners and Server Communication-------*/
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
toDoBtn.addEventListener('click', addToDo)
exerciseBtn.addEventListener('click', getExercise)
addFriendBtn.addEventListener('click', addFriend)
callFriendBtn.addEventListener('click', callFriend)
updateNumBtn.addEventListener('click', updatePhoneNumber)
