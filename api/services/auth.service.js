import User from "../models/user.js";
import jwt from 'jsonwebtoken'
import createError from 'http-errors'
export default class AuthaseService {
    #model;

    #jwtBaseService;


    constructor(model) {
        this.#model = model;
        this.#jwtBaseService = new JWTBaseService()
    }
    verifyAuthentication(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) throw createError.NotFound('User not registered')

            const isMatch = await user.isValidPassword(req.body.password)
            if (!isMatch)
                throw createError.Unauthorized('Username/password not valid')

            jwt.sign({ user: user }, 'secretkey', (error, token) => {
                res.status(201).json([savedElement, token]);
            })
        } catch (error) {
            if (error.isJoi === true)
                return next(createError.BadRequest('Invalid Username/Password'))
            next(error)
        }
    }


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