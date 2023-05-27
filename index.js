// THat's my modules
const http = require('http')
const express = require('express')

const app = express()
app.use(express.json()) // that will help us to get data from application

// Login Function to Handle Login Request
const Login = (req, res) => {
  // All Login Login in this function
  console.log(req.body)

  // Login Logic

  // sending response as a json object
  res.status(200).json({
    status: 'success',
    data: {
      user: 'Talha Tariq',
    },
  })
}

// Signup Function to handle signup request
const Signup = (req, res) => {
  console.log(req.body)
  if (req.body.pwd != req.body.pwdC) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: 'Passwords not match',
      },
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: 'Talha Tariq',
    },
  })
}

// Forget Password function to handle Forget Password Request
const forgetPassword = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: 'Talha Tariq',
    },
  })
}

// Reset password to hanle reset Password Request
const resetPassword = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: 'Talha Tariq',
    },
  })
}

// Get Profile Request
const getProfile = (req, res) => {
  const id = req.params.id

  console.log(id)
  res.status(200).json({
    status: 'success',
    data: {
      user: 'Talha Tariq',
    },
  })
}
// Login URL
app.post('/login', Login)
// Signup end-point
app.post('/signup', Signup)
// forget password end-point
app.get('/forget', forgetPassword)
// reset password end-point
app.post('/reset', resetPassword)
// get profile end-point
app.get('/profile/:id', getProfile)
app.listen(3000, () => {
  console.log('Server is initiated')
})

/*
Node JS Server Logic
const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/login') {
    res.write('<h1 style = "color:blue"> Login Done </h1>')
  } else if (url === '/profile') {
    res.write('<h1 style = "color:purple"> Talha Tariq - 22 Years </h1>')
  } else if (url === '/contact') {
    res.write('<h1 style = "color:green"> 03012121212</h1>')
  } else {
    res.write('<h1 style = "color:red">Page Not Found</h1>')
  }
})
*/
