import React, {useState} from 'react';
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
    
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [book, setBook] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name,
            book,
        });
    }

    return (
    <div className="col-5 mx-auto mt-5">
            <form className="mt-3" onSubmit={onSubmitHandler}>
                <p className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </p>
                <p className="form-group">
                    <label htmlFor="book">Book: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setBook(e.target.value)}
                        value={book}
                    />
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

export default AuthorForm;