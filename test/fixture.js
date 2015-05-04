var express = require("express");
var http = require("http");
var vm = require("../index.js");
var assert = require("assert")


describe("Express with Velocity", function(){
  it("combine with express", function(){
    var app = express();

    app.engine(".vm", vm({
      root: __dirname + "/view"
    }))
    app.set("views", __dirname + "/view")
    app.render("index.vm", function( err, content ){
      assert(content === '<body>hello</body>')
    })
  })
})