const userTypeModal = require('../modals/UserModal');

const register = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const userModal = new userTypeModal({
      username,
      password,
      email,
    });

    const registerResult = await userModal.save();
    if (registerResult) {
      res.status(201).send(registerResult);
    } else {
      res.status(502).send('Something went wrong');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userTypeModal.findOne({ email: email });
    if (user.password === password) {
      res.send({ role: user.role, email: user.email });
    } else {
      res.send('password not matching');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
};
