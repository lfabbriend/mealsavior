
import jwt from 'jsonwebtoken'

export default class JWTBaseService {

    // async createToken(newElement, res) {
    //     try {
    //         await jwt.sign({ user: newElement }, 'secretkey', (error, token) => {
    //             const userToken = [newElement, token];
    //             console.log('CREATE TOKEN')
    //             console.log(userToken)
    //             return userToken;
    //         })
    //     } catch (error) {
    //         return res.status(500).json({ message: error });
    //     }
    // }

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