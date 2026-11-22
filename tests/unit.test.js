
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('Student Management Application Unit Tests', () => {

    // Test 1: Check index.html exists
    test('index.html should exist', () => {
        expect(
            fs.existsSync(path.join(projectDir, 'index.html'))
        ).toBe(true);
    });

    // Test 2: Check login.html exists
    test('login.html should exist', () => {
        expect(
            fs.existsSync(path.join(projectDir, 'login.html'))
        ).toBe(true);
    });

    // Test 3: Check registration.html exists
    test('registration.html should exist', () => {
        expect(
            fs.existsSync(path.join(projectDir, 'registration.html'))
        ).toBe(true);
    });

    // Test 4: Check homepage has HTML structure
    test('index.html should contain HTML elements', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(content).toContain('<html');
        expect(content).toContain('<body>');
    });

    // Test 5: Check login page has HTML structure
    test('login.html should contain HTML elements', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'login.html'), 'utf8'
        );

        expect(content).toContain('<html');
        expect(content).toContain('<body>');
    });

    // Test 6: Check registration page has HTML structure
    test('registration.html should contain HTML elements', () => {
        const content = fs.readFileSync(
            path.join(projectDir, 'registration.html'), 'utf8'
        );

        expect(content).toContain('<html');
        expect(content).toContain('<body>');
    });

});
