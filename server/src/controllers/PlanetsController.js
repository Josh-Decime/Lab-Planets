import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
    }

}