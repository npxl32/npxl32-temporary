const http = require("http");
const url = require("url");
const fs = require("fs");
// i have the free will to program in other langauges even if I say im a dotnet dev
// also i have the free will to write terrible code :)
// (edit: the code is less terrible but its still terrible i didnt want to make a polished solution)
// yeah yeah, ik it would be easier to load these from a file but then startup would be slower

function boilerplate_begin(res, pgname) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8", "cache-control": "no-cache"});
    res.write("<!DOCTYPE html>\n");
    res.write("<html lang=\"en\">\n");
    res.write("  <head>\n");
    res.write("    <meta charset=\"UTF-8\" />\n");
    res.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n");
    res.write("    <title>" + pgname + " | npxl32 temporary</title>\n");
    res.write("    <style>\n");
    res.write("      html {\n");
    res.write("        height: auto;\n");
    res.write("        overflow-x: hidden;\n");
    res.write("      }\n");
    res.write("      body {\n");
    res.write("        background-color: black;\n");
    res.write("        color: white;\n");
    res.write("        height: 100%;\n");
    res.write("      }\n");
    res.write("      footer {\n");
    res.write("        width: 100%;\n");
    res.write("        bottom: 0px;\n");
    res.write("        position: absolute;\n");
    res.write("      }\n");
    res.write("      a {\n");
    res.write("        color: #0000ff;\n");
    res.write("      }\n");
    res.write("      a:active {\n");
    res.write("        color: #0000bd;\n");
    res.write("      }\n");
    res.write("      button {\n");
    res.write("        background-color: green;\n");
    res.write("        color: white;\n");
    res.write("        outline: none;\n");
    res.write("        cursor: pointer;\n");
    res.write("        border: 2px outset gray;\n");
    res.write("        padding: 10px;\n");
    res.write("      }\n");
    res.write("      button:active {\n");
    res.write("        border: 2px inset gray;\n");
    res.write("      }\n");
    res.write("    </style>\n");
    res.write("  </head>\n");
    res.write("  <body>\n");
}
function boilerplate_end(res) {
    res.write("    <footer>\n");
    res.write("      <hr />\n");
    res.write("      <a href=\"privacy\">Privacy</a>\n");
    res.write("    </footer>\n");
    res.write("  </body>\n");
    res.write("</html>\n");
}
const app = http.createServer((req, res) => {
    var exclusions = ["Pandgum Messed Up", "Robots", "Sitemap", "TRT image"];
    var pgnames = {"/npxl32":"Secret Page", "/privacy":"Privacy Policy", "/pandgum":"Pandgum Shrine", "/pandagun_img":"Pandgum Messed Up", "/shrines":"The Shrines", "/robots.txt":"Robots", "/sitemap.xml":"Sitemap", "/theredterrarian":"The Red Terrarian Shrine", "/trt_img":"TRT image", "/seo":"Search Engine Optimized"};
    var pgname_default = "Home";
    var pgname = pgnames[url.parse(req.url).pathname] || pgname_default;
    if (!exclusions.includes(pgname)) {
            boilerplate_begin(res, pgname);
    }
    if(pgname == "Secret Page") {
        res.write("    <a href=\"/\">Home</a>");
        res.write("    <hr />");
        res.write("    <h1>Secret Page</h1>\n");
        res.write("    <p>This page exists!</p>\n");
    } else if(pgname == "Privacy Policy") {
        res.write("    <a href=\"/\">Home</a>");
        res.write("    <hr />");
        res.write("    <h1>Privacy Policy</h1>\n");
        res.write("    <h3>Do you collect any info?</h2>\n");
        res.write("    <p>No.</p>\n");
        res.write("    <h3>Do you use cookies?</h2>\n");
        res.write("    <p>No.</p>\n");
    } else if (pgname == "Pandgum Shrine") {
        res.write("    <a href=\"/\">Home</a>");
        res.write("    <hr />");
        res.write("    <h1>Pandgum shrine</h1>\n");
        res.write("    <p>This idiot</p>\n");
        res.write("    <img src=\"/pandagun_img\" />\n");
        res.write("    <p><a href=\"https://www.pandgum.xyz\" />www.pandgum.xyz</a> (it even has the same www. problem)</p>\n")
        res.write("    <p>ALL MY FELLAS</p>\n");
        res.write("    <p>Message from Pandgum himself: <i>HI WORLD! Im on the npxl32 website (editor note: youre on the temporary website lmfao) im famous slayyy. I hope my shrine looks beautiful and yeah. Subscribe and buy my merch please. http://www.pandgum.xyz (the www. needs to be there)</i>        </p>\n");
    } else if (pgname == "Pandgum Messed Up") {
      res.writeHead(200, {"content-type":"image/jpg; charset=utf8", "cache-control":"no-cache"});
      //res.write(fs.readFileSync("pandagun.jpg"));
      fs.createReadStream("pandagun.jpg")
        .pipe(res);
    } else if (pgname == "Robots") {
      res.writeHead(200, {"content-type":"text/plain; charset=utf8", "cache-control":"no-cache"});
      fs.createReadStream("robots.txt")
        .pipe(res);
    } else if (pgname == "Sitemap") {
      res.writeHead(200, {"content-type":"application/xml; charset=utf8", "cache-control":"no-cache"});
      fs.createReadStream("sitemap.xml")
        .pipe(res);
    }else if (pgname == "The Shrines") {
        res.write("    <a href=\"/\">Home</a>");
        res.write("    <hr />");
        res.write("    <h1>The shrines</h1>");
        res.write("    <p>A list of all the shrines.</p>");
	res.write("    <p>The shrines were made for my friends and their entire text content was written by them.</p>");
        res.write("    <ul>")
        res.write("      <li><a href=\"/pandgum\">Pandgum</a></li>");
        res.write("    </ul>");
        res.write("    <ul>");
        res.write("        <li><a href=\"/theredterrarian\">The Red Terrarian</a></li>");
        res.write("     </ul>");
    } else if (pgname == "The Red Terrarian Shrine") {
        res.write("    <a href=\"/\">Home</a>");
        res.write("    <hr />");
        res.write("    <h1>The Red Terrarian Shrine</h1>");
        res.write("    <p>idiot:</p>");
        res.write("    <img src=\"/trt_img\" />");
        res.write("    <p>Message from The Red Terrarian himself:<i><br />im going to stab you<br />alas</p></i>");
        res.write("    <a href=\"https://theredterrarian.github.io/\">theredterrarian.github.io</a>");
    } else if (pgname == "TRT image") {
        fs.createReadStream("trt.jpg")
            .pipe(res);
    } else if (pgname == "Search Engine Optimized") {
        res.write("    <a href=\"/\">Home</a>");
        res.write("    <hr />");
	res.write("    <h1>Search Engine Optimized</h1>");
        res.write("    <p>guys its a parked domain i swear</p>");
    } else {
        res.write("    <h1>npxl32</h1>\n");
        res.write("    <p>Website out now!</p>\n");
        res.write("    <a href=\"https://www.npxl32.com/\">www.npxl32.com</a>\n");
        res.write("    <p>Make sure the www is there.</p>\n");
        res.write("    <p>Fun fact: there is a hidden web page. There has always been one. Can you find it?</p>\n");
        res.write("    <a href=\"/shrines\">The Shrines</a>\n");
    }
    if (!exclusions.includes(pgname)) {
            boilerplate_end(res);
            res.end();
    };
});
app.listen(8080, () => console.log("I exist!!1"));
