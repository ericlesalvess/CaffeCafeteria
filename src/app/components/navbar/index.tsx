'use client'

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // A <nav> principal agora ocupa 100% da tela, aplicando o fundo e a sombra.
        // As classes de limitação de largura foram removidas daqui.
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-sm shadow-md">
            
            {/* Este 'div' interno funciona como um container que limita e centraliza o conteúdo. */}
            <div className="w-full max-w-screen-xl mx-auto px-8 py-6 flex justify-between items-center">

                {/* --- Início do Conteúdo da Navbar --- */}

                {/* 1. Logo (Esquerda) */}
                <Link href="/">
                    <div className="text-3xl font-condensed tracking-wider">
                        <span className="text-amber-50">Caffé</span><span className="text-amber-700">Cafeteria</span>
                    </div>
                </Link>

                {/* 2. Menu para Desktop (Centro) */}
                {/* A centralização é garantida pelo 'justify-between' do container pai, que distribui o espaço. */}
                <ul className="hidden md:flex space-x-8 text-amber-50">
                    <li><Link href="/" className="hover:text-amber-700 transition-colors duration-300 font-medium">Home</Link></li>
                    <li><Link href="/sobre" className="hover:text-amber-700 transition-colors duration-300 font-medium">Sobre</Link></li>
                    <li><Link href="/fotos" className="hover:text-amber-700 transition-colors duration-300 font-medium">Fotos</Link></li>
                    <li><Link href="/encontrar" className="hover:text-amber-700 transition-colors duration-300 font-medium">Como me encontrar?</Link></li>
                    <li><Link href="/trabalhe" className="hover:text-amber-700 transition-colors duration-300 font-medium">Trabalhe Conosco</Link></li>
                </ul>

                {/* 3. Botão do Menu Mobile (Direita) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-amber-50 text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* --- Fim do Conteúdo da Navbar --- */}
            </div>

            {/* Menu Dropdown para Mobile (continua o mesmo) */}
            <div className={`
                absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-gray-700/50
                md:hidden transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'transform scale-y-100 origin-top' : 'transform scale-y-0 origin-top'}
            `}>
                <ul className="flex flex-col items-center space-y-6 text-amber-50 py-8">
                    <li><Link href="/" onClick={toggleMenu} className="hover:text-amber-700 transition-colors duration-300 font-medium">Home</Link></li>
                    <li><Link href="/sobre" onClick={toggleMenu} className="hover:text-amber-700 transition-colors duration-300 font-medium">Sobre</Link></li>
                    <li><Link href="/fotos" onClick={toggleMenu} className="hover:text-amber-700 transition-colors duration-300 font-medium">Fotos</Link></li>
                    <li><Link href="/encontrar" onClick={toggleMenu} className="hover:text-amber-700 transition-colors duration-300 font-medium">Como me encontrar?</Link></li>
                    <li><Link href="/trabalhe" onClick={toggleMenu} className="hover:text-amber-700 transition-colors duration-300 font-medium">Trabalhe Conosco</Link></li>
                </ul>
            </div>
        </nav>
    );
}