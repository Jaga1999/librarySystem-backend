
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken } = require('../middlewares/authenticationMiddleware');

router.post('/create-user', authenticateToken, adminController.createUser);
router.post('/assign-roles-permissions', authenticateToken, adminController.assignRolesAndPermissions);
router.post('/add-update-book', authenticateToken, adminController.addOrUpdateBook);
router.post('/register-member-issue', authenticateToken, adminController.registerMemberIssue);
router.post('/track-borrowing-returns', authenticateToken, adminController.trackBorrowingAndReturns);
router.post('/manage-overdue-fines', authenticateToken, adminController.manageOverdueFines);
router.post('/generate-library-report', authenticateToken, adminController.generateLibraryReport);

module.exports = router;