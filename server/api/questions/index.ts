import express from "express";
const router = express.Router();
const auth = require("../auth/auth.service");

const controller = require("./questions.controller");

router.get("/", auth.verifyToken(),  controller.getQuestions);
router.get("/:id", controller.getQuestionById);
router.post("/addQuestion", controller.addQuestion);
router.put("/:id", controller.updateQuestion);
router.delete("/:id", controller.deleteQuestion);

export = router;
