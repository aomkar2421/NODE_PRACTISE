const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Use file.originalname to get the original filename
    }
});

const upload = multer({ storage:multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Use file.originalname to get the original filename
    }
}) }).single("user_file");

app.post("/upload", upload, async (req, resp) => {
    resp.send("data");
});

app.listen(5000);
