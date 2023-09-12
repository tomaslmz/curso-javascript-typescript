import Student from '../models/Students';

class Home {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Tomás',
      email: 'tomas@gmail.com',
      birth_date: '2005/05/24',
    });
    res.json(newStudent);
  }
}

export default new Home();
