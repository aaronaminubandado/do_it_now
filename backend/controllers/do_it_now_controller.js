const do_it_Model = require('../models/do_it_now_model')

module.exports.getdoIt = async (req, res) =>{
    const doIt = await do_it_Model.find()
    res.send(doIt)
}

module.exports.savedoIt = async (req, res) => {

    const { text } = req.body

        do_it_Model
        .create({text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
        })
    
}

module.exports.updatedoIt = async (req, res) => {
    const {_id, text} = req.body
    do_it_Model
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deletedoIt = async (req, res) => {
    const {_id, text} = req.body
    do_it_Model
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}