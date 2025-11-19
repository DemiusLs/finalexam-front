
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchObjects from "../services/fetchObjects";
import SmallTable from "../components/SmallTable";

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
                    <header className="text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">Catalogo dei benefici</h1>
                        <p className="lead text-muted">
                        Esplora le meraviglie botaniche raccolte nel nostro giardino alchemico.  
                        Qui troverai piante medicinali, aromatiche e rare, ciascuna con la propria storia e i suoi benefici.
                        </p>
                    </header>
                    <SmallTable elementList={controindications} route={"controindications"} emptyString={"Nessuna controindicazione trovata."} />
            </div>
    </section>
    
  );
}
export default ControindicationsPage;