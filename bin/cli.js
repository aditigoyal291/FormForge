#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: 'inherit' });
	} catch (e) {
		console.log(`Failed to run command ${command}`, e);
        return false;
	}
    return true;
};

// Create a new project directory
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/aditigoyal291/FormForge ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);

if(!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const installDeps = runCommand(installDepsCommand);

if(!installDeps) process.exit(-1);
console.log("Congratulations! You ar ready. Follow the following commands to start");
console.log(`cd ${repoName} && npm run dev`);

// if (!repoName) {
// 	console.error('Please provide a project name.');
// 	process.exit(1);
// }

// execSync(`git clone https://github.com/yourusername/your-repo.git ${repoName}`);
// process.chdir(repoName);

// // Install project dependencies
// execSync('npm install');

// console.log('Project setup complete.');
