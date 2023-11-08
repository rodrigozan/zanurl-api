import { Router } from 'express';

import url_converter from './controllers/url_converter';

// Create a new router instance
const router = Router();

// Assign the url_converter controller to the 'controller' variable
const controller = url_converter;

// Define a POST route for shortening URLs
router.post('/', controller.shorten)

// Define a GET route for redirecting to a URL based on its ID
router.get('/:id', controller.redirect)

// Export the router instance
export default router;