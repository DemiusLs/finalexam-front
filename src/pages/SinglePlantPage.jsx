import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSinglePlant from "../services/fetchSinglePlant";

const SinglePlantPage = () =>{

    const { id } = useParams();
    const [plant, setPlant] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    if (id) {
      fetchSinglePlant(id, setPlant, setIsLoading, setError);
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
                    <div className="col-md-4">
                        <img
                        src={plant.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                        alt={plant.commonName}
                        className="img-fluid rounded-start"
                        />
                    </div>

                    {/* Dettagli */}
                    <div className="col-md-8">
                        <div className="card-body">
                        <h2 className="card-title text-success fw-bold">
                            {plant.commonName}
                        </h2>
                        <h5 className="text-muted">
                            <em>{plant.scientificName}</em>
                        </h5>
                        <p className="mt-3">{plant.description || "Nessuna descrizione disponibile."}</p>

                        <ul className="list-group list-group-flush mt-4">
                            <li className="list-group-item">
                            <strong>Famiglia:</strong> {plant.family?.name || "—"}
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
                        </div>
                    </div>
                    </div>
                </div>

                {/* Sezioni aggiuntive */}
                <div className="mt-5">
                    <h4>Benefici</h4>
                    {plant.benefits?.length ? (
                    <ul>
                        {plant.benefits.map((b) => (
                        <li key={b.id}>{b.name}</li>
                        ))}
                    </ul>
                    ) : (
                    <p className="text-muted">Nessun beneficio registrato.</p>
                    )}

                    <h4 className="mt-4">Controindicazioni</h4>
                    {plant.controindications?.length ? (
                    <ul>
                        {plant.controindications.map((c) => (
                        <li key={c.id}>{c.name}</li>
                        ))}
                    </ul>
                    ) : (
                    <p className="text-muted">Nessuna controindicazione nota.</p>
                    )}
                </div>
                </div>
        );
}

export default SinglePlantPage;