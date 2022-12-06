# CHATTER BOX



# Steps to follow

1. Create the AWS S3 bucket as mentioned here
2. Create a .env file at the root of the repository and add the details in the following format

REACT_APP_BUCKET_NAME=your-bucket-name
REACT_APP_REGION=add the location of your bucket (eg: us-west-2)
REACT_APP_ACCESS=got-from-the-security-credentials
REACT_APP_SECRET=got-from-the-security-credentials
Run npm start to start the server on PORT 3000

# Installation
npm install
npm install --save react-upload-to-s3
npm install --save multer
npm i express-fileupload

# References
https://www.npmjs.com/package/react-upload-to-s3