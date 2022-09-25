"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageRoute_1 = __importDefault(require("./route/api/imageRoute"));
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 9000;
app.use(express_1.default.static('src'));
app.use('/images', express_1.default.static('images'));
app.use(imageRoute_1.default);
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
