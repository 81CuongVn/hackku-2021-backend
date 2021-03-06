require('dotenv').config();
const { Database } = require('quickmongo');
const db = new Database(process.env.MONGODB || 'mongodb://localhost/hackku');

db.on('ready', () => console.log('Database is ready!'));

module.exports = {
    get: async function(key) {
        if (!key) throw new Error('Key is null!');
        return await db.get(key);
    },
    set: async function(key, value) {
        if (!key || !value) throw new Error('Key or value is null!');
        return await db.set(key, value);
    },
    getAll: async function(Key) {
        if (!key) throw new Error('Key is null!');
        return await db.all();
    },
};