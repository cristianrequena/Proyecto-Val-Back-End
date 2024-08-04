const router = require('express').Router();

router.use('/users', require('./api/users'));
router.use('/familyMembers', require('./api/familyMembers'));
router.use('/events', require('./api/events'));
router.use('/expenses', require('./api/expenses'));
router.use('/tasks', require('./api/tasks'));
router.use('/routines', require('./api/routines'));
router.use('/importantContacts', require('./api/importantContacts'));
router.use('/goals', require('./api/goals'));
router.use('/notes', require('./api/notes'));
router.use('/media', require('./api/media'));

module.exports = router;
