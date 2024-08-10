const express = require('express');
const Menu = require('../models/Menu');
const { getAllMenuItems, postMenuItem, deleteMenuItem, singleMenuItem, updateMenuItem } = require('../controllers/menuControllers');

const router = express.Router();

// Get all menu items
router.get('/', getAllMenuItems);

// Post a menu item
router.post('/', postMenuItem);

// Delete a menu item
router.delete('/:id', deleteMenuItem);

// Get single menu item
router.get('/:id', singleMenuItem);

// Update single menu item
router.patch('/:id', updateMenuItem);

module.exports = router;
