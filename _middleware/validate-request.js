"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = validateRequest;
function validateRequest(req, next, schema) {
    var options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    var _a = schema.validate(req.body, options), error = _a.error, value = _a.value;
    if (error) {
        next("Validation error: ".concat(error.details.map(function (x) { return x.message; }).join(', ')));
    }
    else {
        req.body = value;
        next();
    }
}
