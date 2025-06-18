const { chatWithAI } = require('../utils/openai');

// Handle chatbot conversation
exports.chat = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }
    const response = await chatWithAI(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({ message: 'Failed to get response from chatbot.' });
  }
};
