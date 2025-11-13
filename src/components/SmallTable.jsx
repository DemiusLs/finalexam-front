import { Link } from "react-router-dom";

const SmallTable = ({elementList, route, emptyString}) =>{
    return(
        
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
                            {elementList.map((element) => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><em>{element.name}</em></td>
                                <td>{element.description}</td>
                                
                                <td>
                                <Link to={`/${route}/${element.id}`} className="btn btn-outline-success btn-sm">Dettagli</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    

                    {elementList.length === 0 && (
                        <div className="alert alert-warning mt-4 text-center">
                        {emptyString}
                        </div>
                    )}
            </div>
    )
}

export default SmallTable;