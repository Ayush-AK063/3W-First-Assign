const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const claimRoutes = require('./routes/claimRoutes');

const app = express();
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
app.use(express.json());

mongoose.connect('mongodb+srv://ayushmartandas:Khushi04@cluster0.r0qomse.mongodb.net/UserData?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'));

app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
