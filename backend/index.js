import express from 'express';
import dotenv from 'dotenv';
import epubRoutes from './routes/epubRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/epub', epubRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
