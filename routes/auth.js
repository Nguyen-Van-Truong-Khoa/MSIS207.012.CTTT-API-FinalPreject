import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
/**
     * @api {POST} /api/auth/register Create One
     * @apiName createOne
     * @apiGroup Authentication
     * @apiPermission Every type of user
     *
     * @apiDescription Create one account
     *
     * @apiBody {String} username the unique name of user for login
     * @apiBody {String} email the email of user.
     * @apiBody {String} password password of user
     * @apiBody {String} phone phone of user
     * @apiBody {String} country country of user
     * @apiBody {String} city city of user
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/auth/register
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "message" "User has been created."
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */

router.post("/login", login)

/**
     * @api {POST} /api/auth/login  Login
     * @apiName Login
     * @apiGroup Authentication
     * @apiPermission Every type of user
     *
     * @apiDescription Login account
     *
     * @apiBody {String} username the unique name of user for login
     * @apiBody {String} password password of user
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/auth/login
     *
     *
     * @apiSuccess {String} _id the ID of account
     * @apiSuccess {String} username username of account
     * @apiSuccess {String} email email of account
     * @apiSuccess {String} country country of account
     * @apiSuccess {String} city city of account
     * @apiSuccess {String} phone phone of account
     * @apiSuccess {String} password encrypted password of account
     * @apiSuccess {String} isAdmin isAdmin check
     * @apiSuccess {String} createdAt created date of account
     * @apiSuccess {String} updatedAt updated date of account
     * @apiSuccess {String} __v don't know
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "_id": "657b2050d0acd2a0f4872335",
     *           "username": "customer",
     *           "email": "customer@gm.uit.edu.vn",
     *           "country": "vietnam",
     *           "city": "hcm",
     *           "phone": "012128900",
     *           "password": "$2a$10$DM3xKzOc0eiY2huOUe37EucOwTYeoQ56oxoQZVNzIcfzeOx7flCbC",
     *           "isAdmin": false,
     *           "createdAt": "2023-12-14T15:33:36.139Z",
     *           "updatedAt": "2023-12-14T15:33:36.139Z",
     *           "__v": 0
     *       }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "User not found"
     *     }
     */

export default router