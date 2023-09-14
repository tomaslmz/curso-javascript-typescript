import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class Users extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "The name must have a minimum of 3 letters and a maximum of 255",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: "The email must be unique",
        },
        validate: {
          isEmail: {
            msg: "Invalid email",
          },
        },
      },
      password_hash: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 255],
            msg: "The password must have a minimum of 6 letters and a maximum of 255",
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });

    return this;
  }
}
