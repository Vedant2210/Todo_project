const router = require("express").Router();
const { createTask, getTasks, deleteTask } = require("../controllers/task.controller");
const { protect,authorize } = require("../middlewares/auth");

router.use(protect);

router.post("/", createTask);
router.get("/", getTasks);
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteTask
);
module.exports = router;