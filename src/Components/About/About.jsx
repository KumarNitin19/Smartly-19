import React from 'react'
import { NavLink } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div>
             <div className="container py-5 my-5">
                 <div className="row justify-content-around aboutBody">
                     <div className="col-12 col-lg-5 aboutContent">
                         <h1 className="text-primary fw-bold mb-4">About us</h1>
                         <p className="lead mb-4">
                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iusto eligendi quae sit facere qui veritatis? Quis dolorem delectus magni. Architecto sequi et a commodi veritatis error odit amet consequuntur quaerat quidem vitae, facere enim voluptatum dolor rerum impedit quibusdam, debitis aspernatur atque. Veritatis explicabo vel at, soluta nostrum tenetur assumenda nulla a ipsa dolorum? Eos maiores aspernatur ipsum totam commodi, aut nulla sunt cupiditate perspiciatis dicta quod et? Velit perspiciatis explicabo illo necessitatibus totam optio quasi ex. Porro veritatis minima aperiam ipsum ducimus et vel mollitia architecto voluptates inventore culpa cupiditate suscipit fuga dolor exercitationem quo id, delectus sequi.
                         </p>
                         <NavLink to="/contact" className="btn btn-outline-primary px-3 fw-bold">Conatct us</NavLink>
                     </div>
                     <div className="col-12 col-lg-4">
                         <img src="assets/about.svg" alt="" height="450" width="450" />
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default About
