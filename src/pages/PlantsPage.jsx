
import { useEffect, useState } from "react";
import fetchPlants from "../services/fetchPlants";
import { Link } from "react-router-dom";

export default function PlantsPage() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlants(setPlants, setIsLoading, setError );
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
                    

                    {/* Tabella */}
                    <div className="table-responsive">
                        <table className="table table-striped table-hover align-middle">
                        <thead className="table-success">
                            <tr>
                            <th>ID</th>
                            <th>Nome Scientifico</th>
                            <th>Nome Comune</th>
                            <th>Famiglia</th>
                            <th>Habitat</th>
                            <th>Tossica</th>
                            <th>Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant) => (
                            <tr key={plant.id}>
                                <td>{plant.id}</td>
                                <td><em>{plant.scientificName}</em></td>
                                <td>{plant.commonName}</td>
                                <td>{plant.family?.name || "—"}</td>
                                <td>{plant.habitat || "—"}</td>
                                <td>
                                {plant.toxic ? (
                                    <span className="badge bg-danger">Sì</span>
                                ) : (
                                    <span className="badge bg-success">No</span>
                                )}
                                </td>
                                <td>
                                <Link to={`/plants/${plant.id}`} className="btn btn-outline-success btn-sm">Dettagli</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* Nessun risultato */}
                    {plants.length === 0 && (
                        <div className="alert alert-warning mt-4 text-center">
                        Nessuna pianta trovata.
                        </div>
                    )}
            </div>
    </section>
    
  );
}