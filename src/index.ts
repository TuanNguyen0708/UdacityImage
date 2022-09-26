import imageRoute from './route/api/imageRoute';
import express from 'express';

const app = express();
const port = 9000;

app.use(express.static('src'));
app.use('/images', express.static('images'));
app.use(imageRoute);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
