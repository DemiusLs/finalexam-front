import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSingleObject from "../services/fetchSingleObject";

const SinglePlantPage = () =>{

    const { id } = useParams();
    const [plant, setPlant] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    if (id) {
      fetchSingleObject(id,"plants", setPlant, setIsLoading, setError);
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

    if (!plant) {
    return null;
    }

     return (
                <div className="container mt-5">
                <div className="card shadow-sm border-0">
                    <div className="row g-0">
                    {/* Immagine */}
                    <div className="col-lg-4 col-md-5">
                        <img
                        src={plant.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                        alt={plant.commonName}
                        className="img-fluid rounded-start h-100 object-cover "
                        />
                    </div>

                    {/* Dettagli */}
                    <div className="col-lg-8 col-md-7">
                        <div className="card-body">
                            <h2 className="card-title text-success fw-bold mb-1">
                                {plant.commonName}
                            </h2>
                            <h5 className="text-muted fst-italic mb-3">
                                <em>{plant.scientificName}</em>
                            </h5>
                            <p className="mt-3 text-secondary">{plant.description || "Nessuna descrizione disponibile."}</p>

                            <ul className="list-group list-group-flush mt-4">
                                <li className="list-group-item">
                                <strong>Famiglia:</strong> {plant.family || "—"}
                                </li>
                                <li className="list-group-item">
                                <strong>Habitat:</strong> {plant.habitat || "—"}
                                </li>
                                <li className="list-group-item">
                                <strong>Tossica:</strong>{" "}
                                {plant.toxic ? (
                                    <span className="badge bg-danger">Sì</span>
                                ) : (
                                    <span className="badge bg-success">No</span>
                                )}
                                </li>
                            </ul>               

                            <div className="row px-3 pb-4 mt-3">
                                <div className="col-lg-6 mt-3">
                                    <h5 className="fw-semibold">Benefici:</h5>
                                    {plant.benefits?.length ? (
                                    <ul className="list-group list-group-flush mt-2 ">
                                        {plant.benefits.map((b) => (
                                        <li key={b.id} className="list-group-item">{b.name}</li>
                                        ))}
                                    </ul>
                                    ) : (
                                    <p className="text-muted">Nessun beneficio registrato.</p>
                                    )}
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <h5 className="fw-semibold">Controindicazioni:</h5>
                                    {plant.benefits?.length ? (
                                    <ul className="list-group list-group-flush mt-2 ">
                                        {plant.controindications.map((c) => (
                                        <li key={c.id} className="list-group-item">{c.name}</li>
                                        ))}
                                    </ul>
                                    ) : (
                                    <p className="text-muted">Nessun beneficio registrato.</p>
                                    )}
                                </div>                            
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePlantPage;