const express = require("express");
const router = express.Router();

const { getAllPlaces, addPlace, getPlaceById,updatePlace,deletePlace, getStates, getPlacesByState } = require("../controllers/placeController");

router.get("/states", getStates);
router.get("/state/:state", getPlacesByState);
router.get("/", getAllPlaces);
router.post("/", addPlace);
router.get("/:id",getPlaceById);
router.put("/:id",updatePlace);
router.delete("/:id",deletePlace);

module.exports = router;