const AWS = require('aws-sdk');
const config = require('config');

const createBucket = (bucketName) => {
  const ID = config.get('AWS_ACCESS_ID');
  const SECRET = config.get('AWS_SEC_KEY');

  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });

  const params = {
    Bucket: bucketName,
    CreateBucketConfiguration: {
      LocationConstraint: 'us-east-2',
    },
  };

  s3.createBucket(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      return 'Error creating bucket';
    } else {
      console.log('Bucket created successfully', data.location);
      return 'Bucket created successfully';
    }
  });
};

module.exports = createBucket;
