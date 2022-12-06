const express = require("express");
const router = express.Router();
const messagesCtrl = require("../../controllers/api/messages");

router.post("/", messagesCtrl.createMessage);
router.get("/:chatId", messagesCtrl.getMessages);
router.delete("/:messageId", messagesCtrl.delete)

module.exports = router; 
