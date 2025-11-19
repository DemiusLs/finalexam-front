
import { useEffect, useState } from "react";
import fetchObjects from "../services/fetchObjects";
import { Link } from "react-router-dom";
import PlantTable from "../components/PlantTable";
import PlantCard from "../components/PlantCard";

const PlantsPage =() => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetchObjects("plants",setPlants, setIsLoading, setError );
  }, []);

  const getFilteredAndSortedPlants = () => {
    let currentPlants = [...plants];
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      currentPlants = currentPlants.filter(plant => 
        (plant.commonName && plant.commonName.toLowerCase().includes(lowerTerm)) || 
        (plant.scientificName && plant.scientificName.toLowerCase().includes(lowerTerm))
      );
    }
    currentPlants.sort((a, b) => {
      const nameA = (a.commonName || "").toLowerCase();
      const nameB = (b.commonName || "").toLowerCase();

      if (sortDirection === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return currentPlants;
  };
  // Calcoliamo le piante da mostrare ad ogni render
  const displayedPlants = getFilteredAndSortedPlants();

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </div>
      </div>
    );
  };

  if (error) {
    return (
      <div className="alert alert-danger mt-5 text-center">{error}</div>
    );
  };


  return (
    <section>
            <div className="container mt-5">
              <header className="text-center mb-5">
                <h1 className="display-5 fw-bold text-success">Catalogo delle Piante</h1>
                <p className="lead text-muted">
                  Esplora le meraviglie botaniche raccolte nel nostro giardino alchemico.
                  Qui troverai piante medicinali, aromatiche e rare.
                </p>
              </header>
              <div className="row g-3 mb-4 align-items-center p-3 bg-light rounded shadow-sm">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white text-muted">🔍</span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Cerca per nome comune o scientifico..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select 
                    className="form-select" 
                    value={sortDirection} 
                    onChange={(e) => setSortDirection(e.target.value)}
                  >
                    <option value="asc">A-Z (Ascendente)</option>
                    <option value="desc">Z-A (Discendente)</option>
                  </select>
                </div>
                <div className="col-md-3 text-md-end">
                  <div className="btn-group" role="group">
                    <button 
                      type="button" 
                      className={`btn ${viewMode === 'table' ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => setViewMode('table')}
                    >
                      <i className="bi bi-list"></i> Tabella
                    </button>
                    <button 
                      type="button" 
                      className={`btn ${viewMode === 'grid' ? 'btn-success' : 'btn-outline-success'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <i className="bi bi-grid"></i> Griglia
                    </button>
                  </div>
                </div>
              </div>
              {displayedPlants.length > 0 ? (
                <>
                  {viewMode === 'table' ? (
                    <PlantTable plants={displayedPlants} />
                  ) : (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {displayedPlants.map((plant) => (
                        <PlantCard key={plant.id } plant={plant} />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // Messaggio se nessun risultato trovato
                <div className="text-center py-5 text-muted">
                  <h4>Nessuna pianta trovata</h4>
                  <p>Prova a modificare i filtri di ricerca.</p>
                </div>
              )}

                    {/* <PlantTable plants={plants}/>  */}

                    
            </div>
    </section>
    
  );
}

export default PlantsPage;