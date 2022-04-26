import MongoBaseService from "../services/mongo.service.js";

import User from "../models/user.js";



export default class UsersService {

    #mongoBaseService;

    constructor() {
        this.#mongoBaseService = new MongoBaseService(User);
    }

    async getMany(req, res) {
        return await this.#mongoBaseService.getMany(req, res);
    }

    async getOne(req, res) {
        return await this.#mongoBaseService.getOne(req, res);
    }

    async create(req, res) {
        return await this.#mongoBaseService.createUser(req, res);
    }

    async update(req, res) {
        return await this.#mongoBaseService.update(req, res);
    }

    async delete(req, res) {
        return await this.#mongoBaseService.delete(req, res);
    }

}