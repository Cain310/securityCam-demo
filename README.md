# securityCam-demo

##### create an aws S3 bucket account and set up the permissions and the cors accordingly. Here a test example that I do not recomend as it gives anyone access. 

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
