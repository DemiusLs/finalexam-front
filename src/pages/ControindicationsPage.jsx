
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchObjects from "../services/fetchObjects";

const ControindicationsPage =()  =>{
  const [controindications, setControindications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchObjects("controindications",setControindications, setIsLoading, setError );
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
                        <h1 className="display-5 fw-bold text-success">Catalogo dei benefici</h1>
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
                            {controindications.map((controindication) => (
                            <tr key={controindication.id}>
                                <td>{controindication.id}</td>
                                <td><em>{controindication.name}</em></td>
                                <td>{controindication.description}</td>
                                
                                <td>
                                <Link to={`/controindications/${controindication.id}`} className="btn btn-outline-success btn-sm">Dettagli</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* Nessun risultato */}
                    {controindications.length === 0 && (
                        <div className="alert alert-warning mt-4 text-center">
                        Nessuna controindicazione trovata.
                        </div>
                    )}
            </div>
    </section>
    
  );
}
export default ControindicationsPage;