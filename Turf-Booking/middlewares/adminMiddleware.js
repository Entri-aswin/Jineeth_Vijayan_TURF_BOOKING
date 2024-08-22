import jwt from "jsonwebtoken";
import "dotenv/config";


function authenticateAdmin(req, res, next) {
    const token = req.cookies.token;
    
    console.log(token);
    
    jwt.verify(token, process.env.secretKey, (err, user) => {
        console.log(err);

        if (err) return res.status(403);

        req.user = user;

        console.log(req.user.role);

        if (req.user.role !== "admin") {
            return res.send("not authenticated");
        }

        next();
    })
}

export default authenticateAdmin;