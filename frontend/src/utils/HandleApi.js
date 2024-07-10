import axios from 'axios'

const baseUrl = "http://localhost:3002"

const getAllDoItTasks = (setTask) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setTask(data)
    })
}

export {getAllDoItTasks}