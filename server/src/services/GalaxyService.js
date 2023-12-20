import { dbContext } from "../db/DbContext.js";



class GalaxyService {

    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }

    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

    async getGalaxyById(galaxyId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)
        if (!galaxy) {
            throw new Error(`No galaxy at id: ${galaxyId}`)
        }
        return galaxy
    }





}

export const galaxyService = new GalaxyService()