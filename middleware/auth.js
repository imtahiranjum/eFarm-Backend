import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try{
        const token = req.cookies.token

        if (!token)
        return res.status(401).json({
            errorMessage: "Unauthorized"
        });

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified.user
        console.log(verified)
        next();
    }
    catch (err){
        console.log(err)
        res.status(401).json({
            errorMessage: "Unauthorized"
        })
    }
}
