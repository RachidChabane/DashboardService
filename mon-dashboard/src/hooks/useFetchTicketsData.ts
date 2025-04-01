import { useState, useEffect } from "react";

const API_URLS = {
  IND1: "https://ton-api.com/tickets/ind1",  // URL pour "Nombre de billets vendus"
  IND2: "https://ton-api.com/tickets/ind2",  // URL pour "Valeur des billets vendus"
  IND3: "https://ton-api.com/tickets/ind3",  // URL pour "Taux d'utilisation"
  IND4: "https://ton-api.com/tickets/ind4",  // URL pour "Taux de transfert"
};

type IndicatorKeys = keyof typeof API_URLS;

const useFetchTicketsData = (indicator: IndicatorKeys) => {
  const [data, setData] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Vérifie si l'indicateur est valide, sinon lance une erreur
        const url = API_URLS[indicator];
        if (!url) {
          throw new Error("Indicateur inconnu");
        }
        
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erreur de chargement des données");
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [indicator]);

  return { data, loading, error };
};

export default useFetchTicketsData;
