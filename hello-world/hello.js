/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  if (event.name === 'error') {
    throw new Error('Simulated error');
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${event.name || 'World'}!` }),
  };
  return response;
}
