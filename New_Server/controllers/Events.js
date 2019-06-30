'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Events = require('./EventsService');


module.exports.getEvent = function getEvent(req, res, next) {

    Events.getEvent()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getEventEventID = function getEventEventID(req, res, next) {

    var event_id = req.swagger.params['EventID']['value'];
    console.log("inside Events.js; event_id = ", event_id);

    Events.getEventEventID(event_id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getEventFindByBook = function getEventFindByBook(req, res, next) {

    var isbn = req.swagger.params['ISBN']['value'];
    console.log("inside Events.js; isbn = ", isbn);

    Events.getEventFindByBook(isbn)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getEventFindByMonth = function getEventFindByMonth(req, res, next) {
    Events.getEventFindByMonth(req.swagger.params, res, next);
};

module.exports.getEventFindByName = function getEventFindByName(req, res, next) {
    Events.getEventFindByName(req.swagger.params, res, next);
};
