const express = require('express');
const cors = require('cors');

require('dotenv').config()
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const usersRouter = require('./routes/userRoutes');
const staffRouter = require('./routes/staffRoutes');
const carwashRouter = require('./routes/carwashRoutes'); 
const washHistory = require('./routes/washHistoryRoutes');



const app = express();
app.use(cors());

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

// app.use('/', carwashRouter);

// app.use('/api', routes);
app.use('/api/users', usersRouter);
app.use('/api/users/:id', usersRouter);

app.use('/api/staffs', staffRouter);
app.use('/staffs/:id', staffRouter);





app.use('/api/washHistory', washHistory );
app.use('/api/carwashes', carwashRouter);
app.use('/api/carwashes/:id', carwashRouter);


app.use('/api/carwashes/:id/users', carwashRouter)
app.use('/api/carwashes/:id/users/login', carwashRouter);
app.use('/api/carwashes/:id/washHistory', washHistory);


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


