const https = require("https");

exports.handler = function (event) {
  const data = JSON.stringify(event);

  const options = {
    hostname: "1f8c7674b1747dd080de82ec47516e29.m.pipedream.net",
    port: 443,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
};
