const express = require('express');
const app = express();
const blogRoutes = require('./Routes/blogRoutes');
const AppError = require('./utils/appError');
const globalErrorHandling = require('./Controller/errorController');
app.use(express.json());

app.use('/api/v1/posts', blogRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandling);
module.exports = app;
