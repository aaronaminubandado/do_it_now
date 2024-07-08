const { text } = require('express')
const mongoose = require('mongoose')

const doitSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('doIt', doitSchema)