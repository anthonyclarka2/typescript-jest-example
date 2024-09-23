import express from 'express';

const PORT = process.env.PORT ?? "8080";
const app = express();

app.get("/", (req, res) => {
  res.send("Test response");
  console.log("Request for /");
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
