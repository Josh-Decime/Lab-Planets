import { dbContext } from "../db/DbContext.js";
import { galaxyService } from "./GalaxyService.js";



class PlanetService {
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

    async getPlanets() {
        const planets = await dbContext.Planets.find().populate('galaxy')
        return planets
    }





}

export const planetService = new PlanetService()