import { Router } from 'express';

import UrlConverterController from './controllers/UrlConverterController';

// Create a new router instance
const router = Router();

// Assign the UrlConverterController controller to the 'controller' variable
const controller = UrlConverterController;

// Define a POST route for shortening URLs
router.post('/', controller.shorten)

// Define a GET route for redirecting to a URL based on its ID
router.get('/:id', controller.redirect)

// Export the router instance
export default router;