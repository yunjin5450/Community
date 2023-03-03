import multer from 'multer';
import path from 'path';
import AWS from "aws-sdk";
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';
import { S3Client } from '@aws-sdk/client-s3'
import shortId from 'shortid';
dotenv.config();

const upload = multer({
    storage: multerS3({
        s3: new S3Client({
            credentials: {
                accessKeyId: process.env.S3ACCESSKEY as string,
                secretAccessKey: process.env.S3SECRETKEY as string,
            },
            region: 'ap-northeast-2',
        }),
        bucket: process.env.S3BUCKETNAME as string,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(req, file, cb) {
            const fileId = shortId.generate();
            const type = file.mimetype.split('/')[1];
            const fileName = `${fileId}.${type}`;
            cb(null, fileName);
        },
        // acl: 'public-read-write'
    })
})
// const s3Config = new S3Client({
//     region: 'ap-northeast-2',
//     credentials:{
//         accessKeyId: process.env.S3ACCESSKEY,
//         secretAccessKey: process.env.S3SECRETKEY,
//     }
// })

// const upload = multer({
//     storage: multerS3({
//         s3: s3Config,
//         bucket: process.env.S3BUCKETNAME,
//         metadata: function(req, file, cb) {
//             cb(null, {fieldName: file.fieldname})
//         },
//         key: function(req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
// })

export default upload