const http = require("http");
const url = require("url");
// i have the free will to program in other langauges even if I say im a dotnet dev
// also i have the free will to write terrible code :)
const app = http.createServer((req, res) => {
    var boilerplate_begin = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><style>html {height: auto; overflow-x: hidden;} body {background-color: black; color: white; height: 100%;} footer {width: 100%; bottom: 0px; position: absolute;}</style></head><body>";
    if(url.parse(req.url).pathname == "/npxl32") {
        res.write(boilerplate_begin);
        res.write("<h1>Secret Page</h1>");
        res.write("<p>This page exists!</p>");
        res.write("<footer>");
        res.write("<hr />");
        res.write("<a href=\"privacy\">Privacy</a>");
        res.write("</footer>");
        res.write("</body></html>");
        res.end();
    } else if(url.parse(req.url).pathname == "/privacy") {
        res.write(boilerplate_begin);
        res.write("<h1>Privacy Policy</h1>");
        res.write("<h3>Do you collect any info?</h2>");
        res.write("<p>No.</p>");
        res.write("<h3>Do you use cookies?</h2>");
        res.write("<p>No.</p>");
        res.write("<footer>");
        res.write("<hr />");
        res.write("<a href=\"privacy\">Privacy</a>");
        res.write("</footer>");
        res.write("</body></html>");
        res.end();
    } else {
        res.write(boilerplate_begin);
        res.write("<h1>npxl32</h1>");
        res.write("<p>Website out now!</p>");
        res.write("<a href=\"https://www.npxl32.com/\">www.npxl32.com</a>");
        res.write("<p>Make sure the www is there.");
        res.write("<footer>");
        res.write("<hr />");
        res.write("<a href=\"privacy\">Privacy</a>");
        res.write("</footer>");
        res.write("</body></html>");
        res.end();
    }
});
app.listen(8080, () => console.log("I exist!!1"));
