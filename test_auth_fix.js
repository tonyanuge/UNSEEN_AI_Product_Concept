// Test script to verify authentication bypass is working
const http = require('http');

const testUsers = [
  { id: '44408289', name: 'BrightSilk29 (Admin)' },
  { id: '44450108', name: 'PeacefulSatin80' },
  { id: '44651055', name: 'WandererLeaf42' }
];

async function testAuth(userId) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: '/api/auth/user',
      method: 'GET',
      headers: {
        'Cookie': `connect.sid=fake-session-${userId}`,
        'User-Agent': 'Test-Script'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          data: data.substring(0, 100) // First 100 chars
        });
      });
    });

    req.on('error', (err) => {
      resolve({ status: 'ERROR', data: err.message });
    });

    req.end();
  });
}

async function runTests() {
  console.log('Testing authentication bypass...');
  for (const user of testUsers) {
    const result = await testAuth(user.id);
    console.log(`${user.name}: Status ${result.status} - ${result.data.substring(0, 50)}...`);
  }
}

runTests();