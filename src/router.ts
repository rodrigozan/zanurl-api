import { Router } from 'express';

import UrlConverterController from './controllers/UrlConverterController';
import UserController from './controllers/UserController';

// Create a new router instance
const router = Router();

const user_Controller = UserController;

// Assign the UrlConverterController controller to the 'controller' variable
const url_controller = UrlConverterController;

router.post('/users', user_Controller.createUser); // Cria um novo usuário
router.get('/users', user_Controller.getAllUsers); // Lista todos os usuários
router.get('/users/:id', user_Controller.getUser); // Busca um usuário pelo ID
router.put('/users/:id', user_Controller.updateUser); // Atualiza um usuário pelo ID
router.delete('/users/:id', user_Controller.deleteUser); // Deleta um usuário pelo ID

router.post('/', url_controller.shorten) // Define a POST route for shortening URLs
router.get('/:id', url_controller.redirect) // Define a GET route for redirecting to a URL based on its ID

// Export the router instance
export default router;