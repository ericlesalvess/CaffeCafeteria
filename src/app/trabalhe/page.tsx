'use client';
import React from 'react';

export default function Trabalhe() {
  return (
    // Mantivemos o layout flex para fixar o footer no final da página.
    <div className="mt-25 mb-10 bg-[#1a1a1a] flex flex-col">
      {/* 
        A classe 'flex-grow' faz esta seção crescer e empurrar o footer para baixo.
        A alteração principal foi remover o 'pb-24' para eliminar o espaço extra.
      */}
      <div className="container mx-auto px-4 pt-16 text-center flex-grow">
        <h1 className="text-4xl font-bold text-amber-50 mb-4">Trabalhe Conosco</h1>
        <p className="text-lg text-gray-400 mb-12">
          Quer fazer parte da nossa equipe? Adoramos pessoas apaixonadas por café!
        </p>

        {/* O formulário mantém a mesma aparência e largura */}
        <div className="max-w-3xl mx-auto text-left">
          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                // Os campos continuam com o mesmo tamanho e estilo
                className="w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 text-lg"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 text-lg"
                placeholder="voce@email.com"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                Anexe seu currículo (PDF)
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
                // O botão de anexo de arquivo também não foi alterado
                className="w-full text-gray-400 text-lg file:mr-4 file:py-3 file:px-6 file:rounded-md file:border-0 file:text-base file:font-semibold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
              />
            </div>
            
            <div className="text-center pt-6">
              <button
                type="submit"
                // E o botão de envio continua igual
                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 py-4 px-12 text-lg font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Enviar Candidatura
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}