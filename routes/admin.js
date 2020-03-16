import express from 'express';


import InventoryController from '../controllers/inventory';
import AuthDashboard from '../controllers/auth';

const router = express.Router();



router.route('/')
    .get(InventoryController.home)


export default router;