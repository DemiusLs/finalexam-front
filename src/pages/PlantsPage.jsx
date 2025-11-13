
import { useEffect, useState } from "react";
import fetchObjects from "../services/fetchObjects";
import { Link } from "react-router-dom";
import PlantTable from "../components/PlantTable";

const PlantsPage =() => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchObjects("plants",setPlants, setIsLoading, setError );
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-5 text-center">{error}</div>
    );
  }


  return (
    <section>
            <div className="container mt-5">
                    {/* Introduzione */}
                    <header className="text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">Catalogo delle Piante</h1>
                        <p className="lead text-muted">
                        Esplora le meraviglie botaniche raccolte nel nostro giardino alchemico.  
                        Qui troverai piante medicinali, aromatiche e rare, ciascuna con la propria storia e i suoi benefici.
                        </p>
                    </header>
                    

                    <PlantTable plants={plants}/>

                    
            </div>
    </section>
    
  );
}

export default PlantsPage;