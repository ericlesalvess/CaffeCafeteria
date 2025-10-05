'use client'; // Necessário para usar estado e interatividade (useState, onClick)

import { useState } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

// --- DADOS E TIPAGEM DAS FOTOS ---

// 1. Definindo a "forma" de um objeto de foto para o TypeScript
interface Photo {
  id: number;
  src: string;
  caption: string;
}

const photos: Photo[] = [
  { id: 1, src: '/fotos1.jpg', caption: 'Nosso cantinho aconchegante.' },
  { id: 2, src: '/fotos7.jpg', caption: 'Café da manhã especial.' },
  { id: 3, src: '/fotos15.jpg', caption: 'Detalhes que fazem a diferença.' },
  { id: 4, src: '/fotos3.jpg', caption: 'O aroma do nosso expresso.' },
  { id: 5, src: '/fotos9.jpg', caption: 'Pausa para um doce.' },
  { id: 6, src: '/fotos15.jpg', caption: 'Ambiente perfeito para ler.' },
  { id: 7, src: '/fotos4.jpg', caption: 'Nossos baristas em ação.' },
  { id: 8, src: '/fotos8.jpg', caption: 'Ingredientes frescos e selecionados.' },
  { id: 9, src: '/fotos10.jpg', caption: 'Café gelado para os dias quentes.' },
  { id: 10, src: '/fotos12.jpg', caption: 'Momentos compartilhados.' },
];

// --- O COMPONENTE DA PÁGINA ---
export default function FotosPage() {
  // 2. Tipando o estado: pode ser um objeto Photo ou null
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  // 3. Tipando o parâmetro da função: 'photo' é do tipo 'Photo'
  const openModal = (photo: Photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    // Container principal com padding para não colar na navbar
    <div className="mt-10 bg-[#1a1a1a] mb-10">
      <div className="container mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold text-amber-50 mb-4">Nossas Fotos</h1>
        <p className="text-lg text-gray-400 mb-12">Aqui estão algumas fotos que capturam a essência da Caffè Cafeteria.</p>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className=" h-100 group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Sobreposição escura que aparece no hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
          onClick={closeModal} // Fecha ao clicar no fundo
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()} // Evita que o clique na imagem feche o modal
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.caption}
              width={1200}
              height={800}
              className="rounded-lg object-cover max-h-[90vh] w-full h-full"
            />
             <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-3 px-4 rounded-b-lg">
              {selectedImage.caption}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}