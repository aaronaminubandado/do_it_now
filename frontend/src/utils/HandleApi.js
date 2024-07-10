import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllDoItTasks = (setTask) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setTask(data)
    })
}

const addTask = (text, setText, setTask) => {

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllDoItTasks(setTask)
    })
    .catch((err) => console.log(err))
}

const updateTask = (taskId, text, setTask, setText, setIsUpdating) => {

    axios
    .post(`${baseUrl}/update`, {_id:taskId, text})
    .then((data) => {
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllDoItTasks(setTask)
    })
    .catch((err) => console.log(err))
}

const deleteTask = (_id, setTask) => {

    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data);
        getAllDoItTasks(setTask)
    })
    .catch((err) => console.log(err))
}

export {getAllDoItTasks, addTask, updateTask, deleteTask}