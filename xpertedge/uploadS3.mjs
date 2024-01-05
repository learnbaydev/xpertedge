import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import "dotenv/config";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2", // Set your desired region
});

const s3 = new AWS.S3();
const bucketName = "learnbay-s3"; // Replace with your bucket name

async function uploadFileToS3(localPath, s3Key) {
  const fileContent = fs.readFileSync(localPath, { encoding: null });
  // Determine the Content-Type based on the file extension
  const contentType =
    mime.contentType(path.extname(localPath)) || "application/octet-stream";
  const params = {
    Bucket: bucketName,
    Key: s3Key,
    Body: fileContent,
    ContentType: contentType,
  };

  try {
    await s3.upload(params).promise();
    console.log(`Uploaded ${s3Key} successfully.`);
  } catch (error) {
    console.error(`Error uploading ${s3Key}: ${error}`);
  }
}

async function uploadFolderContentsToS3(
  localFolderPath,
  s3Path = "_next/static"
) {
  const items = fs.readdirSync(localFolderPath, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(localFolderPath, item.name);
    const currentS3Path = path.join(s3Path, item.name).replace(/\\/g, "/");

    if (item.isFile()) {
      await uploadFileToS3(itemPath, currentS3Path);
    } else if (item.isDirectory()) {
      await uploadFolderContentsToS3(itemPath, currentS3Path);
    }
  }
}

async function main() {
  const localFolderPath = path.join(process.cwd(), ".next/static");

  try {
    await uploadFolderContentsToS3(localFolderPath);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
