import User from "../models/user.js";
import jwt from 'jsonwebtoken'
export default class AuthaseService {
    #model;

    constructor(model) {
        this.#model = model;
    }
    async verifyAuthentication(req, res) {
        try {
            const newElement = new this.#model(req.body);
            const userSearched = await User.findOne({ userName: newElement.userName });

            if (!userSearched) return this.#throwError(res, { message: error.message });
            const isMatch = await userSearched.isValidPassword(newElement.password)
            if (!isMatch) return this.#throwError(res, { message: error.message });
            //Assign a token with only the username to the user who entered
            jwt.sign({ user: userSearched.userName }, 'secretkey', (error, token) => {
                res.status(201).json([token]);
            })
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }

    // #region Private methods

    /**
     * Returns an error code and message
     */
    #throwError(res, { code = 404, message }) {
        return res.status(code).json({ message });
    }
    // #endregion
}