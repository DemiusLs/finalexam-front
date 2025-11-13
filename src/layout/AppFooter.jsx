
const AppFooter = () =>{

    return(
       <footer className="bg-body-tertiary border-top py-4 mt-auto">
        <div className="container">
            <div className="row gy-3 align-items-center">
            <div className="col-md-6">
                <p className="mb-0 text-muted small">
                © {new Date().getFullYear()} The Alchemist's Garden. Tutti i diritti riservati.
                </p>
            </div>
            <div className="col-md-6 text-md-end">
                <p className="mb-0 small">
                Progetto didattico | <a href="mailto:info@alchemists.garden">info@alchemists.garden</a>
                </p>
            </div>
            </div>
        </div>
    </footer>
    )
}
export default AppFooter;