import React, {useState} from 'react';
import ProjectMenu from './ProjectMenu';
import './ProyectCard.css';
import NavBar from '../nav-bar/NavBar';

const Projects = () => {
    const [projs] = useState(ProjectMenu);

    return(
        
        <div className="container" id="proj">
            <NavBar/>
            <h3 className='nombre'>MARÍA JOSÉ CASTILLO</h3>
            <h2 className="secTitle">RECENT WORKS</h2>
            <div className="projContainer grid">
                {projs.map((elem) => {
                    const{id, image, alt, title, year, description} = elem;
                    return(
                        <div className="projCard" key={id}>
                            <div className="thumbnail">
                                <img src={image} alt={alt}/>
                                <div className="mask"></div>
                            </div>

                            <h3 className="title">{title}</h3>
                            <p className='descrip'>{description}</p>
                            <h1 className='title1'>{year}</h1>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects