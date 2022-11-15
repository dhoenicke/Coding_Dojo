const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minLength: [3, "Name must be at least 3 characters"]
        },
        image: {
            type: String,
            required: [true, "Image is required"]
        },
        number_of_treasure: {
            type: Number,
            required: [true, "Number of Treasure Chests is required"],
        },
        catch_phrase: {
            type: String,
            required: [true, "Catch phrase required"]
        },
        crew_position: {
            type: String,
            required: [true, "Position is required"],
            unique: [true, "Only one of each position"]
        },
        pegLeg: {
            type: Boolean,
        },
        eyePatch: {
            type: Boolean,
        },
        hookHand: {
            type: Boolean,
        }
    },
    { timestamps: true }
);

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;