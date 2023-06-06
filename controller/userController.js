const User = require('../modal/userModal')

// creating a user
exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    const newUser = await User.create(req.body)

    res.status(200).json({
      status: 'success',
      data: {
        newUser,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

// creating a user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

// creating a user
exports.getOneUser = async (req, res) => {
  try {
    const id = req.params.id
    const user = User.findById(id)

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

// creating a user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const user = User.findByIdAndDelete(id)

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
