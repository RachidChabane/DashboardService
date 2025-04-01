'use client';

import { useState, useEffect } from 'react';
import { ResponsiveContainer } from 'recharts';
import Select, { SingleValue } from 'react-select';
import BarChartComponent from '@/components/BarChartComponent';
import PieChartComponent from '../components/PieChartComponent';
import useFetchTicketsData from '../hooks/useFetchTicketsData';

const Dashboard = () => {
  const [selectedIndicator, setSelectedIndicator] = useState<'IND1' | 'IND2' | 'IND3' | 'IND4'>('IND1');
  const { data, loading, error } = useFetchTicketsData(selectedIndicator) as unknown as { data: { value: number }[]; loading: boolean; error: boolean };

  // Ajout d'un état pour vérifier si le code s'exécute côté client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Met à jour l'état une fois que le code s'exécute côté client
  }, []);

  // Options pour le composant react-select
  const options = [
    { value: 'IND1', label: 'Nombre de billets vendus' },
    { value: 'IND2', label: 'Valeur des billets vendus' },
    { value: 'IND3', label: 'Taux d\'utilisation' },
    { value: 'IND4', label: 'Taux de transfert' },
  ];

  // Fonction pour gérer le changement de sélection
  const handleChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    if (selectedOption) {
      setSelectedIndicator(selectedOption.value as 'IND1' | 'IND2' | 'IND3' | 'IND4');
    }
  };

  // Rendre le composant uniquement côté client
  if (!isClient) {
    return null; // Ou afficher un fallback (ex : un loader)
  }

  return (
    <div className="p-4">
      {/* Utilisation de react-select avec options et gestion de la sélection */}
      <Select
        options={options}
        value={options.find(option => option.value === selectedIndicator)} // Trouver l'option sélectionnée
        onChange={handleChange} // Mettre à jour la sélection
        className="mb-4"
      />
      <div className="mt-4 w-full h-96">
        {loading ? (
          <h2 className="text-center text-2xl">Chargement...</h2>
        ) : error ? (
          <h2 className="text-center text-2xl text-red-500">Erreur de chargement</h2>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {selectedIndicator === 'IND1' || selectedIndicator === 'IND2' ? (
              <BarChartComponent data={data} />
            ) : selectedIndicator === 'IND3' ? (
              <PieChartComponent data={data} />
            ) : (
              <h2 className="text-center text-2xl">{Array.isArray(data) && data.length ? `${data[0].value}%` : 'Aucune donnée'}</h2>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
