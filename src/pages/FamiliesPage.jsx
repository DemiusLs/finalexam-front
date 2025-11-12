
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchObjects from "../services/fetchObjects";

const FamiliesPage =()  =>{
  const [families, setFamilies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchObjects("families",setFamilies, setIsLoading, setError );
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
                        <h1 className="display-5 fw-bold text-success">Catalogo delle famiglie</h1>
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
                            <th>Nome</th>
                            <th>Descrizione</th>
                            <th>Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {families.map((familiy) => (
                            <tr key={familiy.id}>
                                <td>{familiy.id}</td>
                                <td><em>{familiy.name}</em></td>
                                <td>{familiy.description}</td>
                                
                                <td>
                                <Link to={`/families/${familiy.id}`} className="btn btn-outline-success btn-sm">Dettagli</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* Nessun risultato */}
                    {families.length === 0 && (
                        <div className="alert alert-warning mt-4 text-center">
                        Nessuna famiglia trovata.
                        </div>
                    )}
            </div>
    </section>
    
  );
}
export default FamiliesPage;