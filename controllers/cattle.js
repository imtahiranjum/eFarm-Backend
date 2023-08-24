import Cattle from "../models/Cattle.js"

export const getCattle = async (req, res) => {
    try{
        
    }
    catch (err){
        return res.status(400).json({
            errorMessage: err
        })

    }

}

export const createCattle = async (req, res) => {
    try{
        const {name, gender, age, breed, color, weight} = req.body

        const lowerCaseGender = gender.toLowerCase();
        console.log(lowerCaseGender);

        if (!name || !gender || !breed || !color || !weight)
        return res.status(400).json({
            errorMessage: "Please fill all the required fields"
        });

        if (name.Length > 25)
        return res.status(400).json({
            errorMessage: "Name length too much"
        });

        // if (lowerCaseGender != "male" || lowerCaseGender !== "female")
        // return res.status(400).json({
        //     errorMessage: "gender is not set correct"
        // });

        if (0 > weight > 10000 )
        return res.status(400).json({
            errorMessage: "incorrect weight"
        });

        const newCattle = await Cattle({
            "name": name,
            "gender": gender,
            "breed": breed,
            "color": color,
            "weight": weight,
            "age":age,
        });

        const savedCattle = await newCattle.save();

        res.status(200).json(savedCattle)
    }
    
    catch (err){
        return res.status(500).json({
            errorMessage: err
        })

    }

}