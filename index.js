const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.send("The request was recieved and here is the response.");
});

app.get("/test", (request, response) => {
  return response.send("This is a response from the /test endpoint");
});

app.get("/test-with-json", (req, res) => {
  const testData = {
    name: "Niklas",
    isPro: true,
  };

  return res.json(testData);
});

// Denna kodrad brukar ligga längst ner i filen
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
