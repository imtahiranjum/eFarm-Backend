import User from "../models/User.js";
import Seller from "../models/Seller.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Profile from "../models/Profile.js";

export const getUser = async (req, res) => {
  try {
    console.log(req);
    const id = req.params.id;
    console.log(id);
    if (!id) {
      return res.status(401).json({
        errorMessage: "No id or email given",
      });
    }

    const user = await User.findById(id);
    const profile = await Profile.findOne({ user: user._id });
    if (user === undefined)
      return res.status(401).json({
        errorMessage: "Wrong email or user does not exist on the machine",
      });
    return res.status(200).json({
      id: user._id,
      first_name: user.name.first_name,
      email: user.email,
      profile: profile,
    });
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Wrong email or password",
    });
  }
};
export const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      return res.status(400).json({
        errorMessage: "No email given",
      });
    }

    const user = await User.findOne({ email: email })
    const profile = await Profile.findOne({ user: user._id });
    if (user === undefined)
      return res.status(400).json({
        errorMessage: "Wrong email or user does not exist on the machine",
      });
    return res.status(200).json({
      id: user._id,
      first_name: user.name.first_name,
      email: user.email,
      roles: user.roles,
      profile: profile,
    });
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Wrong email",
    });
  }
};
export const getSellerById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (!id) {
      return res.status(400).json({
        errorMessage: "id wrong or not given",
      });
    }
    const seller = await Seller.findById({ _id: id }).populate("user");
    const profile = await Profile.findOne({ user: seller.user._id });

    if (seller === undefined)
      return res.status(400).json({
        errorMessage: "Wrong email or user does not exist on the machine",
      });
    return res.status(200).json({ seller, profile });
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Something went wrong" + err,
    });
  }
};
export const getSellerByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      return res.status(400).json({
        errorMessage: "email wrong or not given",
      });
    }
    const user = await User.findOne({ email: email });
    const seller = await Seller.findOne({ user: user._id }).populate("user");
    const profile = await Profile.findOne({ user: user._id });

    if (seller === undefined)
      return res.status(400).json({
        errorMessage: "Wrong email or user does not exist on the machine",
      });
    return res.status(200).json({ seller, profile });
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Something went wrong" + err,
    });
  }
};

// export const getUserId = async (req, res) => {
//   try {
//     const id = req.params.id;

//     if (!id) {
//       return res.status(401).json({
//         errorMessage: "No id or email given",
//       });
//     }

//     const user = await User.findById(id);
//     if (!user)
//       return res.status(401).json({
//         errorMessage: "user does not exist on the system",
//       });
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(400).json({
//       errorMessage: "Wrong email or password",
//     });
//   }
// };

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errorMessage: "Please enter all required fields",
      });
    }

    const exisitingUser = await User.findOne({ email });

    if (!exisitingUser)
      return res.status(401).json({
        errorMessage: "Wrong email or password",
      });

    const passwordCorrect = await bcrypt.compare(
      password,
      exisitingUser.password
    );

    if (!passwordCorrect)
      return res.status(401).json({
        errorMessage: "Wrong email or password",
      });

    const token = jwt.sign(
      {
        user: exisitingUser._id,
      },
      process.env.JWT_SECRET
    );

    console.log(token);

    res
      .cookie("token", token, {
        httponly: true,
      })
      .send();
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Wrong email or password",
    });
  }
};
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, passwordVerify } = req.body;
    if (!firstName || !lastName || !email || !password || !passwordVerify) {
      return res.status(400).json({
        errorMessage: "Please enter all required fields",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Please Enter at least 6 character password",
      });
    }
    if (passwordVerify !== password) {
      return res.status(400).json({
        errorMessage: "Passwords don't match",
      });
    }

    const exisitingUser = await User.findOne({ email });
    if (exisitingUser)
      return res.status(400).json({
        errorMessage: "Email already exists",
      });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: { first_name: firstName, last_name: lastName },
      email: email,
      password: passwordHash,
    });

    const newProfile = new Profile({ user: newUser._id });

    const savedUserProfile = await newProfile.save();
    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httponly: true,
      })
      .send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createSeller = async (req, res) => {
  try {
    const { name, displayName, description, rating, contact_info, userEmail } =
      req.body;
    // if (!name, !displayName || !description || !rating || !contact_info) {
    //   return res.status(400).json({
    //     errorMessage: "all required fields not entered",
    //   });
    // }
    console.log(req.body);
    if (description.length < 50) {
      return res.status(400).json({
        errorMessage: "Please Enter at least 10 character description",
      });
    }
    // if (passwordVerify !== password) {
    //   return res.status(400).json({
    //     errorMessage: "Passwords don't match",
    //   });
    // }

    const exisitingSeller = await Seller.findOne({
      contact_info: contact_info,
    });
    if (exisitingSeller)
      return res.status(400).json({
        errorMessage: "Seller already exists",
      });

    const exisitingUser = await User.findOne({ email: userEmail });
    if (!exisitingUser)
      return res.status(400).json({
        errorMessage: "User does not exist",
      });

    const updatedUser = await User.findByIdAndUpdate(exisitingUser._id, {
      roles: ["seller"],
    });

    const newSeller = new Seller({
      name: name,
      display_name: displayName,
      description: description,
      rating: rating,
      contact_info: {
        phone_number: contact_info.phone_number,
        address: contact_info.address,
      },
      user: exisitingUser._id,
      cattle_on_sale: [],
    });

    const savedUser = await updatedUser.save();
    const savedSeller = await newSeller.save();
    res.status(200).json(savedSeller);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const logoutUser = (req, res) => {
  try {
    res
      .cookie("token", "", {
        httponly: true,
        expires: new Date(0),
      })
      .send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addToFavorite = async (req, res) => {
  try {
    const { onSaleCattleId, userId } = req.body;
    console.log(onSaleCattleId, userId);
    if (!onSaleCattleId || !userId) {
      return res.status(400).json({
        errorMessage: "Please enter all required fields",
      });
    }
    const user = User.findById(userId);
    if (!user)
      return res.status(400).json({
        errorMessage: "User does not exist",
      });
    const check = await Profile.findOne({
      user: userId,
      favorites: onSaleCattleId,
    });
    if (check)
      return res.status(400).json({
        errorMessage: "Already in favorites",
      });
    else {
      const profile = await Profile.findOneAndUpdate(
        { user: userId },
        { $push: { favorites: onSaleCattleId } }
      );
      await profile.save();
      return res.status(200).json(profile);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const removeFromFavorite = async (req, res) => {
  try {
    const { onSaleCattleId, userId } = req.body;
    console.log(onSaleCattleId, userId);
    if (!onSaleCattleId || !userId) {
      return res.status(400).json({
        errorMessage: "Please enter all required fields",
      });
    }
    const user = User.findById(userId);
    if (!user)
      return res.status(400).json({
        errorMessage: "User does not exist",
      });
    const check = await Profile.findOne({
      user: userId,
      favorites: onSaleCattleId,
    });
    if (!check)
      return res.status(400).json({
        errorMessage: "Not in favorites",
      });
    else {
      const profile = await Profile.findOneAndUpdate(
        { user: userId },
        { $pull: { favorites: onSaleCattleId } }
      );
      await profile.save();
      return res.status(200).json(profile);
    }

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getUser = async (req, res) => {
//     try {
//         const user = await User.find({email: req.body.email}).populate();
//         console.log(user)
//         if req.body.password ==

//         res.status(200).json(user);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
//   };
