import { useReducer, useState } from 'react'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { menuData } from './data/db'
import { initialState, orderReducer } from './reducers/order-reducer'

const categories = [
  { key: 'pizzas', label: 'Pizzas' },
  { key: 'entrantes', label: 'Entrantes' },
  { key: 'bebidas', label: 'Bebidas' },
  { key: 'postres', label: 'Postres' }
]

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  const [activeCategory, setActiveCategory] = useState('pizzas')

  return (
    <div className="min-h-screen bg-stripe-gray font-sans flex flex-col items-center justify-center py-8 px-2">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-3xl p-4 sm:p-10 lg:p-16 border border-stripe-gray2">
        <header className="flex flex-col items-center mb-12">
          <img
            src="/logo-tipify.svg"
            alt="Tipify Logo"
            className="h-16 mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl font-black text-stripe-dark mb-2 tracking-tight font-sans">
            Tipify
          </h1>
          <p className="text-lg text-stripe-gray3 text-center max-w-xl font-medium">
            Catálogo Restaurante online personalizado.
          </p>
        </header>

        <main className="grid gap-10 md:grid-cols-2">
          <section className="p-6 md:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2">
            <h2 className="text-2xl md:text-3xl font-bold text-stripe-dark mb-6">
              Menú
            </h2>
            <div className="flex gap-2 mb-6">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`px-4 py-2 rounded-lg font-semibold border transition-colors
                    ${activeCategory === cat.key
                      ? 'bg-stripe-blue text-white border-stripe-blue'
                      : 'bg-white text-stripe-blue border-stripe-blue hover:bg-stripe-blue/10'}
                  `}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {menuData[activeCategory].map((item) => (
                <MenuItem key={item.id} item={item} dispatch={dispatch} />
              ))}
            </div>
          </section>

          <section className="p-6 md:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2 flex flex-col justify-between">
            {state.order.length ? (
              <>
                <OrderContents order={state.order} dispatch={dispatch} />
                <TipPercentageForm dispatch={dispatch} tip={state.tip} />
                <OrderTotals
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center h-full">
                <p className="text-center text-stripe-gray3 text-lg">
                  La orden está vacía
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
      <p className="text-lg text-stripe-gray3 text-center max-w-xl font-medium mt-8">
        Plans | Contact us | Credits
      </p>
    </div>
  )
}

export default App
