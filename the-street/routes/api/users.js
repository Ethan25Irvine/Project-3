const router = require("express").Router();
const userController = require("../../controllers/userController");


// router.route('/').get

// Matches with "/api/user"
router
    .route("/")
    .get(userController.findAll)
    .post(userController.create);
    
router
    .route("/login")
    .post(userController.login)

    // router
    //     .route("/logout")
    //     .post(userController.logout)
// // Matches with "/api/user/login"
router
    .route("/:email")
    .get(userController.findByUser)
    .put(userController.update)
    .delete(userController.remove);


module.exports = router;