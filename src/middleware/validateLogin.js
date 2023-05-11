const loginValidation = (req, res, next) => {
    const { email, password } = req.body;
  
    if (email === undefined || password === undefined) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    next();
  };
  
  module.exports = loginValidation; 