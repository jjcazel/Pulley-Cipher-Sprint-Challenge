const axios = require("axios");

function fetchNextEndpoint(encodedString, isFirstCall = true) {
  const baseUrl = isFirstCall
    ? "https://ciphersprint.replit.app/task_"
    : "https://ciphersprint.replit.app/";

  axios
    .get(`${baseUrl}${encodedString}`)
    .then((response) => {
      const { encrypted_path, encryption_method } = response.data;
      // Decrypt the encrypted path based on the encryption method
      const decryptedPath = decryptPath(
        encrypted_path,
        encryption_method,
        isFirstCall
      );
      // Construct the next request with the decrypted path
      axios
        .get(`https://ciphersprint.replit.app/${decryptedPath}`)
        .then((nextResponse) => {
          // Call fetchNextEndpoint again with the decrypted path
          fetchNextEndpoint(
            decryptPath(
              nextResponse.data.encrypted_path,
              nextResponse.data.encryption_method,
              false // Subsequent calls are not the first call
            ),
            false // Pass false to indicate subsequent calls
          );
        })
        .catch((error) => {
          console.log("Error fetching next endpoint", error);
        });
    })
    .catch((error) => {
      console.log("Error fetching endpoint", error);
    });
}

// Call fetchNextEndpoint with the initial encodedString
const encodedString = "NjQ0ZWJhMDA3MzI0ZWFhNDZhMTFjNjJhYjgwNjVjOWY="; // Provide your initial encodedString here
const base64DecodedString = Buffer.from(encodedString, "base64").toString(
  "utf-8"
);
fetchNextEndpoint(base64DecodedString);

function decryptPath(encryptedPath, encryptionMethod) {
  // Remove non-hex characters from the portion after "task_"
  if (encryptionMethod === "inserted some non-hex characters") {
    const taskPrefix = "task_";
    const restOfString = encryptedPath.slice(taskPrefix.length);
    const decryptedRest = restOfString.replace(/[^0-9a-fA-F]/g, "");
    return taskPrefix + decryptedRest;
  } else if (encryptionMethod.startsWith("circularly rotated left")) {
    // Rotate the portion after "task_" to the left by the rotation amount
    const rotationAmount = parseInt(encryptionMethod.match(/\d+/)[0]);
    const taskPrefix = "task_";
    const restOfString = encryptedPath.slice(taskPrefix.length);
    const decryptedPath = circularRotateLeft(restOfString, rotationAmount);
    return taskPrefix + decryptedPath;
  }
}

// Function to circularly rotate a string to the left by a given amount
function circularRotateLeft(str, amount) {
  const n = (amount % str.length);
  return str.slice(n) + str.slice(0, n);
}


