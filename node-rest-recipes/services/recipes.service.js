import MongoBaseService from '../services/mongo.service.js';

import Recipe from '../models/recipe.js';

export default class RecipesService {
	#mongoBaseService;

	constructor() {
		this.#mongoBaseService = new MongoBaseService(Recipe);
	}

	async getMany(req, res) {
		return await this.#mongoBaseService.getMany(req, res);
	}

	async getOne(req, res) {
		return await this.#mongoBaseService.getOne(req, res);
	}

	async create(req, res) {
		return await this.#mongoBaseService.create(req, res);
	}

	async update(req, res) {
		return await this.#mongoBaseService.update(req, res);
	}

	async delete(req, res) {
		return await this.#mongoBaseService.delete(req, res);
	}
}
