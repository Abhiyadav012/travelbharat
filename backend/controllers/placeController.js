const Place = require("../models/place");

const getAllPlaces = async (req, res) => {
  try {
    const { state, category, search } = req.query;

    let filter = {};

    if (state) {
      filter.state = new RegExp(state, "i");
    }

    if (category) {
      filter.category = new RegExp(category, "i");
    }

    if (search) {
      filter.$or = [
        { placeName: new RegExp(search, "i") },
        { state: new RegExp(search, "i") },
        { city: new RegExp(search, "i") },
        { category: new RegExp(search, "i") },
      ];
    }

    const places = await Place.find(filter);

    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const addPlace = async(req,res)=>{
    try{
        console.log(req.body);
        const place = await Place.create(req.body);
        res.status(201).json(place);
    }catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
};

const getPlaceById = async(req,res)=>{
  try{
    const place = await Place.findById(req.params.id);
    if(!place){
      return res.status(404).json({
        message:"place not found",
      });
    }
    res.status(200).json(place);
  }catch(err){
    res.status(500).json({
      message:err.message,
    });
  }
}

const updatePlace = async(req,res)=>{
  try{
    const place = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    if(!place){
      return res.status(404).json({
        message:"place not found",
      });
    }
    res.status(200).json(place);
  }catch(err){
    res.status(500).json({
      message:err.message,
    });
  }
}

const deletePlace = async(req,res)=>{
  try{
    const place = await Place.findByIdAndDelete(req.params.id);
    if(!place){
      return res.status(404).json({
        message:"place not found",
      });
    }
    res.status(200).json({
      message:"Place deleted sucessfully",
    })
  }catch(err){
    res.status(500).json({
      message:err.message,
    });
  }
}

const getStates = async (req, res) => {
  try {
    const places = await Place.find();

    const stateMap = {};

    places.forEach((place) => {
      if (!stateMap[place.state]) {
        stateMap[place.state] = {
          name: place.state,
          image: place.image,
          places: [],
          category: [],
        };
      }

      stateMap[place.state].places.push(place.placeName);

      if (!stateMap[place.state].category.includes(place.category)) {
        stateMap[place.state].category.push(place.category);
      }
    });

    res.status(200).json(Object.values(stateMap));
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getPlacesByState = async (req, res) => {
  try {
    const places = await Place.find({
      state: new RegExp(`^${req.params.state}$`, "i"),
    });

    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getAllPlaces, addPlace, getPlaceById, updatePlace,deletePlace, getStates, getPlacesByState };