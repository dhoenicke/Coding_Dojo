import React, { useState } from "react";
import { Link } from "react-router-dom";

const PirateForm = (props) => {

    const { initialName, initialImage, initialTreasure, initialCatch, initialPosition, initialPeg, initialPatch, initialHook, onSubmitProp } = props;

    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage);
    const [number_of_treasure, setNumber_of_treasure] = useState(initialTreasure);
    const [catch_phrase, setCatch_phrase] = useState(initialCatch);
    const [crew_position, setCrew_position] = useState(initialPosition);
    const [pegLeg, setPegLeg] = useState(initialPeg);
    const [eyePatch, setEyePatch] = useState(initialPatch);
    const [hookHand, setHookHand] = useState(initialHook);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name,
            image,
            number_of_treasure,
            catch_phrase,
            crew_position,
            pegLeg,
            eyePatch,
            hookHand
        });
    }

    return (
        <div className="col-5 mx-auto mt-5">
            <form className="mt-3" onSubmit={onSubmitHandler}>
                <p className="form-group">
                    <label htmlFor="name"> Pirate Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </p>
                <p className="form-group">
                    <label htmlFor="image"> Pirate Image: </label>
                    <input
                        className="form-control"
                        type="text"
                        required
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </p>
                <p className="form-group">
                    <label htmlFor="number_of_treasure"># of Treasure Chests: </label>
                    <input
                        className="form-control"
                        type="number"
                        required
                        onChange={(e) => setNumber_of_treasure(e.target.value)}
                        value={number_of_treasure}
                    />
                </p>
                <p className="form-group">
                    <label htmlFor="catch_phrase">Pirate Catch Phrase: </label>
                    <input
                        className="form-control"
                        type="text"
                        required
                        onChange={(e) => setCatch_phrase(e.target.value)}
                        value={catch_phrase}
                    />
                </p>
                <p className="form-group">
                    <label htmlFor="crew_position">Crew Position: </label>
                    <select
                        className="form-control"
                        required
                        onChange={(e) => setCrew_position(e.target.value)}
                        value={crew_position}
                    >
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <p className="form-group">
                    <label htmlFor="crew_position">Peg Leg </label>
                    <input type="checkbox"
                        onChange={(e) => setPegLeg(e.target.checked)}
                        checked={pegLeg}
                    >
                    </input>
                </p>
                <p className="form-group">
                    <label htmlFor="crew_position">Eye Patch </label>
                    <input type="checkbox"
                        onChange={(e) => setEyePatch(e.target.checked)}
                        checked={eyePatch}
                    >
                    </input>
                </p>
                <p className="form-group">
                    <label htmlFor="crew_position">Hook Hand </label>
                    <input type="checkbox"
                        onChange={(e) => setHookHand(e.target.checked)}
                        checked={hookHand}
                    >
                    </input>
                </p>
                <p className="text-center">
                    <Link to="/" className="btn btn-success m-2">
                        Cancel
                    </Link>
                    <button className="btn btn-primary">Submit</button>
                </p>
            </form>
        </div>
    );
}

export default PirateForm;