import Users from '../models/Users';

class User {
  async create(req, res) {
    try {
      const newUser = await Users.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async read(req, res) {
    try {
      const users = await Users.findAll({
        attributes: ['id', 'name', 'email', 'created_at', 'updated_at'],
      });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['The id is needed to update the user!'],
        });
      }

      const users = await Users.findByPk(req.params.id);

      if(!users) {
        return res.status(400).json({
          errors: ["The user doesn't exist"],
        });
      }

      await Users.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json(`The user with ID ${req.params.id} was deleted!`);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['The id is needed to update the user!'],
        });
      }

      const users = await Users.findByPk(req.params.id);

      if(!users) {
        return res.status(400).json({
          errors: ["The user doesn't exist"],
        });
      }

      await Users.update({
        name: req.body.name
        || users.name,
        email: req.body.email || users.email,
      }, {
        where: {
          id: req.params.id,
        },
      });
      return res.json('The user is updated!');
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new User();
