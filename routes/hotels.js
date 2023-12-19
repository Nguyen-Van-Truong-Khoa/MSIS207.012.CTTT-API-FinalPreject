import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

/**
     * @api {POST} /api/hotels Create New hotel
     * @apiName createNewHotel
     * @apiGroup Hotel
     * @apiPermission admin
     *
     * @apiDescription Create new hotel
     *
     * @apiBody {String} name name of the hotel
     * @apiBody {String} type type of hotel.
     * @apiBody {String} city City where hotel located
     * @apiBody {String} address adress of hotel
     * @apiBody {String} distance distance from hotel to city center
     * @apiBody {String} photos link source of all image about hotel
     * @apiBody {String} title summary comment about hotel
     * @apiBody {String} desc decription about hotel
     * @apiBody {String} rating average rating from user
     * @apiBody {String} cheapestPrice minimum price in hotel
     * @apiBody {String} featured room available check
     * 
     * @apiBodyExample {json} input
     * 
     *    {
     *      "name" : "Hotel District 4" ,
     *      "type": "Hotel",
     *      "city": "hochiminh",
     *      "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *      "distance": "10",
     *      "photos": "",
     *       "title": "Best hotel in district 2",
     *       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
     *       "rating": "4.5",
     *       "cheapestPrice": "80",
     *       "featured": "false"
     *     }
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels
     *
     * 
     * @apiSuccess {String} name name of the hotel
     * @apiSuccess {String} type type of hotel.
     * @apiSuccess {String} city City where hotel located
     * @apiSuccess {String} address adress of hotel
     * @apiSuccess {String} distance distance from hotel to city center
     * @apiSuccess {String} photos link source of all image about hotel
     * @apiSuccess {String} title summary comment about hotel
     * @apiSuccess {String} desc decription about hotel
     * @apiSuccess {String} rating average rating from user
     * @apiSuccess {Array} rooms room id which is belong to hotel
     * @apiSuccess {String} cheapestPrice minimum price in hotel
     * @apiSuccess {String} featured room available check
     * @apiSuccess {String} _id the ID of new hotel
     * @apiSuccess {String} __v the schema version field name
     * 
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *    {
     *        "name": "Hotel District 4",
     *        "type": "Hotel",
     *        "city": "hochiminh",
     *        "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *        "distance": "10",
     *        "photos": [
     *            ""
     *        ],
     *        "title": "Best hotel in district 2",
     *        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
     *        "rating": 4.5,
     *        "rooms": [],
     *        "cheapestPrice": 80,
     *        "featured": false,
     *        "_id": "65811fece3859725bca29fb7",
     *        "__v": 0
     *    }
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
router.put("/:id", verifyAdmin, updateHotel);

/**
     * @api {PUT} /api/hotels/:id Update hotel
     * @apiName UpdateHotelInfor
     * @apiGroup Hotel
     * @apiPermission admin
     *
     * @apiDescription  Update particular hotel's information
     *
     * @apiParam {String} id the ID of hotel
     * 
     * @apiBody {String} name name of the hotel
     * @apiBody {String} type type of hotel.
     * @apiBody {String} city City where hotel located
     * @apiBody {String} address adress of hotel
     * @apiBody {String} distance distance from hotel to city center
     * @apiBody {String} photos link source of all image about hotel
     * @apiBody {String} title summary comment about hotel
     * @apiBody {String} desc decription about hotel
     * @apiBody {String} rating average rating from user
     * @apiBody {String} cheapestPrice minimum price in hotel
     * @apiBody {String} featured room available check
     * 
     * @apiBodyExample {json} input
     * 
     *    {
     *      "name" : "Hotel District 4" ,
     *      "type": "Hotel",
     *      "city": "hochiminh",
     *      "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *      "distance": "10",
     *      "photos": "",
     *       "title": "Best hotel in district 2",
     *       "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
     *       "rating": "4.5",
     *       "cheapestPrice": "120",
     *       "featured": "false"
     *     }
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels/65811fece3859725bca29fb7
     *
     * 
     * @apiSuccess {String} _id the ID of new hotel
     * @apiSuccess {String} name name of the hotel
     * @apiSuccess {String} type type of hotel.
     * @apiSuccess {String} city City where hotel located
     * @apiSuccess {String} address adress of hotel
     * @apiSuccess {String} distance distance from hotel to city center
     * @apiSuccess {String} photos link source of all image about hotel
     * @apiSuccess {String} title summary comment about hotel
     * @apiSuccess {String} desc decription about hotel
     * @apiSuccess {String} rating average rating from user
     * @apiSuccess {Array} rooms room id which is belong to hotel
     * @apiSuccess {String} cheapestPrice minimum price in hotel
     * @apiSuccess {String} featured room available check
     * @apiSuccess {String} __v the schema version field name
     * 
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *    {
     *        "_id": "65811fece3859725bca29fb7",
     *        "name": "Hotel District 4",
     *        "type": "Hotel",
     *        "city": "hochiminh",
     *        "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *        "distance": "10",
     *        "photos": [
     *            ""
     *        ],
     *        "title": "Best hotel in district 2",
     *        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
     *        "rating": 4.5,
     *        "rooms": [],
     *        "cheapestPrice": 120,
     *        "featured": false,
     *        "__v": 0
     *    }
     * @apiError unauthenticated
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 unauthenticated
     *     {
     *       "message": "You are not authenticated!"
     *     }
     */

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

/**
     * @api {delete} /api/hotels/:hotelid Delete hotel
     * @apiName deleteOneHotel
     * @apiGroup Hotel
     * @apiPermission admin
     *
     * @apiDescription Delete one partucular hotel
     *
     * @apiParam {string} id ID of hotel
     *
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/users/657a62ce28e02863bf7883e1
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "message": "Hotel has been deleted."
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


//GET
router.get("/find/:id", getHotel);
/**
     * @api {Get} /api/hotels/find/:hotelid Get one hotel
     * @apiName GetOneHotel
     * @apiGroup Hotel
     * @apiPermission Every type of user
     *
     * @apiDescription  Get particular hotel's information
     *
     * @apiParam {String} id the ID of hotel
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels/65811fece3859725bca29fb7
     *
     * 
     * @apiSuccess {String} _id the ID of hotel
     * @apiSuccess {String} name name of the hotel
     * @apiSuccess {String} type type of hotel.
     * @apiSuccess {String} city City where hotel located
     * @apiSuccess {String} address adress of hotel
     * @apiSuccess {String} distance distance from hotel to city center
     * @apiSuccess {String} photos link source of all image about hotel
     * @apiSuccess {String} title summary comment about hotel
     * @apiSuccess {String} desc decription about hotel
     * @apiSuccess {String} rating average rating from user
     * @apiSuccess {Array} rooms room id which is belong to hotel
     * @apiSuccess {String} cheapestPrice minimum price in hotel
     * @apiSuccess {String} featured room available check
     * @apiSuccess {String} __v the schema version field name
     * 
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *    {
     *        "_id": "65811fece3859725bca29fb7",
     *        "name": "Hotel District 4",
     *        "type": "Hotel",
     *        "city": "hochiminh",
     *        "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *        "distance": "10",
     *        "photos": [
     *            ""
     *        ],
     *        "title": "Best hotel in district 2",
     *        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
     *        "rating": 4.5,
     *        "rooms": [],
     *        "cheapestPrice": 120,
     *        "featured": false,
     *        "__v": 0
     *    }
     */


//GET ALL
router.get("/", getHotels);

/**
     * @api {Get} /api/hotels Get all hotel
     * @apiName GetAllHotel
     * @apiGroup Hotel
     * @apiPermission Every type of user
     *
     * @apiDescription  Get all hotel's information
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels
     *
     * 
     * @apiSuccess {String} _id the ID of hotel
     * @apiSuccess {String} name name of the hotel
     * @apiSuccess {String} type type of hotel.
     * @apiSuccess {String} city City where hotel located
     * @apiSuccess {String} address adress of hotel
     * @apiSuccess {String} distance distance from hotel to city center
     * @apiSuccess {String} photos link source of all image about hotel
     * @apiSuccess {String} title summary comment about hotel
     * @apiSuccess {String} desc decription about hotel
     * @apiSuccess {String} rating average rating from user
     * @apiSuccess {Array} rooms room id which is belong to hotel
     * @apiSuccess {String} cheapestPrice minimum price in hotel
     * @apiSuccess {String} featured room available check
     * @apiSuccess {String} __v the schema version field name
     * 
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     * [
     *    {
     *         "_id": "65811fc6e3859725bca29fb5",
     *         "name": "Hotel District 3",
     *         "type": "Hotel",
     *         "city": "hochiminh",
     *         "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *         "distance": "10",
     *         "photos": [
     *             ""
     *         ],
     *         "title": "Best hotel in district 2",
     *         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eu viverra mauris. In lacinia, purus eu faucibus fermentum, est leo semper dolor, vestibulum laoreet justo libero vel magna. Pellentesque efficitur congue semper. Pellentesque finibus maximus nisl. Proin ac lorem interdum, auctor nisi a, suscipit orci. Vivamus porta dui tortor, sed placerat leo congue vitae. Curabitur bibendum massa libero, non varius ligula varius in. Mauris convallis lectus ut tortor mollis congue. Vestibulum semper gravida nisl, id posuere enim feugiat ac. Sed est justo, feugiat quis massa et, scelerisque semper tellus.",
     *         "rating": 4.5,
     *         "rooms": [],
     *         "cheapestPrice": 80,
     *         "featured": false,
     *         "__v": 0
     *     },
     *     {
     *         "_id": "65811fece3859725bca29fb7",
     *         "name": "Hotel District 4",
     *         "type": "Hotel",
     *         "city": "hochiminh",
     *         "address": "125 võ xuân khoát, quận 2, TP.Hồ Chí Minh, Việt Nam",
     *         "distance": "10",
     *         "photos": [
     *             ""
     *         ],
     *         "title": "Best hotel in district 2",
     *         "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo ut augue eleifend consectetur sed non dui. Fusce sodales tincidunt leo. Nulla imperdiet faucibus mauris, nec egestas justo semper in. Phasellus turpis leo, lobortis at blandit vel, mollis ac sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
     *         "rating": 4.5,
     *         "rooms": [],
     *         "cheapestPrice": 80,
     *         "featured": false,
     *         "__v": 0
     *     }
     *  ]
     */

router.get("/countByCity", countByCity);

/**
     * @api {Get} /api/hotels/countByCity Count all hotel in city
     * @apiName CountHotelInCity
     * @apiGroup Hotel
     * @apiPermission Every type of user
     *
     * @apiDescription  Get all and count hotel that in city user want to find
     * 
     * @apiParam {String} city the city of hotels user want
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels/countByCity?cities=hanoi,danang,hochiminh
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *  [
     *    1,
     *    1,
     *    7
     *  ]
     */

router.get("/countByType", countByType);

/**
     * @api {Get} /api/hotels/countByType Count all type hotel
     * @apiName CountHotelInCity
     * @apiGroup Hotel
     * @apiPermission Every type of user
     *
     * @apiDescription  Get all and count type of hotel
     * 
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels/countByType
     *
     * @apiSuccess {String} type the type of hotel
     * @apiSuccess {integer} count number of the hotel type
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *  [
     *    {
     *        "type": "hotel",
     *        "count": 1
     *    },
     *    {
     *        "type": "apartments",
     *        "count": 0
     *    },
     *    {
     *        "type": "resorts",
     *        "count": 0
     *    },
     *    {
     *        "type": "villas",
     *        "count": 0
     *    },
     *    {
     *        "type": "cabins",
     *        "count": 0
     *    }
     *  ]
     */

router.get("/room/:id", getHotelRooms);
/**
     * @api {Get} /api/hotels/room/:hotelid Get all room type of hotel
     * @apiName getAllHotelRoomType
     * @apiGroup Hotel
     * @apiPermission Every type of user
     *
     * @apiDescription Get all room type infotmation of paticular hotel
     * 
     * @apiExample Example usage:
     * curl -i https://final-project-api-r57i.onrender.com/api/hotels/room/657b4b0671bf3bab26cb2433
     *
     *
     * @apiSuccess {String} _id id of the room
     * @apiSuccess {String} title name type of the room
     * @apiSuccess {String} desc desc of the room.
     * @apiSuccess {String} price price of the room/night
     * @apiSuccess {String} maxPeople maxpeople are allow in the room
     * @apiSuccess {Array} roomNumbers all number room have type
     * 
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     * [
     *     {
     *         "_id": "657b4b1c71bf3bab26cb2436",
     *         "title": "King Room",
     *         "price": 100,
     *         "maxPeople": 2,
     *         "desc": "King size bed, 1 bathroom, balcony",
     *         "roomNumbers": [
     *             {
     *                 "number": 101,
     *                 "unavailableDates": [],
     *                 "_id": "657b4b1c71bf3bab26cb2437"
     *             },
     *             {
     *                 "number": 102,
     *                 "unavailableDates": [],
     *                 "_id": "657b4b1c71bf3bab26cb2438"
     *             }
     *         ],
     *         "createdAt": "2023-12-14T18:36:12.294Z",
     *         "updatedAt": "2023-12-14T18:36:12.294Z",
     *         "__v": 0
     *     },
     *     {
     *         "_id": "6580798429286d9588b587d9",
     *         "title": "King Room",
     *         "price": 200,
     *         "maxPeople": 2,
     *         "desc": "King size bed, 1 bathroom, balcony",
     *         "roomNumbers": [
     *             {
     *                 "number": 108,
     *                 "unavailableDates": [],
     *                 "_id": "6580798429286d9588b587da"
     *             },
     *             {
     *                 "number": 109,
     *                 "unavailableDates": [],
     *                 "_id": "6580798429286d9588b587db"
     *             }
     *         ],
     *         "createdAt": "2023-12-18T16:55:32.620Z",
     *         "updatedAt": "2023-12-18T16:55:32.620Z",
     *         "__v": 0
     *     }
     * ]
     *
     */

export default router;
