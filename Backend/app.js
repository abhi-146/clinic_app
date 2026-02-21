const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Update CORS to use environment variable
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

app.use(express.json());

// --- MongoDB Connection ---
// No quotes needed in the .env file; dotenv handles it
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected successfully...'))
  .catch(err => console.error('Database connection failed:', err.message));

// --- Schema Definition ---
const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  address: String,
  treatment: String,
  army: String,
  dateAndTime: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// --- Routes ---

// POST API
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Data inserted successfully.' });
  } catch (err) {
    console.error('POST Error:', err);
    res.status(500).json({ error: 'Failed to insert data.' });
  }
});

// GET API
app.get('/api/contact', async (req, res) => {
  try {
    const results = await Contact.find().sort({ dateAndTime: -1 });

    const formattedResults = results.map(doc => {
      // Convert the Mongoose document to a plain JavaScript object
      const obj = doc.toObject();

      return {
        ...obj,
        id: obj._id.toString(), // Add the 'id' field MUI Data Grid requires
        date: new Date(obj.dateAndTime).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      };
    });

    res.status(200).json(formattedResults);
  } catch (err) {
    console.error('GET Error:', err);
    res.status(500).json({ error: 'Failed to fetch data.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});