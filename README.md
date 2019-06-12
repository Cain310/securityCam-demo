# securityCam-demo

This is the alpha release of my final project at lighthouse labs web-dev bootcamp. Hook up any ip cam to your laptop or any SBC/Rasberry-Pi. Transcode the ip-cam footage via ffmpeg into streamable 5 second clips. Once each file is saved to folder, chokidar executes a .bat file which contains an AWS CLI sync command which uploads your single 5 second clip to your aws S3 bucket. A node server will fetch the most recent file appearing in your S3 bucket feed it through a mediasource extension which buffers video, then display it on a react app browser via the html video tag. Accessing saved video from S3 is almost complete coming soon!!!

##### 1. Git Clone

##### 2. Download and initialize amazon CLI

##### 3. create an aws S3 bucket account and set up the permissions and the CORS accordingly. Below is a test example that I do not recommend as it gives anyone access. 

### Bucket-Policy
```
{
    "Version": "2012-10-17",
    "Id": "YOUR-ID-HERE",
    "Statement": [
        {
            "Sid": "Stmt1558729184515",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::"YOUR-BUCKET-NAME"
        }
    ]
}
```

### CORS-Configuration
```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```
