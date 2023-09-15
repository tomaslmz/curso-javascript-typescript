import multer from 'multer';
import { extname, resolve } from 'path';

export default {

  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('The file is not a image!'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      const random = () => Math.floor(Math.random() * 10000 + 10000);
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
