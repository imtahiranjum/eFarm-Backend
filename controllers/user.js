import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    if (user === undefined)
      return res.status(401).json({
        errorMessage: "Wrong email or user does not exist on the machine",
      });
    return res.status(200).json({id: user._id, first_name: user.name.first_name, email: user.email});
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

    const user = await User.findOne({email: email});
    if (user === undefined)
      return res.status(400).json({
        errorMessage: "Wrong email or user does not exist on the machine",
      });
    return res.status(200).json( {id: user._id, first_name: user.name.first_name, email: user.email, roles: user.roles});
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Wrong email",
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
