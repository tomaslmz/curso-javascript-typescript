import jwt from 'jsonwebtoken';
import Users from '../models/Users';

require('dotenv').config();

class Token {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      const user = await Users.findOne({
        where: {
          email,
        },
      });

      if(!email || !password) {
        return res.status(401).json({
          errors: [`Insert a valid login!`],
        });
      }

      if(!user) {
        return res.status(400).json({
          errors: [`The user doesn't exist`],
        });
      }

      if(!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: [`The password is incorrect!`],
        });
      }

      const { id } = user;

      const token = jwt.sign({ id, email }, process.env.TOKEN, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Token();
