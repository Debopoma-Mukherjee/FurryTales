import { useEffect } from "react";
import Header from "./Header";
import { Link, useNavigate } from 'react-router-dom';

function AddPet() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <Header />
        <h2 className="p-3">ADD PET</h2>
        <label> Pet Name </label>
        <input className="form-control" type='text' />
        <label> Pet Description </label>
        <input className="form-control" type='text' />
        <label> Pet Price </label>
        <input className="form-control" type='text' />
        <label> Pet Category </label>
        <select className="form-control">
            <option>Cat</option>
            <option>Dog</option>
            <option>Birds</option>
        </select>

        </div>
    );
}

export default AddPet;
