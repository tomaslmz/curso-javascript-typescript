import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      birth_date: Sequelize.DATE,
    }, {
      sequelize,
    });

    return this;
  }
}
