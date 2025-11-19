import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSingleObject from "../services/fetchSingleObject";
import PlantTable from "../components/PlantTable";

const SingleFamilyPage = () =>{

    const { id } = useParams();
    const [family, setFamily] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    if (id) {
      fetchSingleObject(id,"families", setFamily, setIsLoading, setError);
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

    if (!family) {
    return null;
    }

     return (
            <div className="container mt-5">
            <header className="text-center mb-5">
                <h1 className="display-5 fw-bold text-success">{family.name}</h1>
                <p className="lead text-muted">
                {family.description || "Nessuna descrizione disponibile."}
                </p>
            </header>
            <section>
                <h3 className="mb-3 text-success">Piante di questa famiglia</h3>
                {family.plants && family.plants.length > 0 ? (
                <PlantTable plants={family.plants}/>
                ) : (
                <div className="alert alert-warning text-center mt-4">
                    Nessuna pianta associata a questa famiglia.
                </div>
                )}
            </section>
            <div className="text-center mt-5">
                <Link to="/families" className="btn btn-outline-secondary">
                ← Torna all'elenco delle famiglie
                </Link>
            </div>
            </div>
        );
}

export default SingleFamilyPage;