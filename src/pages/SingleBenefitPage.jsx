import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSingleObject from "../services/fetchSingleObject";

const SingleBenefitPage = () =>{

    const { id } = useParams();
    const [benefit, setBenefit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    if (id) {
      fetchSingleObject(id,"benefits", setBenefit, setIsLoading, setError);
    }
  }, [id]);

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

    if (!benefit) {
    return null;
    }

     return (
            <div className="container mt-5">
            {/* Intestazione */}
            <header className="text-center mb-5">
                <h1 className="display-5 fw-bold text-success">{benefit.name}</h1>
                <p className="lead text-muted">
                {benefit.description || "Nessuna descrizione disponibile."}
                </p>
            </header>

            {/* Sezione piante collegate */}
            <section>
                <h3 className="mb-3 text-success">Piante con questo beneficio</h3>
                {benefit.plants && benefit.plants.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-hover align-middle">
                    <thead className="table-success">
                        <tr>
                        <th>ID</th>
                        <th>Nome comune</th>
                        <th>Nome scientifico</th>
                        <th>Famiglia</th>
                        <th>Tossica</th>
                        <th>Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {benefit.plants.map((plant) => (
                        <tr key={plant.id}>
                            <td>{plant.id}</td>
                            <td>{plant.commonName}</td>
                            <td><em>{plant.scientificName}</em></td>
                            <td>{plant.family || "—"}</td>
                            <td>
                            {plant.toxic ? (
                                <span className="badge bg-danger">Sì</span>
                            ) : (
                                <span className="badge bg-success">No</span>
                            )}
                            </td>
                            <td>
                            <Link
                                to={`/plants/${plant.id}`}
                                className="btn btn-outline-success btn-sm"
                            >
                                Dettagli
                            </Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                ) : (
                <div className="alert alert-warning text-center mt-4">
                    Nessuna pianta associata a questo beneficio.
                </div>
                )}
            </section>

            {/* Pulsante di ritorno */}
            <div className="text-center mt-5">
                <Link to="/benefits" className="btn btn-outline-secondary">
                ← Torna all'elenco dei benefici
                </Link>
            </div>
            </div>
        );
}

export default SingleBenefitPage;