const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const todoRoutes = require('./routes/todoRoutes');
const summarizeRoutes = require('./routes/summarizeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);
app.use('/summarize', summarizeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
