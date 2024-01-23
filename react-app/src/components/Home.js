import { useEffect } from "react";
import Header from "./Header";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         navigate('/login');
    //     }
    // }, []);

    // useEffect(() => {
    //     const url = 'http://localhost:4000/get-pets';
    //     axios.get(url)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err)=> {
    //             console.log(err)
    //         })
    // })

    return (
        <div>
            <Header />
            {/* <Link to="/add-pet" > ADD PET </Link> */}
        </div>
    );
}

export default Home;
