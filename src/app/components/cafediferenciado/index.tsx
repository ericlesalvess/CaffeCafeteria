"use client"
import { FaCoffee, FaHandHoldingHeart, FaLeaf, FaMugHot } from "react-icons/fa"
import React from "react"

export default function CafeDiferenciado() {
  return (
    <section className="bg-cafediferenciado py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extralight text-center text-white mb-8">
          O Ritual do Café Gourmet: Sabor que Vai Além do Gole
        </h2>

        <p className="text-white text-lg text-center mb-12 max-w-3xl mx-auto">
          Cada bebida é preparada como uma obra de arte. Do espresso encorpado ao cappuccino cremoso, usamos técnicas refinadas, grãos selecionados e um toque de carinho em cada etapa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img
              src="graos.jpg"
              alt="Grãos de café"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-5">
              <FaLeaf className="text-2xl text-amber-700 mb-2" />
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">Grãos de Origem</h3>
              <p className="text-neutral-600 text-sm">
                Grãos 100% arábica, torrados artesanalmente para preservar notas de chocolate e frutas secas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img
              src="/preparo1.jpg"
              alt="Preparo artesanal"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-5">
              <FaCoffee className="text-2xl text-amber-700 mb-2" />
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">Preparo Artesanal</h3>
              <p className="text-neutral-600 text-sm">
                Métodos como espresso, V60 e prensa francesa, com precisão e cuidado em cada detalhe.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img
              src="/especiaria.png"
              alt="Ingredientes naturais"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-5">
              <FaMugHot className="text-2xl text-amber-700 mb-2" />
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">Ingredientes Naturais</h3>
              <p className="text-neutral-600 text-sm">
                Leite fresco, especiarias naturais e xaropes artesanais. Sem conservantes, só sabor.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img
              src="/bairistas.jpg"
              alt="Barista apaixonado"
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-5">
              <FaHandHoldingHeart className="text-2xl text-amber-700 mb-2" />
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">Baristas Apaixonados</h3>
              <p className="text-neutral-600 text-sm">
                Nossa equipe entende o café como arte. Cada xícara é feita com atenção e afeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
