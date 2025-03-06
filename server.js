"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rootpath"); // Or remove if not needed
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var error_handler_1 = require("./_middleware/error-handler");
var db_1 = require("./_helpers/db");
var users_controller_1 = require("./users/users.controller");
var app = (0, express_1.default)();
db_1.AppDataSource.initialize()
    .then(function () {
    console.log('Data Source has been initialized!');
    // ... rest of your server setup
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    // api routes
    app.use('/users', users_controller_1.usersController);
    // global error handler
    app.use(function (err, req, res, next) {
        (0, error_handler_1.errorHandler)(err, req, res, next);
    });
    // start server
    var port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
    app.listen(port, function () { return console.log('Server listening on port ' + port); });
})
    .catch(function (err) {
    console.error('Error during Data Source initialization:', err);
});
