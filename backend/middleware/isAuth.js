
const isAuth = async(req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "User doesn't have a token" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "User doesn't have a valid Token" });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "User doesn't have a Token" });
    }
}
export default isAuth