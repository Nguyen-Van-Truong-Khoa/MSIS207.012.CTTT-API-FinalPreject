import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
/**
     * @api {POST} /api/auth/register Create user
     * @apiName createNewUser
     * @apiGroup Register
     * @apiPermission Every type of user except login-user
     *
     * @apiDescription Create new user
     *
     * @apiBody {String} username the unique name of user for login
     * @apiBody {String} email the email of user.
     * @apiBody {String} password password of user
     * @apiBody {String} phone phone of user
     * @apiBody {String} country country of user
     * @apiBody {String} city city of user
     * 
     * @apiBodyExample  {json} Input
     * 
     * {
     *     "username": "customer3", 
     *     "email": "customer3@gm.uit.edu.vn",
     *     "password" : "123456789",
     *     "phone" : "012128900",
     *     "country" : "vietnam",
     *     "city" : "hcm"
     * }
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
     * @apiError Exist username, email
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "success": false,
     *       "message": "E11000 duplicate key error collection: test.users index: username_1 dup key: { username: \"customer3\" }"
     *     }
     */

router.post("/login", login)

/**
     * @api {POST} /api/auth/login  Login
     * @apiName Login
     * @apiGroup Authentication
     * @apiPermission Every type of user
     *
     * @apiDescription Login to particular user account
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
     * @apiSuccess {String} __v the schema version field name
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
     * @apiError Wrong password or username
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "success": false,
     *       "message": "Wrong password or username!"
     *     }
     */

export default router