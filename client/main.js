
/*------HTML Element Initialization-------*/
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const toDoBtn = document.getElementById("add-task")
const exerciseBtn = document.getElementById("exercise-btn")
const addFriendBtn = document.getElementById("add-friend")
const callFriendBtn = document.getElementById("call-a-friend")

const friendsContainer = document.querySelector('#friends-container');
const tasksContainer = document.querySelector('#tasks-container');

/*------Global Variables/Functions-------*/
const baseURL = `http://localhost:4000/api`
const friendsCallback = ({ data: friends }) => displayFriends(friends);
const tasksCallback = ({ data: tasks }) => displayTasks(tasks);
const exerciseCallback = ({ data: exercise }) => displayExercise(exercise);
const errCallback = err => alert(err);

/*------Axios Server Communication-------*/
const getCompliment = () => axios.get(`${baseURL}/compliment`).then(res => { const data = res.data; alert(data)}).catch(errCallback)
const getFortune = () =>  axios.get(`${baseURL}/fortune`).then(res => { const data = res.data; alert(data)}).catch(errCallback)
const getRandomFriend = () => axios.get(`${baseURL}/friends`).then(res => { const data = res.data; alert(data)}).catch(errCallback)
const getExercise = () => axios.get(`${baseURL}/exercise`).then(res => { const data = res.data; alert(data)}).catch(errCallback)
const addFriend = body => axios.post(`${baseURL}/friends`, body).then(friendsCallback).catch(errCallback)
const getAllFriends = () => axios.get(`${baseURL}/friends/start`).then(friendsCallback).catch(errCallback);
const addTask = body => axios.post(`${baseURL}/tasks`, body).then(tasksCallback).catch(errCallback)
const completeTask = id => axios.delete(`${baseURL}/tasks/${id}`).then(tasksCallback).catch(errCallback)
const getAllTasks = () => axios.get(`${baseURL}/tasks/start`).then(tasksCallback).catch(errCallback);
const updateTaskPriority = id => axios.put(`${baseURL}/tasks/${id}`).then(tasksCallback).catch(errCallback)

/*------HTML Data Functions-------*/
function submitFriend(e) {
    e.preventDefault();
    let name = document.querySelector('#name-input');
    let bodyObj = {
        name: name.value,
    }
    addFriend(bodyObj);
    name.value = '';
}
function createFriendCard(friend) {
    const friendCard = document.createElement('div');
    friendCard.classList.add('friend-card');

    friendCard.innerHTML = `
    <p class="name">${friend.name}</p>`

    friendsContainer.appendChild(friendCard);
}
function displayFriends(arr) {
    friendsContainer.innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
        createFriendCard(arr[i]);
    }
}
function submitTask(e) {
    e.preventDefault();

    let task = document.querySelector('#task-input');

    let bodyObj = {
        task: task.value,
        taskPriority: '0'
    }

    addTask(bodyObj);

    task.value = '';
}
function createTaskCard(task) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    taskCard.innerHTML = `<p class="task-name">${task.task}</p> 
    <p class="task-priority">Priority: ${task.priority}</p> 
    <button onclick="completeTask(${task.id})">Mark Complete</button>
    <button onclick="updateTaskPriority(${task.id})">+</button>`

    tasksContainer.appendChild(taskCard);
}
function displayTasks(arr) {
    tasksContainer.innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
        createTaskCard(arr[i]);
    }
}

/*------Event Listeners-------*/
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
callFriendBtn.addEventListener('click', getRandomFriend)
toDoBtn.addEventListener('click', submitTask)
exerciseBtn.addEventListener('click', getExercise)
addFriendBtn.addEventListener('click', submitFriend)

/*------Data Display on Start------*/
getAllFriends()
getAllTasks()