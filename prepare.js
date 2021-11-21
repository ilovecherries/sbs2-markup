const jsdom = require("jsdom")
const { JSDOM } = jsdom

const { window } = new JSDOM('<body></body>', {
    url: "http://localhost",
})
const { document } = window
