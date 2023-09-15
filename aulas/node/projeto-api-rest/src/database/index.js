import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../models/Students';
import Users from '../models/Users';
import Photos from '../models/Photos';

const models = [Student, Users, Photos];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
