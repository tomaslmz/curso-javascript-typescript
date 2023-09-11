import app from './app';

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/\nThe server is listening ${process.env.PORT}`);
});
