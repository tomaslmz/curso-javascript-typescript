import Photos from '../models/Photos';
import Students from '../models/Students';

class Student {
  async index(req, res) {
    res.json('OK');
  }

  async create(req, res) {
    try {
      const newStudent = await Students.create(req.body);
      const {
        id, name, email, birth_date,
      } = newStudent;

      return res.json({
        id, name, email, birth_date,
      });
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async read(req, res) {
    try {
      const students = await Students.findAll({
        order: [['id', 'DESC'], [Photos, 'id', 'ASC']],
        include: {
          model: Photos,
          attributes: ['url', 'filename'],
        },
      });
      return res.json(students);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ["The id is needed to update the user!"],
        });
      }
      const student = await Students.findByPk(req.params.id);

      if(!student) {
        return res.status(400).json({
          errors: ["The student hasn't been find"],
        });
      }

      await Students.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json(`The student with ID ${req.params.id} was deleted!`);
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
          errors: ["The id is needed to update the user!"],
        });
      }

      const student = Students.findByPk(req.params.id);

      if(!student) {
        return res.status(400).json({
          errors: ["The student hasn't been find"],
        });
      }

      await Students.update({
        name: req.body.name || student.name,
        email: req.body.email
        || student.email,
        birth_date: req.body.birth_date || student.birth_date,
      }, {
        where: {
          id: req.params.id,
        },
      });

      return res.json(`The student has been edited`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Student();
