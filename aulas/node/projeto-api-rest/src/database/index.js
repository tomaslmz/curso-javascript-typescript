import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../models/Students';
import User from '../models/Users';

const models = [Student, User];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
