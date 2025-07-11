import { useReducer, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { initialState, orderReducer } from './reducers/order-reducer'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import Credits from './pages/Credits'
import Compartir from './pages/Compartir'
import OrderConfirmation from './pages/OrderConfirmation'
import { menuData } from './data/menu' // Solo si necesitas varios idiomas
import type { MenuItemType } from './types/MenuItem'
import { translations } from './i18n/index'

const categories = [
  { key: 'pizzas', label: 'Pizzas' },
  { key: 'entrantes', label: 'Entrantes' },
  { key: 'bebidas', label: 'Bebidas' },
  { key: 'postres', label: 'Postres' }
]

// Cambia los códigos de idioma a formato estándar: 'es-ES', 'en-US', etc.
const LANGS = [
  { code: 'es-ES', flag: 'https://flagcdn.com/es.svg', label: 'Español' },
  { code: 'en-US', flag: 'https://flagcdn.com/us.svg', label: 'English' },
  { code: 'it-IT', flag: 'https://flagcdn.com/it.svg', label: 'Italiano' },
  { code: 'fr-FR', flag: 'https://flagcdn.com/fr.svg', label: 'Français' },
  { code: 'de-DE', flag: 'https://flagcdn.com/de.svg', label: 'Deutsch' },
] as const

// Usa los nuevos códigos en tu lógica de idioma
type LangCode = typeof LANGS[number]['code']

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  const [activeCategory, setActiveCategory] = useState('pizzas')
  const [lang, setLang] = useState<LangCode>('es-ES')

  const currentMenu = menuData[lang]?.[activeCategory] || []
  const t = translations[lang]

  return (
    <Router>
      <div className="min-h-screen bg-stripe-gray font-sans flex flex-col items-center justify-center py-8 px-2">
        {/* --- Menú de navegación superior --- */}
        <nav className="w-full max-w-6xl mb-8 flex items-center justify-center gap-4 text-lg font-medium">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block align-middle mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            {t.home}
          </Link>
          |
          <Link to="/compartir" className="hover:underline flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block align-middle mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>
            {t.share}
          </Link>
          |
          <Link to="/plans" className="hover:underline">{t.plans}</Link>
          |
          <Link to="/contact" className="hover:underline">{t.contact}</Link>
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
              {t.catalogSubtitle}
            </p>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <main className="grid gap-10 md:grid-cols-2">
                  <section className="p-6 md:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2">
                    <h2 className="text-2xl md:text-3xl font-bold text-stripe-dark mb-6 flex items-center gap-3">
                      {t.menu}
                      <span className="flex gap-2 ml-2">
                        {LANGS.map(l => (
                          <span
                            key={l.code}
                            className={`rounded-full bg-white shadow border w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-105 transition ${lang === l.code ? 'ring-2 ring-stripe-blue' : ''}`}
                            style={{ backgroundImage: `url('${l.flag}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            title={l.label}
                            onClick={() => setLang(l.code)}
                          />
                        ))}
                      </span>
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
                          {t[cat.key]}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {currentMenu.map((item: MenuItemType) => (
                        <MenuItem key={item.id} item={item} dispatch={dispatch} />
                      ))}
                    </div>
                  </section>

                  <section className="p-6 md:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2 flex flex-col justify-between">
                    {state.order.length ? (
                      <>
                        <OrderContents order={state.order} dispatch={dispatch} t={t} />
                        <TipPercentageForm dispatch={dispatch} tip={state.tip} t={t} />
                        <OrderTotals
                          order={state.order}
                          tip={state.tip}
                          dispatch={dispatch}
                        />
                      </>
                    ) : (
                      <div className="flex flex-1 items-center justify-center h-full">
                        <p className="text-center text-stripe-gray3 text-lg">
                          {t.emptyOrder}
                        </p>
                      </div>
                    )}
                  </section>
                </main>
              }
            />
            <Route path="/plans" element={<Plans t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/credits" element={<Credits t={t} />} />
            <Route path="/compartir" element={<Compartir t={t} />} />
            <Route path="/confirmacion" element={<OrderConfirmation t={t} />} />
          </Routes>
        </div>
        {/* Footer solo para Credits */}
        <p className="text-lg text-stripe-gray3 text-center max-w-xl font-medium mt-8 flex items-center justify-center gap-4">
          <Link to="/credits" className="hover:underline">{t.credits}</Link>
        </p>
      </div>
    </Router>
  )
}

export default App
