const {Router} = require("express");
const { getdoIt, savedoIt, updatedoIt, deletedoIt } = require("../controllers/do_it_now_controller");

const router = Router()

router.get('/', getdoIt)
router.post('/save', savedoIt)
router.post('/update', updatedoIt)
router.post('/delete', deletedoIt)
module.exports = router;