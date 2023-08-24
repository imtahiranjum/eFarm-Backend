import User from "../models/User.js"
import Staff from "../models/Staff.js"
import Doctor from "../models/Doctor.js"


export const getUser = async (req, res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDashboardStats = async (req, res) => {
    try {
      const doctors = await Doctor.find({});
      const staff = await Staff.find({});
    
      const totalDoctors = 1;
      const totalStaff = 1;
      const thisMonthStaffHired = 1;
      const thisMonthDoctorsHired = 1;
      const todayStaffHired = 0;
      const todayDoctorsHired = 0;
  
      res.status(200).json({
        totalStaff,
        totalDoctors,
        thisMonthStaffHired,
        thisMonthDoctorsHired,
        todayStaffHired,
        todayDoctorsHired,
        doctors,
        staff
      });

    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };