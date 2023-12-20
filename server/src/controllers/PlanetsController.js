import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .post('', this.createPlanet)
            .get('', this.getPlanets)
    }
    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const planet = await planetService.createPlanet(planetData)
            response.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async getPlanets(request, response, next) {
        try {
            const planets = await planetService.getPlanets()
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }





}