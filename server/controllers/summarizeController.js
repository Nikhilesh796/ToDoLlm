const supabase = require('../db/supabase');
const { generateSummary } = require('../services/cohereService');
const { sendToSlack } = require('../services/slackService');

exports.summarizeAndSend = async (req, res) => {
  const { data: todos, error } = await supabase.from('todos').select('*');
  if (error) return res.status(500).json({ error: error.message });

  const summary = await generateSummary(todos);
  const success = await sendToSlack(summary);

  if (success) {
    res.json({ message: 'Summary sent to Slack successfully.' });
  } else {
    res.status(500).json({ error: 'Failed to send summary to Slack.' });
  }
};
