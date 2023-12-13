import User from "../models/User.js";
import Cattle from "../models/Cattle.js";
import OnSaleCattle from "../models/OnSaleCattle.js";
import Seller from "../models/Seller.js";
import Question from "../models/Question.js";

export const getDashboardStats = async (req, res) => {
  try {
    const users = await User.find({});

    const onSaleCattle = await OnSaleCattle.find({});
    const sellers = await Seller.find({});

    const totalUsers = users.length;

    const totalOnSaleCattle = onSaleCattle.length;
    const totalSellers = sellers.length;

    res.status(200).json({
      totalSellers,
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
export const addQuestion = async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const question = new Question({
      description: payload.description,
      user: payload.user,
      onsalecattle: payload.onsalecattle,
    });
    await question.save();
    const onSaleCattle = await OnSaleCattle.findByIdAndUpdate(
      { _id: payload.onsalecattle },
      { $push: { questions: question._id } }
    );
    await onSaleCattle.save();
    res.status(200).json(question);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const addAnswer = async (req, res) => {
  try {
    const payload = req.body;
    const question = await Question.findByIdAndUpdate( { _id: payload.questionId } );
    question.answer = payload.answer;
    const savedQuestion = await question.save();
    res.status(200).json(question);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
