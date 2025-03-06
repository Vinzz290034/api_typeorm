"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var user_model_1 = require("../users/user.model"); // Adjust the path if needed
var config_json_1 = __importDefault(require("../config.json")); // Assuming your config file is in the parent directory
var AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: config_json_1.default.database.host,
    port: config_json_1.default.database.port,
    username: config_json_1.default.database.user,
    password: config_json_1.default.database.password,
    database: config_json_1.default.database.database,
    entities: [user_model_1.User],
    synchronize: true, // Set to false in production
});
exports.AppDataSource = AppDataSource;
AppDataSource.initialize()
    .then(function () {
    console.log('Data Source has been initialized!');
})
    .catch(function (err) {
    console.error('Error during Data Source initialization:', err);
});
