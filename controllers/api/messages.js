const Message = require("../../models/message");

//create message
async function createMessage(req, res) {
  try {
    const message = await Message.create(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
}

//get messages in chat
async function getMessages(req, res) {
  const { chatId } = req.params;
  try {
    const result = await Message.find ({ chatId })
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteMessage(req, res){
  const {messageId} = req.params
  await Message.findByIdAndDelete(messageId)
  res.status(200).json("Message Deleted")
  
}

module.exports = {
  createMessage,
  getMessages,
  delete: deleteMessage
};
