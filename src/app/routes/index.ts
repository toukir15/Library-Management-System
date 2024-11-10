import express from 'express';
import {  BookRoutes } from '../modules/book/book.routes';
import { MemberRoutes } from '../modules/member/member.routes';
import { BorrowRoutes } from '../modules/borrow/borrow.router';
import { ReturnRoutes } from '../modules/return/return.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/books',
        route: BookRoutes
    },
    {
        path: '/members',
        route: MemberRoutes
    },
    {
        path: '/borrow',
        route: BorrowRoutes
    },
    {
        path: '/return',
        route: ReturnRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;