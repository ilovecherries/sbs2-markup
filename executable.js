const fs = require('fs')
const { stdout } = require('process')

var stdin = fs.readFileSync(process.stdin.fd).toString()

const element = Parse.parseLang(stdin, '12y')

stdout.write(element.innerHTML)
