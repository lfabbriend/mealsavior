import mongoose from "mongoose";
import JWTBaseService from "../services/jwt.service.js";
import jwt from "jsonwebtoken"

export default class MongoBaseService {
    #model;
    #jwtBaseService;

    constructor(model) {
        this.#model = model;
        this.#jwtBaseService = new JWTBaseService()
    }

    // #region Public methods

    /**
     * Gets many elements
     */
    async getMany(_req, res) {
        try {
            const data = await this.#model.find();
            res.json(data);
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }
    /**
     * Gets many elements whit populate
     */
    async getManyPop(_req, res, collection) {
        try {
            const data = await this.#model.find({}).populate(collection);
            res.json(data);
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }
    /**
     * Gets one element
     */
    async getOne(req, res) {
        try {
            if (!this.#isValidId(req.params.id)) {
                return this.#throwError(res, { message: "Invalid ID" });
            }

            const data = await this.#model.findById(mongoose.Types.ObjectId(req.params.id));
            res.json(data);
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }

    /**
     * Creates a new element
     */
    async create(req, res) {
        try {
            let token = this.#jwtBaseService.verifyToken(req)
            const newerror = this.#jwtBaseService.validToken(token)
            if (newerror == false) {
                const newElement = new this.#model(req.body);
                const savedElement = await newElement.save();
                res.status(201).json(savedElement);
            } else {
                return res.status(403).json({ message: "Forbidden Access" })
            }
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }

    /**
     * Updates an element
     */
    async update(req, res) {
        try {
            let token = this.#jwtBaseService.verifyToken(req)
            const newerror = this.#jwtBaseService.validToken(token)
            if (newerror == false) {
                if (this.#isValidId(req.params.id)) {
                    // const updatedElement = await this.#model.findOneAndUpdate({ id: mongoose.Types.ObjectId(req.params.id) }, req.body,{ new: true });
                    const updatedElement = await this.#model.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body, { new: true });
                    res.json(updatedElement);
                } else {
                    this.#throwError(res, { message: "Invalid ID" });
                }
            } else {
                return res.status(403).json({ message: "Forbidden Access" })
            }
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }

    /**
     * Deletes an element
     */
    async delete(req, res) {
        try {
            if (this.#isValidId(req.params.id)) {
                const deletedElement = await this.#model.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id));
                res.json(deletedElement);
            } else {
                this.#throwError(res, { message: "Invalid ID" });
            }
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }

    // #endregion

    // #region User Methods
    /**
     * Creates a new user
     */
    async createUser(req, res) {
        try {
            const newElement = new this.#model(req.body);
            const savedElement = await newElement.save();
            jwt.sign({ user: savedElement.userName }, 'secretkey', (error, token) => {
                res.status(201).json([savedElement, token]);
            })
            // res.status(201).json(savedElement);
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }
    // #endregion

    // #region Private methods

    /**
     * Returns an error code and message
     */
    #throwError(res, { code = 500, message }) {
        return res.status(code).json({ message });
    }

    /**
     * Checks if an ID is a valid Mongo ID
     */
    #isValidId(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }
    // #endregion
}
