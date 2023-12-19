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

/**
     * @api {POST} /api/rooms/:hotelid Create new room type
     * @apiName createNewRoom
     * @apiGroup Rooms
     * @apiPermission admin
     *
     * @apiDescription Create new room type for paticular hotel
     * 
     *
     * @apiBody {String} title name type of the room
     * @apiBody {String} desc desc of the room.
     * @apiBody {String} price price of the room/night
     * @apiBody {String} maxPeople maxpeople are allow in the room
     * @apiBody {Array} roomNumbers all number room have type
     * 
     * @apiBodyExample {json} Input
     *   {
     *        "title":"King Room",
     *        "desc": "King size bed, 1 bathroom, balcony",
     *        "price": 200,
     *        "maxPeople":2,
     *        "roomNumbers": [{"number":108}, {"number":109}]
     *   }
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/rooms/657b4b0671bf3bab26cb2433
     *
     * 
     * @apiSuccess {String} title name type of the room
     * @apiSuccess {String} price price of the room/night
     * @apiSuccess {String} maxPeople maxpeople are allow in the room
     * @apiSuccess {String} desc desc of the room.
     * @apiSuccess {Array} roomNumbers all number room have type
     * @apiSuccess {String} _id the ID of room type
     * @apiSuccess {String} createdAt create date
     * @apiSuccess {String} updatedAt update date
     * @apiSuccess {String} __v the schema version field name
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         {
     *          "title": "King Room",
     *          "price": 200,
     *          "maxPeople": 2,
     *          "desc": "King size bed, 1 bathroom, balcony",
     *          "roomNumbers": [
     *               {
     *                    "number": 108,
     *                    "unavailableDates": [],
     *                    "_id": "6580798429286d9588b587da"
     *               },
     *               {
     *                    "number": 109,
     *                    "unavailableDates": [],
     *                    "_id": "6580798429286d9588b587db"
     *               }
     *          ],
     *          "_id": "6580798429286d9588b587d9",
     *          "createdAt": "2023-12-18T16:55:32.620Z",
     *          "updatedAt": "2023-12-18T16:55:32.620Z",
     *          "__v": 0
     *          }
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

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
/**
     * @api {PUT} /api/rooms/availability/:id Update unavailable dates of particular room
     * @apiName UpdateuUnavailableDates
     * @apiGroup Rooms
     * @apiPermission authenticated user
     *
     * @apiDescription Update unavailable dates of particular room which is the date that room is hired
     *
     * @apiParam {String} id room id
     * 
     * @apiBody {String} dates hired dates
     * 
     * @apiBodyExample {json} Input
     *   {
     *       "dates" : "2023-12-13T17:00:00.000Z"  
     *   }
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api//rooms/availability/657a633c28e02863bf7883ee
     *
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         "messages" : "Room status has been updated."
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

router.put("/:id", verifyAdmin, updateRoom);

/**
     * @api {PUT} /api/rooms/:roomid Update room information
     * @apiName UpdateRoom
     * @apiGroup Rooms
     * @apiPermission admin
     *
     * @apiDescription Update particular room's information
     *
     * @apiBody {String} title name type of the room
     * @apiBody {String} desc desc of the room.
     * @apiBody {String} price price of the room/night
     * @apiBody {String} maxPeople maxpeople are allow in the room
     * @apiBody {Array} roomNumbers all number room have type
     * 
     * @apiBodyExample {json} Input
     *   {
     *        "title":"King Room",
     *        "desc": "King size bed, 1 bathroom, balcony",
     *        "price": 200,
     *        "maxPeople":2,
     *        "roomNumbers": [{"number":108}, {"number":109}]
     *   }
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/rooms/657b4b0671bf3bab26cb2433
     *
     * 
     * @apiSuccess {String} title name type of the room
     * @apiSuccess {String} price price of the room/night
     * @apiSuccess {String} maxPeople maxpeople are allow in the room
     * @apiSuccess {String} desc desc of the room.
     * @apiSuccess {Array} roomNumbers all number room have type
     * @apiSuccess {String} _id the ID of room type
     * @apiSuccess {String} createdAt create date
     * @apiSuccess {String} updatedAt update date
     * @apiSuccess {String} __v the schema version field name
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         {
     *          "title": "King Room",
     *          "price": 200,
     *          "maxPeople": 2,
     *          "desc": "King size bed, 1 bathroom, balcony",
     *          "roomNumbers": [
     *               {
     *                    "number": 108,
     *                    "unavailableDates": [],
     *                    "_id": "6580798429286d9588b587da"
     *               },
     *               {
     *                    "number": 109,
     *                    "unavailableDates": [],
     *                    "_id": "6580798429286d9588b587db"
     *               }
     *          ],
     *          "_id": "6580798429286d9588b587d9",
     *          "createdAt": "2023-12-18T16:55:32.620Z",
     *          "updatedAt": "2023-12-18T16:55:32.620Z",
     *          "__v": 0
     *          }
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


//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
/**
     * @api {DELETE} /api/rooms/:roomid/:hotelid Delete room type
     * @apiName DeleteRoom
     * @apiGroup Rooms
     * @apiPermission admin
     *
     * @apiDescription Delete particular room
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/rooms/657b4b1c71bf3bab26cb2436/657b4b0671bf3bab26cb2433
     *
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         "messages" : "Room has been deleted."
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
router.get("/:id", getRoom);

/**
     * @api {Get} /api/rooms/:roomid Get one room information
     * @apiName GetOneRoom
     * @apiGroup Rooms
     * @apiPermission admin
     *
     * @apiDescription Get particular room's information
     *
     * @apiparam {String} id id of room
     * 
     * @apiExample Example usage:
     * curl -i http://localhost:4000/api/rooms/6579f0154d7b86603691b27e
     *
     * 
     * @apiSuccess {String} _id the ID of room type
     * @apiSuccess {String} title name type of the room
     * @apiSuccess {String} price price of the room/night
     * @apiSuccess {String} maxPeople maxpeople are allow in the room
     * @apiSuccess {String} desc desc of the room.
     * @apiSuccess {Array} roomNumbers all number room have type
     * @apiSuccess {String} createdAt create date
     * @apiSuccess {String} updatedAt update date
     * @apiSuccess {String} __v the schema version field name
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "_id": "6579f0154d7b86603691b27e",
     *      "title": "King Room",
     *      "price": 100,
     *      "maxPeople": 2,
     *      "desc": "King size bed, 1 bathroom, balcony",
     *      "roomNumbers": [
     *           {
     *                "number": 101,
     *                "unavailableDates": [],
     *                "_id": "6579f0154d7b86603691b27f"
     *           },
     *           {
     *                "number": 102,
     *                "unavailableDates": [],
     *                "_id": "6579f0154d7b86603691b280"
     *           }
     *      ],
     *      "createdAt": "2023-12-13T17:55:33.172Z",
     *      "updatedAt": "2023-12-13T17:55:33.172Z",
     *      "__v": 0
     *   }
     *
     */

//GET ALL
router.get("/", getRooms);
/**
     * @api {Get} /api/rooms Get all room information
     * @apiName GetAllRoom
     * @apiGroup Rooms
     * @apiPermission admin
     *
     * @apiDescription Get all room's information
     *
     * 
     * @apiExample Example usage:
     * curl -i http://localhost:4000/api/rooms
     *
     * 
     * @apiSuccess {String} _id the ID of room type
     * @apiSuccess {String} title name type of the room
     * @apiSuccess {String} price price of the room/night
     * @apiSuccess {String} maxPeople maxpeople are allow in the room
     * @apiSuccess {String} desc desc of the room.
     * @apiSuccess {Array} roomNumbers all number room have type
     * @apiSuccess {String} createdAt create date
     * @apiSuccess {String} updatedAt update date
     * @apiSuccess {String} __v the schema version field name
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "_id": "6579f0154d7b86603691b27e",
     *      "title": "King Room",
     *      "price": 100,
     *      "maxPeople": 2,
     *      "desc": "King size bed, 1 bathroom, balcony",
     *      "roomNumbers": [
     *           {
     *                "number": 101,
     *                "unavailableDates": [],
     *                "_id": "6579f0154d7b86603691b27f"
     *           },
     *           {
     *                "number": 102,
     *                "unavailableDates": [],
     *                "_id": "6579f0154d7b86603691b280"
     *           }
     *      ],
     *      "createdAt": "2023-12-13T17:55:33.172Z",
     *      "updatedAt": "2023-12-13T17:55:33.172Z",
     *      "__v": 0
     *   }
     *
     */

export default router;
