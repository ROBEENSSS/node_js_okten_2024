const fs = require('node:fs/promises');
const path = require('node:path');

const pathToFile = path.resolve(__dirname, 'db', 'users.json');

module.exports = {
    read: async () => {
        try {
            const json = await fs.readFile(pathToFile, 'utf-8');
            return json ? JSON.parse(json) : [];
        } catch (error) {
            console.error('Error:',error.message);
        }
    },
    write: async () => {
        try {
            await fs.writeFile(pathToFile, JSON.stringify(users, null, 2));
        } catch (error) {
            console.error('Error:',error.message);
        }
    }
}