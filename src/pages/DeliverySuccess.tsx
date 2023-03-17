import { Header } from "../components/Header";
import Illustration from '../assets/Illustration.svg'
import Navigation from '../assets/navigation.svg'
import Timer from '../assets/timer.svg'
import Money from '../assets/money.svg'
import { useContext, useEffect } from "react";
import { CoffeesContext } from "../contexts/Coffees";

export function DeliverySuccess() {

  const { cart } = useContext(CoffeesContext)

  return (
    <div className="flex justify-center flex-1 flex-col">
      <Header />
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <span className="font-baloo text-2xl text-yellow-dark">
            Uhu! Pedido confirmado!
          </span>
          <span className="text-xl">
            Agora é só aguardar que logo o café chegará até você
          </span>
       
         <div className="p-[2px] w-66 h-34 rounded-tr-[6px] rounded-tl-[36px] rounded-br-[36px] rounded-bl-[6px] bg-gradient-to-r from-yellow-normal via-yellow-dark to-purple-normal mt-10">
            <div className="h-full w-full bg-white rounded-tr-[4px] rounded-tl-[34px] rounded-br-[34px] rounded-bl-[4px] p-10">
              <div className="flex flex-row">
                <img src={Navigation}/>
                <div className="flex flex-col ml-4">
                  <span>
                    Entrega em <strong>{cart.infoPayment?.rua}, {cart.infoPayment?.numero}</strong>
                  </span>
                  <span>
                    {cart.infoPayment?.bairro} - {cart.infoPayment?.cidade}, {cart.infoPayment?.uf}
                  </span>
                </div>
              </div>

              <div className="flex flex-row mt-6">
                <img src={Timer}/>
                <div className="flex flex-col ml-4">
                  <span>
                    Previsão de entrega
                  </span>
                  <span>
                    <strong>20 min - 30 min</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-row mt-6">
                <img src={Money}/>
                <div className="flex flex-col ml-4">
                  <span>
                    Pagamento na entrega
                  </span>
                  <span>
                    <strong>{cart.infoPayment?.payment}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[293] w-[492 ml-20">
          <img src={Illustration}/>
        </div>
      </div>
      
    </div>
  )
}