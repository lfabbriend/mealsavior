import mongoose from "mongoose";

export default class MongoBaseService {
    #model;

    constructor(schema) {
        this.#model = schema;
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
            // const newElement = await this.#model.save(req.body);
            // res.status(201).json(newElement);
            console.log(req.body)
        } catch (error) {
            this.#throwError(res, { message: error.message });
        }
    }

    /**
     * Updates an element
     */
    async update(req, res) {
        try {
            if (this.#isValidId(req.params.id)) {
                const updatedElement = await this.#model.findOneAndUpdate({ id: mongoose.Types.ObjectId(req.params.id) }, req.body);
                res.json(updatedElement);
            } else {
                this.#throwError(res, { message: "Invalid ID" });
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
