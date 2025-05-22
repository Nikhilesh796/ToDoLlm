const axios = require('axios');

exports.sendToSlack = async (message) => {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `📝 Todo Summary:\n${message}`,
    });
    return true;
  } catch (err) {
    console.error('Slack error:', err.message);
    return false;
  }
};
