const fs = require('fs');
const {
  TOKEN_DIR,
  TOKEN_PATH,
  setToken
} = require('../config/constants');

module.exports = {

  asyncForEach: async (array, callback) => {
    for(let i = 0; i < array.length; i++){
      await callback(array[i], i, array);
    }
  },

  readCredentialsFromFile: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) {
          reject(err);
        } else {
          setToken(JSON.parse(token));
          resolve(JSON.parse(token));
        }
      });
    });
  },
  
  writeCredentialsToFile: async (token) => {
    setToken(token);
    try {
      await fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
      if (err.code != 'EEXIST') {
        throw err;
      }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token, null, 4), (err) => {
      if (err) throw err;
      console.log(`Token stored to filePath: ' + ${TOKEN_PATH}`.green);
    });
  },

}