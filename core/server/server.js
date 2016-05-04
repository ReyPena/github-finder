var express = require("express")
  , cors = require("cors")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , mongoUri = "mongodb://localhost:27017/pokedex"
  , app = express()
  , port = 8080;

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once("open", function () {
  console.log("connected" + mongoUri);
});

app.listen(port, function () {
  console.log("listen " + port);
});
