const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoleRoutes = require('./routes/userRoleRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api/user-roles/', userRoleRoutes);
app.get('/', (req, res) => res.send('Welcome to the User Provisioning System'));
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
