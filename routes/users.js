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
     * @api {put} /api/:id Update One
     * @apiName UpdateOne
     * @apiGroup Users
     * @apiPermission secured admin
     *
     * @apiDescription Update one account
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
     *       "message": "invalid input"
     *     }
     */

//DELETE
router.delete("/:id", verifyUser, deleteUser);
/**
     * @api {delete} /api/:id Delete One
     * @apiName deleteOne
     * @apiGroup Users
     * @apiPermission secured admin
     *
     * @apiDescription Delete one account
     *
     * @apiParam {string} id ID of user, on params
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/users/657b2050d0acd2a0f4872335
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "message": "User deleted"
     *       }
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

//GET
router.get("/:id", verifyUser, getUser);
/**
     * @api {GET} /api/:id Get One
     * @apiName getOne
     * @apiGroup Users
     * @apiPermission secured admin
     *
     * @apiDescription Get one user
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
     *       "message": "invalid input"
     *     }
     */

//GET ALL
router.get("/", verifyAdmin, getUsers);
/**
     * @api {GET} /api/:id Get All
     * @apiName getAll
     * @apiGroup Users
     * @apiPermission secured admin
     *
     * @apiDescription Get all user
     *
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
     *       "message": "invalid input"
     *     }
     */

export default router;
