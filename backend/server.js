const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { parse } = require('date-fns'); // Import the date-fns library

const prisma = new PrismaClient();
const app = express();
const PORT = 3009;

app.use(express.json());

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const { name, date, contact, endOfDate, status, amount } = req.body;

    // Parse the incoming date string to Date object using date-fns
    const parsedDate = parse(date, 'dd-MM-yyyy', new Date());

    const user = await prisma.user.create({
      data: { name, date: parsedDate, contact, endOfDate, status, amount },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// ... Rest of the routes remain unchanged
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });