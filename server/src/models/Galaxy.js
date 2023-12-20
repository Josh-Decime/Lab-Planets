import { Schema } from "mongoose";


export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxLength: 50 },
    stars: { type: Number, required: true, minLength: 0, maxLength: 100000 },
    emoji: { type: String, required: true, default: '🌀' }
})