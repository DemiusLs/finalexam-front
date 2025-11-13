import { Link } from "react-router-dom";

const PlantTable = ({plants}) =>{

    return(      
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
                
                    {plants.length === 0 && (
                        <div className="alert alert-warning mt-4 text-center">
                        Nessuna pianta trovata.
                        </div>
                    )}
            </div>)
    
}

export default PlantTable;