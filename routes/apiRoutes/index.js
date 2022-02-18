const router = require('express').Router();
const notesRoutes = require('./noteRoute');

router.use(notesRoutes);

module.exports = router;