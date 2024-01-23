import { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddPet() {
    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [pimage, setpimage] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);

    const handleApi = () => {
        const formData = new FormData();
        formData.append('pname', pname)
        formData.append('pdesc', pdesc)
        formData.append('price',price)
        formData.append('category',category)
        formData.append('pimage',pimage)

        const url = 'http://localhost:4000/add-pet';

        axios.post(url,formData)
        .then((res)=>{
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />
            <div className="p-3">
        <h2 >ADD PET</h2>
        <label> Pet Name </label>
        <input className="form-control" type='text' value={pname} 
        onChange={(e) => {setpname(e.target.value)}}/>
        <label> Pet Description </label>
        <input className="form-control" type='text' value={pdesc} 
        onChange={(e) => {setpdesc(e.target.value)}}/>
        <label> Pet Price </label>
        <input className="form-control" type='text' value={price}
        onChange={(e) => {setprice(e.target.value)}} />
        <label> Pet Category </label>
        <select className="form-control" value={category}
        onChange={(e)=> setcategory(e.target.value)}>
            <option>Cat</option>
            <option>Dog</option>
            <option>Birds</option>
        </select>
        <label>Pet Image</label>
        <input className="form-control" type="file" 
        onChange={(e) => {
             setpimage(e.target.files[0])
        }} />

        <button onClick={handleApi} className="btn btn-danger mt-3">SUBMIT</button>
        </div>
        </div>
    );
}

export default AddPet;
