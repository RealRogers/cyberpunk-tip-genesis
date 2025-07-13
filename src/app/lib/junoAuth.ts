import crypto from 'crypto';

// Helper for canonical JSON: sorts keys alphabetically, no spaces
function canonicalStringify(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return JSON.stringify(obj);
  }

  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

  return '{' + sortedKeys.map(key => {
    return JSON.stringify(key) + ':' + canonicalStringify(sortedObj[key]);
  }).join(',') + '}';
}

export function createJunoSignedRequest({
  method,
  endpoint,
  payload = {},
  apiKey,
  apiSecret,
}) {
  const nonce = Date.now().toString(); // Milliseconds, unique and increasing
  const payloadString = (method.toUpperCase() === 'GET') ? '' : canonicalStringify(payload); // Sorted, no spaces JSON for body
  const fullPath = endpoint; // Include full path with query params (DO NOT split)
  const message = `${nonce}${method.toUpperCase()}${fullPath}${payloadString}`;

  const signature = crypto
    .createHmac('sha256', apiSecret)
    .update(message)
    .digest('hex');

  console.log('Nonce:', nonce);
  console.log('Method:', method.toUpperCase());
  console.log('Full Path (with query):', fullPath);
  console.log('Payload String (canonical):', payloadString);
  console.log('Signing message:', message);
  console.log('Generated signature:', signature);
  console.log('Final Authorization header:', `JUNO ${apiKey}:${nonce}:${signature}`); // Test with "Bitso" prefix if needed

 // In createJunoSignedRequest
return {
    headers: {
      Authorization: `Bitso ${apiKey}:${nonce}:${signature}`,  // Changed from JUNO to Bitso
      'Content-Type': 'application/json',
    },
    body: method === 'GET' ? undefined : payloadString,
  };
}