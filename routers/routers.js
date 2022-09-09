const { Router } = require("express");
const router = Router();
const { controllers } = require("../controllers/controllers");

router.get("/students", controllers.for_get);
router.post("/students", controllers.for_post);
router.delete("/students/:id", controllers.for_delete);
router.patch("/students/:id", controllers.for_patch);

module.exports = router;
