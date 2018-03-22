const winston = require('winston');
const winstonFirebase = require('winston-firebase').Firebase;
 
const logger = new winston.Logger({
  transports: [
    new winston.transports.Firebase({
      rootRef: 'https://<YOUR_FIREBASE_URL>.firebaseio.com/',
      secretKey: FIREBASE_SECRET_KEY,
      UID: FIREBASE_UID,
      admin: true,
      level: 'error',
    })
  ],
  exitOnError: false
});

export default logger;
