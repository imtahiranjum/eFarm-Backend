import OnSaleCattle from "../models/OnSaleCattle.js";

export const getOnSaleCattle = async (req, res) => {
    try {
      const onSaleCattle = await OnSaleCattle.find({}).populate('questions');

      console.log(onSaleCattle)
  
      res.status(200).json(onSaleCattle);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
export const getOneOnSaleCattle = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const onSaleCattle = await OnSaleCattle.findOne(id).populate('questions');

      console.log(onSaleCattle)
  
      res.status(200).json(onSaleCattle);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const addCattleToSale = async (req, res) => {
    try {
      const { title, location, category, description, contact, price, cattle } = req.body;
  
      if (!title|| !location|| !category|| !description|| !contact|| !price|| !cattle)
      return res.status(400).json({
        errorMessage: "Please fill all the required information"
      })
  
      const newCattleOnSale = await OnSaleCattle({
        "title": title,
        "location": location,
        "category": category,
        "description": description,
        "contact": contact,
        "price": price,
        "cattle_info": cattle,
      })
  
      const savedCattle = await newCattleOnSale.save();
      res.status(200).json(savedCattle);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  export const addManyCattleToSale = async (req, res) => {
    try {
      const onSaleCattle = await OnSaleCattle.insertMany(req)
      res.status(200).json(onSaleCattle);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  