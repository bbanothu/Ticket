const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  candidate = getCandidateKey(event)


  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createParitionKeyHash(candidate);
  }

  return candidate;
};


function createParitionKeyHash(data) {
  let hashKey;
  hashKey = crypto.createHash("sha3-512").update(data).digest("hex");
  return hashKey;
}

function getCandidateKey(data) {
  let key;
  if (data && data.partitionKey) {
    key = data.partitionKey;
  } else if (data) {
    const jsonData = JSON.stringify(data);
    key = createParitionKeyHash(jsonData);
  }
  return key;
}