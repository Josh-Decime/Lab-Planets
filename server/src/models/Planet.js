import { Schema } from "mongoose";


export const PlanetSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    biome: { type: String, required: true, minLength: 3, maxLength: 30 },
    emoji: { type: String, required: true, default: '🌎' },
    atmosphere: { type: Boolean, required: true, },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
}, { toJSON: { virtuals: true } })

PlanetSchema.virtual('galaxy',
    {
        localField: 'galaxyId',
        foreignField: '_id',
        ref: 'Galaxy',
        justOne: true
    })