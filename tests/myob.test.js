"use strict"

const request = require('supertest');
const server = require('../app');
const pjson = require('../package.json');
const git = require('git-rev-sync');

const hash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()


describe("test all the routes in app.js", function(){
    afterEach(function () {
        server.close();
    });
    it("test root endpoint", function(done){
        request(server).get("/")
        .expect(200)
        .expect("Hello World", done)
    })
    it("test health endpoint", function(done){
        request(server).get("/health")
        .expect(200, {status: 200}, done)
        // .expect(/200/, done)
    })
    it("test metadata endpoint", function(done){
        request(server).get("/metadata")
        .expect('Content-Type', /json/)
        .expect(200, {"version": pjson.version, "description": pjson.description, "lastcommitsha": hash}, done)
    })
})