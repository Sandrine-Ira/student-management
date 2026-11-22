
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const projectDir = path.join(__dirname, '..');
const port = 8765;

let server;

// Start the HTTP server before running the tests
beforeAll(async () => {
    const serverScript = path.join(
        projectDir,
        'node_modules',
        'http-server',
        'bin',
        'http-server'
    );

    server = spawn(
        process.execPath,
        [serverScript, projectDir, '-p', String(port), '-a', '127.0.0.1'],
        { stdio: 'ignore' }
    );

    // Wait until the HTTP server is ready
    for (let attempt = 0; attempt < 30; attempt++) {
        try {
            await checkPage('/');
            return;
        } catch (error) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    throw new Error('HTTP server did not start.');
}, 20000);

// Check the HTTP status of a page
function checkPage(page) {
    return new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${port}${page}`, response => {
            response.resume();

            if (response.statusCode === 200) {
                resolve(response.statusCode);
            } else {
                reject(new Error(`HTTP status: ${response.statusCode}`));
            }
        }).on('error', reject);
    });
}

describe('Student Management Application Integration Tests', () => {

    test('index.html should return HTTP 200', async () => {
        await expect(checkPage('/index.html')).resolves.toBe(200);
    });

    test('login.html should return HTTP 200', async () => {
        await expect(checkPage('/login.html')).resolves.toBe(200);
    });

    test('registration.html should return HTTP 200', async () => {
        await expect(checkPage('/registration.html')).resolves.toBe(200);
    });

});

// Stop the HTTP server after testing
afterAll(() => {
    if (server && !server.killed) {
        server.kill();
    }
});