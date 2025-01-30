// Import the built-in 'fs' module to work with the file system
const fs = require('fs');

// Use fs.readFile() to read the file asynchronously
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        // If there is an error, print it to the console
        console.error('Error reading the file:', err);
        return;
    }
    // If successful, print the file contents to the terminal
    console.log('File Content:\n', data);
});
