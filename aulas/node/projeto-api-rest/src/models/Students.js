import Sequelize, { Model } from 'sequelize';
import Photos from './Photos';

export default class Students extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The name must have a minimum of 3 letters and a maximum of 255',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          args: true,
          msg: "The email must be unique",
        },
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      birth_date: {
        type: Sequelize.DATE,
        defaultValue: '',
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate() {
    this.hasMany(Photos, { foreignKey: 'student_id' });
  }
}
