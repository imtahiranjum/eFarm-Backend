
import Staff from "../models/Staff.js";
import User from "../models/User.js";
import Doctor from "../models/Doctor.js";


export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find({}).populate({ 
      path: 'user',
      populate: {
        path: 'name',
      },
      select: "-password"
   });
   console.log(staff)
   const staffs = []
    for(var i = 0; i<staff.length; i++){
      let newStaff = {
        _id: staff[i]._id,
        first_name: staff[i].user.name.first_name,
        phone_number: staff[i].phone_number,
        country: staff[i].country,
        designation: staff[i].designation,
        email: staff[i].user.email,
      }
      staffs.push(newStaff)
    }
    console.log(staffs)
    
    res.status(200).json(staffs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStaffWithUser = async (req, res) => {
  try {
    const staff = await User.aggregate([
      { $match: { _id: Staff.find({}) } },
      {
        $lookup: {
          from: "staff",
          localField: "_id",
          foreignField: "user",
          as: "staffwithuser",
        },
      },
      { $unwind: "$staffwithuser" },
    ]);
    console.log(staff)
    res.status(200).json(staff);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const Employee = await User.find({ id: `${req.id}` }).select("-password");
    res.status(200).json(Employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.find({}).select("-password");
    res.status(200).json(doctor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


