const controller = require("./app/controllers/s3.controller.js");
var getObject = controller.getObjectFromS3Bucket;
var getKey = controller.getLatestKeyFromS3Bucket;
var getSavedVideo = controller.getSavedVideo;
let router = require("./app/routers/s3.router.js");
const moment = require("moment");
var stream = require("stream");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
var cors = require("cors");
mostRecentVideoKey = "";
app.use(cors());

app.get("/", async (req, res) => {
  var key = await getKey("michaelcain-livestream");
  var newObject = await getObject("michaelcain-livestream", key.Key);
  console.log("NEW TESTERRRR", newObject);
  if (newObject.ETag === mostRecentVideoKey) {
    console.log("Keys MATCH: !!!!!!!!!!!!!!!!!!!", newObject.ETag);
  } else {
    console.log(
      "most Recent keyyyy!!!!!!!!!!!!!!! ",
      newObject.ETag,
      mostRecentVideoKey
    );
    mostRecentVideoKey = newObject.ETag;
    res.send(newObject.Body);
  }
});

app.post("/api/savedvideo", (req, res) => {
  let savedVideo = new Date(req.body.firstParam);
  savedVideo.setHours(savedVideo.getHours() - 4);
  let newDate = savedVideo.toISOString();
  let updatedDate = newDate.slice(0, 13);
  let newKey = `test-${updatedDate}`;
  // console.log("this is the newKey", newKey);

  getSavedVideo(newKey, "michaelcain-livestream").then(function(data) {
    let newSavedVideo = JSON.parse(data.raw);
    console.log("this is the new savedvideo", newSavedVideo);
    let updatedVideo = newSavedVideo["Contents"];
    console.log("this is the saved video", updatedVideo);
    res.json(updatedVideo);
  });
});

// res.send({ oldVideo: newObject.Body });
// Create a Server
const server = app.listen(8080, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`App listening at http://localhost:${port}`);
});
