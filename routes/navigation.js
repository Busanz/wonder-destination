import express from 'express';
import * as path from 'path';
import pagesDetails from '../data/pagesDetails.js';
import places from '../data/places.js';

const __dirname = path.resolve();

const navigation = (routelink) => {
  const router = express.Router();
  const pageTitle =
    routelink.charAt(0).toUpperCase() +
    routelink.slice(1).toLowerCase() +
    ` page`;

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
