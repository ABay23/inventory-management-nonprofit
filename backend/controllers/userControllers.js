const asyncHandler = require('express-async-handler')

// Login user
// @route   api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

// Register user New user
// @route   api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  res.send('Register Route')
})

module.exports = {
  registerUser,
  loginUser,
}
