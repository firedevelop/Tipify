import { useReducer, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { menuData } from './data/db'
import { initialState, orderReducer } from './reducers/order-reducer'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import Credits from './pages/Credits'
import Compartir from './pages/Compartir'

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
    <Router>
      <div className="min-h-screen bg-stripe-gray font-sans flex flex-col items-center justify-center py-8 px-2">
        {/* --- Menú de navegación superior --- */}
        <nav className="w-full max-w-6xl mb-8 flex items-center justify-center gap-4 text-lg font-medium">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block align-middle mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Inicio
          </Link>
          |
          <Link to="/compartir" className="hover:underline flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block align-middle mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>
            Compartir
          </Link>
          |
          <Link to="/plans" className="hover:underline">Plans</Link>
          |
          <Link to="/contact" className="hover:underline">Contact us</Link>
        </nav>
        {/* --- Fin menú navegación superior --- */}

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

            <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/compartir" element={<Compartir />} />
            </Routes>
        </div>
        {/* Footer solo para Credits */}
        <p className="text-lg text-stripe-gray3 text-center max-w-xl font-medium mt-8 flex items-center justify-center gap-4">
          <Link to="/credits" className="hover:underline">Credits</Link>
        </p>
      </div>
    </Router>
  )
}

export default App
