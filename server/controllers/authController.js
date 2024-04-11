const loginUser = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      return res.status(200).json({ message: 'Login successful', username });
    } else {
      return res.status(401).json({ message: 'Login failed' });
    }
  };
  
  const logoutUser = (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
  };
  
  module.exports = {
    loginUser,
    logoutUser,
  };
  