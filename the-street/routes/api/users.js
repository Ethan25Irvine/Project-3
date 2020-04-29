const router = require("express").Router();
const userController = require("../../controllers/userController");



// Matches with "/api/user"
router
    .route("/")
    .get(userController.findAll)
    .post(userController.create);
    
router
    .route("/login")
    .post(userController.login)

router
    .route("/:email")
    .get(userController.findByUser)
    .put(userController.update)
    .delete(userController.remove);


module.exports = router;