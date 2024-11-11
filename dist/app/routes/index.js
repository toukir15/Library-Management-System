"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../modules/book/book.routes");
const member_routes_1 = require("../modules/member/member.routes");
const borrow_router_1 = require("../modules/borrow/borrow.router");
const return_route_1 = require("../modules/return/return.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: book_routes_1.BookRoutes
    },
    {
        path: '/members',
        route: member_routes_1.MemberRoutes
    },
    {
        path: '/borrow',
        route: borrow_router_1.BorrowRoutes
    },
    {
        path: '/return',
        route: return_route_1.ReturnRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
