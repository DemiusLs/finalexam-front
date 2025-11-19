import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per la navigazione

const PlantCard = ({ plant }) => {
  
  

  return (
    <div className="col">
      
      <Link to={`/plants/${plant.id}`} className="text-decoration-none">
        <div className="card h-100 shadow-sm border-success plant-card-hover-effect">
          <img 
            src= {plant.imageUrl ||  'https://placehold.co/300x400?text=Nessuna+Immagine'}
            className="card-img-top" 
            alt={plant.commonName || "Immagine pianta"} 
            style={{height: '200px', objectFit: 'cover'}}           
          />
          
          <div className="card-body d-flex flex-column justify-content-between">
            <div className='row'>

              <div className='col-10'>
                <h5 className="card-title text-success mb-1">{plant.commonName || "Nome Comune Sconosciuto"}</h5>
              
                <h6 className="card-subtitle mb-2 text-muted fst-italic">{plant.scientificName || "Nessun nome scientifico"}</h6>
              </div>

              <div className="col-2">
                  {plant.toxic ? 
                    <span className="badge bg-danger mt-2 align-self-start">
                      ⚠️
                    </span> : 
                    <span className="badge bg-success mt-2 align-self-start">
                      🍏
                    </span> 
                  }
              </div>    
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;