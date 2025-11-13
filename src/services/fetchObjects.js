import api from "./api";


const fetchObjects = async(objString ,setPlants, setIsLoading ,setError) =>{

    setIsLoading(true); 
    try {
        const res = await api.get(`/${objString}`);

        if (Array.isArray(res.data)) {
            console.log(res.data)
            setPlants(res.data);
            }else{
                setError("Dati non validi");
            }
    }catch(err) {
        console.error(err);
        setError("Errore nel caricamento");
    }finally{

        setIsLoading(false); 
    }
}



export default fetchObjects;