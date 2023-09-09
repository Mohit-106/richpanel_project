const express = require('express');
const router = express.Router();
const Conversation = require('../models/conversation');

router.get('/', async (req, res) => {
    try {
        const conversations = await Conversation.find();
        res.render('conversations/index', { conversations });
    } catch (err) {
        console.error(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const conversation = await Conversation.findById(req.params.id);
        res.render('conversations/show', { conversation });
    } catch (err) {
        console.error(err);
    }
});

router.post('/:id/reply', async (req, res) => {
    const { text } = req.body;
    try {
        const conversation = await Conversation.findById(req.params.id);
        const newMessage = {
            senderId: 'agentId',
            text,
            timestamp: new Date(),
        };
        conversation.messages.push(newMessage);
        await conversation.save();
        res.redirect(`/conversations/${conversation._id}`);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
