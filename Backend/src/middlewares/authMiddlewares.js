import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]
    }
    if (!token) {
       return  res.status(401).json({message : "access denies no token prived"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(403).json({message : "invalid token"})
    }
}