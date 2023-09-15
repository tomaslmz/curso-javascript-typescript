import multer from 'multer';
import multerConfig from '../config/multer';
import Photos from '../models/Photos';

const upload = multer(multerConfig).single('photo');

class Photo {
  store(req, res) {
    return upload(req, res, async (e) => {
      try {
        if(e) {
          return res.status(400).json({
            errors: [e.code],
          });
        }

        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const photo = await Photos.create({ originalname, filename, student_id });

        return res.json(photo);
      } catch(erro) {
        return res.json(erro);
      }
    });
  }
}

export default new Photo();
