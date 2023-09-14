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
      const students = await Students.findAll();
      return res.json(students);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Student();
