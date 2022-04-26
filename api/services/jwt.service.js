
import jwt from 'jsonwebtoken'

export default class JWTBaseService {

    // Authorization: Bearer <token>
    verifyToken(req, res) {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(" ")[1];
            return bearerToken;
        } else {
            return res.status(500).json({ message: err.message })
        }
    }

    validToken(token) {

        let valor = jwt.verify(token, 'secretkey', (error) => !!error)
        return valor
    }
}