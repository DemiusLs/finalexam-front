import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSingleObject from "../services/fetchSingleObject";
import PlantTable from "../components/PlantTable";

const SingleControindicationPage = () =>{

    const { id } = useParams();
    const [controindication, setControindication] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    if (id) {
      fetchSingleObject(id,"controindications", setControindication, setIsLoading, setError);
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

    if (!controindication) {
    return null;
    }

     return (
            <div className="container mt-5">
            {/* Intestazione */}
            <header className="text-center mb-5">
                <h1 className="display-5 fw-bold text-success">{controindication.name}</h1>
                <p className="lead text-muted">
                {controindication.description || "Nessuna descrizione disponibile."}
                </p>
            </header>

            {/* Sezione piante collegate */}
            <section>
                <h3 className="mb-3 text-success">Piante con queste controindicazioni</h3>
                {controindication.plants && controindication.plants.length > 0 ? (
                <PlantTable plants={controindication.plants}/>
                ) : (
                <div className="alert alert-warning text-center mt-4">
                    Nessuna pianta associata a questa controindicazione.
                </div>
                )}
            </section>

            {/* Pulsante di ritorno */}
            <div className="text-center mt-5">
                <Link to="/controindications" className="btn btn-outline-secondary">
                ← Torna all'elenco delle controindicazioni
                </Link>
            </div>
            </div>
        );
}

export default SingleControindicationPage;