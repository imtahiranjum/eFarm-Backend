import User from "../models/User.js";
import Cattle from "../models/Cattle.js";
import OnSaleCattle from "../models/OnSaleCattle.js";
import Seller from "../models/Seller.js";

export const getDashboardStats = async (req, res) => {
  try {
    const users = await User.find({});
    const cattle = await Cattle.find({});
    const onSaleCattle = await OnSaleCattle.find({});

    const totalUsers = users.length;
    const totalCattle = cattle.length;
    const totalOnSaleCattle = onSaleCattle.length;
    const totalIndividualSellers = 1;
    const totalFarmSellers = 0;

    res.status(200).json({
      totalCattle,
      totalFarmSellers,
      totalIndividualSellers,
      totalOnSaleCattle,
      totalUsers,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getSeller = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id).populate("profile");

    res.status(200).json(seller);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
