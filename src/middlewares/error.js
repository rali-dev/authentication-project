
const winston = require('winston');

module.exports = (err, req, res, next) => {
  console.log('Error middleware triggered:', err.message); // For debugging
  res.status(500).json({ message: "(server error) something failed" });
};

/** 
const winston = require('winston');

// Configure winston logger
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logfile.log' }),
    new winston.transports.Console()
  ]
});

module.exports = (err, req, res, next) => {
  // Log the error properly
  logger.error('Error occurred:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
  
  console.log('Error middleware triggered:', err.message); // For debugging
  
  res.status(500).json({ message: "(server error) something failed" });
};

**/