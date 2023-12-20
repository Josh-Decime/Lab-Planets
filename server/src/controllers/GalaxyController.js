import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxies)
    }

    async createGalaxy(request, response, next) {
        try {
            const galaxyData = request.body
            const galaxy = await galaxyService.createGalaxy(galaxyData)
            response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxyService.getGalaxies()
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }










}
