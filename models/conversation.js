const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    senderId: String,
    text: String,
    timestamp: Date,
});
const conversationSchema = new mongoose.Schema({
    customerFbId: String,
    agentId: String,
    messages: [messageSchema],
});
const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
