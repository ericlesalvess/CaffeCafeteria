"use client"
import React from "react"
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 flex justify-center items-center w-full">
      <div className=" w-full h-full  max-w-6xl mx-auto py-12 px-6 lg:px-8">
        <div className="ml-50 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Slogan */}
          <div className="mb-6 md:mb-0">
            <span className="text-amber-50 text-2xl">Caffé</span>
            <span className="text-amber-700 text-2xl">Cafeteria</span>
            <p className="mt-2 text-sm text-neutral-400">O seu refúgio diário.</p>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">Contato</h3>
            <ul className="mt-4 space-y-2 text-base">
              <li><p>Rua do Café, 123</p></li>
              <li><p>cidade@estado.com</p></li>
              <li><p>(11) 98765-4321</p></li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">Receba novidades</h3>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-30 px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button
                type="submit"
                className=" w-30 mt-2 sm:mt-0 sm:ml-2 px-4 py-2 rounded-md bg-amber-700 text-white font-semibold hover:bg-amber-600 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Seção inferior: Copyright e Redes Sociais */}
        <div className="mt-5 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Caffè Cafeteria. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaTiktok size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}