const express = require('express');
const cookieParser = require('cookie-parser');
const fetch = require('isomorphic-fetch');
var cors = require('cors')
const unsplash = require('unsplash-js');
//const fetch = require('node-fetch');
global.fetch = fetch;

const api = unsplash.createApi({
  accessKey: "E-1OodWt4fOr7B7FW7LgiZuNRP0E-Sk_o3WG3y1u3vI"
});

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.post('/api/search', (req, res) => {
  api.search
    .getPhotos({ query: req.body.searchText, orientation: "landscape" })
    .then(result => {
      res.send(result);
    })
    .catch(() => {
      console.log("something went wrong!");
    });

})
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
