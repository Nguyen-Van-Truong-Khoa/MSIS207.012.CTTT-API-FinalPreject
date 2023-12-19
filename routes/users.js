import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);
/**
     * @api {put} /api/users/:id Update One user
     * @apiName UpdateOne
     * @apiGroup Users
     * @apiPermission authenticated user or admin
     * 
     * @apiDescription Update particular user's information
     * 
     * @apiParam  {String} _id the ID of account
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/users/657fc52437d77ff9aa7fad4e
     * 
     * @apiBody  {String} username username of account
     * @apiBody  {String} email email of account
     * @apiBody  {String} country country of account
     * @apiBody  {String} city city of account
     * @apiBody  {String} phone phone of account
     * @apiBody  {String} password encrypted password of account
     * 
     * @apiBodyExample {json} Input
     *    {
     *     "phone": "123435553"
     *    }
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
     *           "phone": "123435553",
     *           "password": "$2a$10$DM3xKzOc0eiY2huOUe37EucOwTYeoQ56oxoQZVNzIcfzeOx7flCbC",
     *           "isAdmin": false,
     *           "createdAt": "2023-12-14T15:33:36.139Z",
     *           "updatedAt": "2023-12-14T15:33:36.139Z",
     *           "__v": 0
     *       }
     *
     * @apiError unauthenticated
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 unauthenticated
     *     {
     *       "message": "You are not authenticated!"
     *     }
     * 
     */

//DELETE
router.delete("/:id", verifyUser, deleteUser);
/**
     * @api {delete} /api/users/:id Delete One
     * @apiName deleteOne
     * @apiGroup Users
     * @apiPermission authenticated user or admin
     *
     * @apiDescription Delete particular user
     *
     * @apiParam {string} id ID of user, on params
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/users/657fc52437d77ff9aa7fad4e
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "message": "User deleted"
     *     }
     *
     * @apiError unauthenticated
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 unauthenticated
     *     {
     *       "message": "You are not authenticated!"
     *     }
     */

//GET
router.get("/:id", verifyUser, getUser);
/**
     * @api {GET} /api/users/:id Get One user information
     * @apiName getOne
     * @apiGroup Users
     * @apiPermission authenticated user or admin
     *
     * @apiDescription Get particular user information
     *
     * @apiParam {string} id ID of user, on params
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/users/657b2050d0acd2a0f4872335
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
     * @apiError unauthenticated
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 unauthenticated
     *     {
     *       "message": "You are not authenticated!"
     *     }
     */

//GET ALL
router.get("/", verifyAdmin, getUsers);
/**
     * @api {GET} /api/users Get All user information
     * @apiName getAllUser
     * @apiGroup Users
     * @apiPermission admin
     *
     * @apiDescription Get all user information
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/users/
     *
     * @apiSuccess {String} _id the ID of account
     * @apiSuccess {String} username username of account
     * @apiSuccess {String} email email of account
     * @apiSuccess {String} country country of account
     * @apiSuccess {String} city city of account
     * @apiSuccess {String} phone phone of account
     * @apiSuccess {String} password encrypted password of account
     * @apiSuccess {Boolean} isAdmin isAdmin check
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
     * @apiError unauthenticated
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 unauthenticated
     *     {
     *       "message": "You are not authenticated!"
     *     }
     */

export default router;
