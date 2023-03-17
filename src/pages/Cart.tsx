import { Bank, CreditCard, CurrencyCircleDollar, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext } from "react";
import { Header } from "../components/Header";
import { ProductCart } from "../components/ProductCart";
import { CoffeesContext } from "../contexts/Coffees";
import { useForm, Controller} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useNavigate } from "react-router-dom";

const formValidationSchema = zod.object({
  CEP: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  payment: zod.string()
})

export function Cart() {

  const { cart, finishCart } = useContext(CoffeesContext)
  const totalPrice = (Math.round(cart.totalPrice * 100) / 100).toFixed(2)
  const totalPriceIncludeTax = (Math.round((cart.totalPrice + 3) * 100) / 100).toFixed(2)
  const navigate = useNavigate()
  const { register, handleSubmit, control } = useForm({
    resolver: zodResolver(formValidationSchema),
  })

  function handleSubmitCart(data: any) {
    finishCart(data)
    console.log(data)
    navigate('/deliverySuccess')
  }

  return (
    <div className="flex justify-center flex-1 flex-col pl-40 pr-40">
      <Header />
      <form onSubmit={handleSubmit(handleSubmitCart)}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-base-subtitle text-lg font-baloo mb-4">Complete seu pedido</h1>
            <div className="flex justify-center  bg-base-card p-10 rounded-md flex-col w-[640px]">
              <div className="flex flex-row">
                <MapPinLine size={22} color={'#C47F17'}/>
                <div className="ml-2">
                  <h1 className="text-base-subtitle text-base">
                    Endereço de entrega
                  </h1>
                  <span className="text-base-text text-sm">
                    Informe o endereço onde deseja receber seu pedido
                  </span>
                </div>
              </div>

              <div className="flex mt-8 gap-3 flex-col">
                  <input className="w-52 rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0"
                    placeholder="CEP"
                    id="CEP"
                    {...register('CEP')}
                  />
                  <input className="w-full rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0"
                    placeholder="Rua"
                    id="rua"
                    {...register('rua')}
                  />
                  <div className="flex ">
                    <input className="w-52 rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0"
                      placeholder="Número"
                      id="numero"
                    {...register('numero')}
                    />
                    <input className="w-full rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0 ml-3"
                      placeholder="Complemento"
                      id="complemento"
                      {...register('complemento')}
                    />
                  </div>
                  <div className="flex ">
                    <input className="w-52 rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0"
                      placeholder="Bairro"
                      id="bairro"
                      {...register('bairro')}
                    />
                    <input className="w-full rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0 ml-3"
                      placeholder="Cidade"
                      id="cidade"
                      {...register('cidade')}
                    />
                    <input className="w-16 rounded border-2 border-base-button bg-base-input p-3 h-11 placeholder-base-label focus:outline-0 ml-3"
                      placeholder="UF"
                      id="uf"
                      {...register('uf')}
                    />
                  </div>
              </div>
            </div>
            <div className="flex justify-center  bg-base-card p-10 rounded-md flex-col w-[640px] mt-3 mb-40">
              <div className="flex flex-row">
                <CurrencyDollar size={22} color={'#8047F8'}/>
                <div className="ml-2">
                  <h1 className="text-base-subtitle text-base">
                    Pagamento
                  </h1>
                  <span className="text-base-text text-sm">
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                  </span>
                </div>
              </div>
              <Controller 
                control={control}
                {...register('payment')}
                render={({ field }) => {
                  return (
                    <RadioGroup.Root className="flex flex-row mt-8 justify-center items-center gap-3" onValueChange={field.onChange} value={field.value}>
                        <RadioGroup.Item className="w-44 rounded bg-base-input p-3 h-13 text-xs flex flex-row justify-center items-center radix-state-checked:bg-purple-light radix-state-checked:border-purple-normal border-2" value={'Cartão de Crédito'}>
                          <CreditCard size={16} color={'#8047F8'} className="mr-3"/>
                          CARTÃO DE CRÉDITO
                        </RadioGroup.Item>
                        <RadioGroup.Item className="w-44 rounded bg-base-input p-3 h-13 text-xs flex flex-row justify-center items-center radix-state-checked:bg-purple-light radix-state-checked:border-purple-normal border-2" value={'Cartão de Débito'}>
                          <Bank size={16} color={'#8047F8'} className="mr-3"/>
                          CARTÃO DE DÉBITO
                        </RadioGroup.Item>
                        <RadioGroup.Item className="w-44 rounded bg-base-input p-3 h-13 text-xs flex flex-row justify-center items-center radix-state-checked:bg-purple-light radix-state-checked:border-purple-normal border-2" value={'Dinheiro'}>
                          <Money size={16} color={'#8047F8'} className="mr-3"/>
                          DINHEIRO
                        </RadioGroup.Item>
                    </RadioGroup.Root>
                  )
                }}
              />
            </div>
          </div>
          <div className="flex flex-col ml-14">
            <h1 className="text-base-subtitle text-lg font-baloo mb-4">Cafés selecionados</h1>
            <div className="flex flex-col p-10 bg-base-card rounded-tr-[44px] rounded-tl-[6px] rounded-bl-[44px] rounded-br-[6px] w-[450px] gap-6">
              {cart.items.map(item => (
                <ProductCart {...item} key={item.productName}/>
              ))}
              <div className="flex justify-between">
                <span className="text-base-text text-sm">Total de itens</span>
                <span className="text-base-text text-base">R$ {totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-text text-sm">Entrega</span>
                <span className="text-base-text text-base">R$ 3.00</span>
              </div>
              <div className="flex justify-between font-bold text-base-subtitle text-xl">
                <span>Total</span>
                <span>{totalPriceIncludeTax}</span>
              </div>
              <button className="flex justify-center items-center rounded bg-yellow-normal h-11" type='submit'>
                <span className="text-xs text-white font-bold">
                  CONFIRMAR PEDIDO
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}