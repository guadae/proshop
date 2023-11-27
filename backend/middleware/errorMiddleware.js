// if no other are no other middleware that can handle the request
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// overwrite the default express error handler
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message; 

  //check for Mongoose bad id / CastError
  if(err.name === 'CastError' && err.kind === 'Object Id') {
    message = `Resource not found`;
    statusCode = 404; 
  }
  res.status(statusCode).json({
    message, 
    stack: process.env.NODE_ENV === 'production' ? 'stack of pancakes here yo' : err.stack,
  });
}

export { notFound, errorHandler }; 