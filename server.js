// Minimal static file server for the personal site.
// Serves the project directory; Railway sets PORT.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname, { extensions: ["html"] }));

// Fall back to the home page for unknown paths.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`personalsite listening on ${PORT}`);
});
