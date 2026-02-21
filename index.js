import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import navigation from './routes/navigation.js';
import pagesDetails from './data/pagesDetails.js';
import places from './data/places.js';

const port = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/home'), {
    pageTitle: 'Home page',
  });
});

app.use('/heritage', navigation('heritage'));
app.use('/coastal', navigation('coastal'));

app.get('/:urlItem', (req, res) => {
  const pageData = pagesDetails.find(
    (page) => page.pageName === req.params.urlItem,
  );

  const filteredPlaces = places.filter(
    (place) => place.placeType === req.params.urlItem,
  );
  console.log(filteredPlaces);
  res.render(path.join(__dirname, `/views/pages/pages`), {
    pageTitle: 'Home page',
    ...pageData,
    filteredPlaces,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
