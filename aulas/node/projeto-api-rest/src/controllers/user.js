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
      console.log(users);
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if(!req.body.id) {
        throw new Error('Id is required!');
      }

      await Users.destroy({
        where: {
          id: req.body.id,
        },
      });

      return res.json(`The user with ID ${req.body.id} was deleted!`);
    } catch(e) {
      return res.json(e);
    }
  }

  async update(req, res) {
    try {
      if(!req.query.id) {
        return res.status(400).json({
          errors: ['The id is needed to update the user!'],
        });
      }

      const users = await Users.findByPk(req.query.id);

      if(!users) {
        return res.status(400).json({
          errors: ["The user doesn't exist"],
        });
      }

      await Users.update({ name: req.body.name, email: req.body.email }, {
        where: {
          id: req.query.id,
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
