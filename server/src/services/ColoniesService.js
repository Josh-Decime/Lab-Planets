import { Schema } from "mongoose";



export const ColonySchema = new Schema({
    name: { type: String, required: true, minLength: 1, maxLength: 30 },
    population: { type: Number, required: true, minlength: 1, maxLength: 10000000000000000000000 },
    emoji: { type: String, required: true, default: '🏴' },
    planetId: {},
    speciesId: {}

})