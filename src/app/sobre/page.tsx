"use client";
import React from "react";

export default function Sobre() {
  return (
    // 1. Aplicamos a nova classe de background aqui.
    // Esta div agora controla a imagem de fundo.
    <div className="bg-bannersobre mt-0">
      
      {/* 2. Container para o conteúdo de texto */}
      {/* A classe 'relative' e 'z-10' colocam o texto ACIMA da sobreposição escura */}
      <div className=" mt-20 relative z-10 mx-auto max-w-4xl py-24 px-6 text-center">
        
        
        {/* Deixei o texto um pouco menor (text-lg) para melhor leitura */}
        <div className="space-y-6 text-lg text-gray-200 text-justify">
          <p>
            A Caffé Cafeteria nasceu do desejo de transformar o simples ato de tomar café em uma experiência memorável. Fundada por Felipe Roldão, apaixonado por aromas intensos e conversas sinceras, nossa cafeteria é o reflexo de uma ideia simples: criar um espaço onde cada pessoa se sinta acolhida, respeitada e inspirada.
          </p>
          <p>
            Desde o primeiro grão moído até o último sorriso do dia, tudo aqui é feito com propósito. Acreditamos que o café tem o poder de unir pessoas, despertar ideias e suavizar até os dias mais corridos. Por isso, escolhemos trabalhar com ingredientes de alta qualidade, fornecedores locais e uma equipe que compartilha da mesma paixão por servir bem.
          </p>
          <p>
            Nosso ambiente foi pensado para ser mais que bonito — ele é funcional, confortável e cheio de personalidade. Cada detalhe, da iluminação ao som ambiente, foi escolhido para que você se sinta em casa, seja para uma pausa rápida ou para horas de conversa com amigos.
          </p>
          <p>
            Mais do que vender café, queremos cultivar relações. Aqui, cada cliente é tratado como parte da nossa história. E essa história está em constante evolução, guiada pelo compromisso com a excelência, a empatia e o desejo de fazer a diferença — nem que seja só pelo tempo de uma xícara.
          </p>
          <p className="font-semibold text-center pt-4">
            Seja bem-vindo à Caffé Cafeteria. Seu lugar para desacelerar, saborear e se reconectar.
          </p>
        </div>
      </div>
    </div>
  );
}