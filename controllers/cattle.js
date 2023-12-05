import Cattle from "../models/Cattle.js";

export const getAllCattle = async (req, res) => {
  try {
    const allCattle = await Cattle.find({});
    res.status(200).json(allCattle);
  } catch (err) {
    return res.status(400).json({
      errorMessage: err,
    });
  }
};

export const getOneCattle = async (req, res) => {
  try {
    const {id} = req.params;
    const oneCattle = await Cattle.find(id);
    res.status(200).json(oneCattle);
  } catch (err) {
    return res.status(400).json({
      errorMessage: err,
    });
  }
};

export const createCattle = async (req, res) => {
  try {
    const { name, images, gender, age, breed, color, weight, category } =
      req.body;

    const lowerCaseGender = gender.toLowerCase();

    if (!name || !gender || !breed || !color || !weight || !category)
      return res.status(400).json({
        errorMessage: "Please fill all the required fields",
      });

    if (!images)
      return res.status(400).json({
        errorMessage: "Please select at least one image of cattle",
      });

    if (name.Length > 25)
      return res.status(400).json({
        errorMessage: "Name length too much",
      });
      
    if (0 > weight > 10000)
      return res.status(400).json({
        errorMessage: "incorrect weight",
      });

    const newCattle = await Cattle({
      name: name,
      images: images,
      gender: gender,
      breed: breed,
      color: color,
      weight: weight,
      age: age,
    });

    const savedCattle = await newCattle.save();

    res.status(200).json(savedCattle);
  } catch (err) {
    return res.status(500).json({
      errorMessage: err,
    });
  }
};

