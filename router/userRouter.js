const express = require('express')
const userController = require('../controller/userController')

// i have to get router
const userRouter = express.Router()

// getting data
userRouter.route('/').get(userController.getAllUsers)

// posting data
userRouter.route('/').post(userController.createUser)

// getting one user

userRouter.route('/:id').get(userController.getOneUser)
// deleting data

userRouter.route('/:id').delete(userController.deleteUser)

module.exports = userRouter
