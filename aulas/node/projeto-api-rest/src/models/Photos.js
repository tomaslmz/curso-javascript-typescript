import Sequelize, { Model } from 'sequelize';
import Students from './Students';

export default class Photos extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'This file name can not be null',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'This file name can not be null',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'photos',
      },
    );
    return this;
  }

  static associate() {
    this.belongsTo(Students, { foreignKey: 'student_id' });
  }
}
