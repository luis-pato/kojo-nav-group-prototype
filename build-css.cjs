const { exec } = require('child_process');

// Modify the command to match your folder structure
exec('postcss src/css/*.css --dir public/assets/css', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`👍 CSS processed!`);
});
