const router = require("express").Router();

const { protect, authorize } = require("../middlewares/auth");
const { getAllUsers, deleteUser } = require("../controllers/admin.controller");

// Protect all routes
router.use(protect);
router.use(authorize("admin"));

// GET /api/v1/admin/users
router.get("/users", getAllUsers);

// DELETE /api/v1/admin/users/:id
router.delete("/users/:id", deleteUser);

module.exports = router;