const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.generateSummary = async (todos) => {
  const pendingItems = todos.map(todo => `- ${todo.title}`).join('\n');
  const prompt = `Summarize the following todo list:\n${pendingItems}`;

  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt,
      maxTokens: 100,
      temperature: 0.3,
    });

    return response.generations[0].text.trim();
  } catch (error) {
    console.error('Cohere error:', error);
    return 'Error generating summary.';
  }
};
