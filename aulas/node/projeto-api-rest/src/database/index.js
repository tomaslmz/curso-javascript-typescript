import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../models/Students';

const models = [Student];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
