"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
var express_1 = __importDefault(require("express"));
var user_service_1 = require("./user.service");
var router = express_1.default.Router();
// routes
router.get('/', getAll);
router.get('/:id', getById);
// ... other routes
// route functions
function getAll(req, res, next) {
    user_service_1.userService.getAll()
        .then(function (users) { return res.json(users); })
        .catch(next);
}
function getById(req, res, next) {
    user_service_1.userService.getById(Number(req.params.id))
        .then(function (user) { return res.json(user); })
        .catch(next);
}
// ... other route functions and schema functions
exports.usersController = router;
