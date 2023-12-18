import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);
/**
     * @api {GET} /api/rooms/ Get All Rooms
     * @apiName getAll
     * @apiGroup Rooms
     * @apiPermission every one
     *
     * @apiDescription Get all 
     *
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/rooms/
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
router.get("/", getRooms);
/**
     * @api {GET} /api/rooms/ Get All Rooms
     * @apiName getAll
     * @apiGroup Rooms
     * @apiPermission every one
     *
     * @apiDescription Get all 
     *
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/rooms/
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

export default router;
