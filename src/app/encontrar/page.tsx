'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// --- COMPONENTE DO MAPA ---
function MapaCafeteria() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const posicaoFicticia = {
    lat: -23.561334,
    lng: -46.656535
  };

  // --- ALTERAÇÃO AQUI ---
  // Aumentamos a altura do mapa de '400px' para '550px'.
  const containerStyle = {
    width: '100%',
    height: '650px',
    borderRadius: '8px',
  };

  if (!isLoaded) {
    return <div className="text-gray-400">Carregando mapa...</div>;
  }

  if (loadError) {
    return <div className="text-red-500">Erro ao carregar o mapa. Verifique a chave de API.</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={posicaoFicticia}
      zoom={17}
    >
      <Marker position={posicaoFicticia} />
    </GoogleMap>
  );
}


// --- PÁGINA PRINCIPAL "ENCONTRAR" ---
export default function Encontrar() {
  return (
    <div className="mt-10  bg-bannerencontrar">
      <div className="container mx-auto px-4 pt-16 pb-16 text-center relative z-10">
        <h1 className="text-4xl font-bold text-amber-50 mb-4">Onde nos Encontrar</h1>
        <p className="text-lg text-gray-400 mb-12">
          Estamos ansiosos pela sua visita! Veja como é fácil chegar até nós.
        </p>

        {/* 
          Container para o mapa e o endereço.
          Ajuste: 'items-center' trocado por 'items-start' para melhor alinhamento vertical.
        */}
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <div className="w-full ">
            <MapaCafeteria />
          </div>

          <div className="ml-75 text-left text-gray-300">
            <h2 className="text-2xl font-bold text-amber-100 mb-4">Nosso Endereço</h2>
            <p className="mb-2 text-lg">Rua do Café Fictício, 123</p>
            <p className="mb-2 text-lg">Bairro do Expresso, São Paulo - SP</p>
            <p className="mb-8 text-lg">CEP: 01311-000</p>

            <h2 className="text-2xl font-bold text-amber-100 mb-4">Horário de Funcionamento</h2>
            <p className="mb-2">Segunda a Sexta: 8:00 - 19:00</p>
            <p className="mb-2">Sábados e Feriados: 9:00 - 17:00</p>
            <p>Domingos: Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}