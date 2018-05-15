const fs = require('fs');

module.exports = {
  get: jest.fn(
    url =>
      new Promise((resolve, reject) => {
        // Get repo from supplied url string
        const lastSlash = url.lastIndexOf('/');
        const org = url.substring(28, lastSlash);
        // Load user json data from a file in de subfolder for mock data
        fs.readFile(
          `${__dirname}/__mockData__/${org}.json`,
          'utf8',
          (err, data) => {
            if (err) reject(err);
            // Parse the data as JSON and put in the key entity (just like the request library does)
            resolve(JSON.parse(data));
          }
        );
      })
  )
};
