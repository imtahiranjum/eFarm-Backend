import Cattle from "../models/Cattle.js";
import OnSaleCattle from "../models/OnSaleCattle.js";

export const getAllOnSaleCattle = async (req, res) => {
  try {
    const onSaleCattle = await OnSaleCattle.find({}).populate("questions");

    console.log(onSaleCattle);

    res.status(200).json(onSaleCattle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getOneOnSaleCattle = async (req, res) => {
  try {
    const cattle_id = req.params.id;
    console.log(id);
    const onSaleCattle = await OnSaleCattle.findOne(cattle_id).populate(
      "questions"
    );

    console.log(onSaleCattle);

    res.status(200).json(onSaleCattle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllNotOnSaleCattle = async (req, res) => {
  try {
    const allCattle = await Cattle.find({});
    res.status(200).json(allCattle);
  } catch (err) {
    return res.status(400).json({
      errorMessage: err,
    });
  }
};

export const updateCattleOnSaleStatus = async (req, res) => {
  try {
    const cattle_id = req.params.cattle_id;
    const to_add = req.params.to_add;
    console.log(cattle_id, to_add);
    const cattleUpdate = await Cattle.findOneAndUpdate(
      { _id: cattle_id },
      { is_onsale: to_add }
    );
    res.status(200).json(cattleUpdate);
  } catch (err) {
    return res.status(400).json({
      errorMessage: err,
    });
  }
};

export const addCattleToSale = async (req, res) => {
  try {
    const { title, description, price, cattle_id } = req.body;

    if (!title || !description || !price || !cattle_id)
      return res.status(400).json({
        errorMessage: "Please fill all the required fields",
      });

    // if (!images)
    //   return res.status(400).json({
    //     errorMessage: "Please select at least one image of cattle",
    //   });

    // if (lowerCaseGender != "male" || lowerCaseGender !== "female")
    // return res.status(400).json({
    //     errorMessage: "gender is not set correct"
    // });

    if (0 > price > 10000000)
      return res.status(400).json({
        errorMessage: "incorrect price",
      });

    const newOnSaleCattle = await OnSaleCattle({
      title: title,
      description: description,
      price: price,
      cattle_info: cattle_id,
    });

    const savedOnSaleCattle = await newOnSaleCattle.save();

    res.status(200).json(savedOnSaleCattle);
  } catch (err) {
    return res.status(500).json({
      errorMessage: err,
    });
  }
};

export const removeCattleFromSale = async (req, res) => {
  try {
    const id = req.params.id;
    const cattleToRemoveFromSale = await OnSaleCattle.findOneAndDelete(
      { cattle_info: id });

    res.status(200).json(cattleToRemoveFromSale);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const addCattleToSale = async (req, res) => {
//   try {
//     const { title, location, category, description, contact, price, cattle } =
//       req.body;

//     if (
//       !title ||
//       !location ||
//       !category ||
//       !description ||
//       !contact ||
//       !price ||
//       !cattle
//     )
//       return res.status(400).json({
//         errorMessage: "Please fill all the required information",
//       });

//
//     })
//     const newCattleOnSale = await OnSaleCattle({
//       title: title,
//       location: location,
//       category: category,
//       description: description,
//       contact: contact,
//       price: price,
//       cattle_info: cattle,
//     });

//     const savedCattle = await newCattleOnSale.save();
//     res.status(200).json(savedCattle);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const addManyCattleToSale = async (req, res) => {
  try {
    const onSaleCattle = await OnSaleCattle.insertMany(req);
    res.status(200).json(onSaleCattle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
