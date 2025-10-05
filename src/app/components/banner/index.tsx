"use client"
import React from "react"

export default function Banner() {
  return (
    <div className="relative w-full h-[500px] md:h-[520px] bg-banner bg-center bg-cover pt-20">
      <header className="flex items-center justify-end h-full w-full">
        <div className="max-w-xl text-right px-6 mr-40">
          <h1 className="text-white md:text-4xl font-extralight">
            Café é abraço em forma de aroma.
          </h1>
          <p className="mt-4 text-white md:text-lg">
            Desfrute do melhor café da cidade, preparado com grãos selecionados e muito carinho.
          </p>
        </div>
      </header>
    </div>
  )
}
