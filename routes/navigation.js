import express from 'express';
import * as path from 'path';
import pagesDetails from '../data/pagesDetails.js';
import places from '../data/places.js';
import { convertFirstLetterCapital } from '../public/scripts/script.js';

const __dirname = path.resolve();

const navigation = (routelink) => {
  const router = express.Router();
  const pageTitle = convertFirstLetterCapital(routelink);

  router.get('/', (req, res) => {
    const pageData = pagesDetails.find((page) => page.pageName === routelink);

    const filteredPlaces = places.filter(
      (place) => place.placeType === routelink,
    );

    res.render(path.join(__dirname, `/views/pages/pages`), {
      pageTitle,
      ...pageData,
      filteredPlaces,
    });
  });

  return router;
};

export default navigation;
