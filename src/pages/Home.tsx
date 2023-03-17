import { Header } from "../components/Header";
import Banner from '../assets/banner.svg'
import { useContext, useEffect } from "react";
import { CoffeesContext } from "../contexts/Coffees";
import { ProductCard } from "../components/ProductCard";

export function Home() {

  const { getCoffees, coffees } = useContext(CoffeesContext)
  
  useEffect(() => {
    getCoffees()
  }, [])

  return (
    <div className="flex justify-center flex-1 flex-col">
      <Header />
      <img src={Banner} />
      <div className="pl-40 pr-40 mb-14">
        <h1 className="text-base-subtitle text-3xl font-baloo mb-14">Nossos cafés</h1>
        <div className='flex gap-8 flex-wrap'>
          {coffees.length > 0 && coffees.map(coffee => (
            <ProductCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </div>
    </div>
  )
}