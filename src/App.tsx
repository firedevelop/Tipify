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
  const [showLangs, setShowLangs] = useState(false)

  const currentMenu = menuData[lang]?.[activeCategory] || []
  const t = translations[lang]

  return (
    <Router>
      <div className="min-h-screen bg-stripe-gray font-sans flex flex-col items-center justify-center py-8 px-2">
        {/* --- Menú de navegación superior --- */}
        <nav className="w-full px-2 sm:px-4 md:px-8 lg:px-16 mb-8 flex flex-wrap items-center justify-between text-base sm:text-lg font-medium">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link to="/" className="hover:underline flex items-center gap-1">
              {/* ...icono y texto... */}
              {t.home}
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/compartir" className="hover:underline flex items-center gap-1">
              {/* ...icono y texto... */}
              {t.share}
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/plans" className="hover:underline">{t.plans}</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/contact" className="hover:underline">{t.contact}</Link>
          </div>
          {/* Dropdown personalizado de idiomas */}
          <div className="relative">
            <button
              className="flex items-center border rounded px-2 py-1 bg-white text-stripe-blue font-semibold gap-2"
              onClick={() => setShowLangs(v => !v)}
            >
              <img
                src={LANGS.find(l => l.code === lang)?.flag}
                alt=""
                className="w-5 h-5 rounded-full object-cover"
                style={{ background: "#fff" }}
              />
              {LANGS.find(l => l.code === lang)?.label}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLangs && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10 min-w-[120px]">
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    className={`flex items-center w-full px-3 py-2 gap-2 hover:bg-stripe-blue/10 text-left ${lang === l.code ? 'font-bold text-stripe-blue' : ''}`}
                    onClick={() => {
                      setLang(l.code)
                      setShowLangs(false)
                    }}
                  >
                    <img
                      src={l.flag}
                      alt={l.label}
                      className="w-5 h-5 rounded-full object-cover"
                      style={{ background: "#fff" }}
                    />
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
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
                <main className="grid gap-6 md:gap-10 md:grid-cols-2">
                  <section className="p-4 sm:p-6 md:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2">
                    <h2 className="text-2xl md:text-3xl font-bold text-stripe-dark mb-6 flex items-center gap-3">
                      {t.menu}
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

                  <section className="p-4 sm:p-6 md:p-8 bg-stripe-gray rounded-2xl shadow hover:shadow-lg transition-shadow border border-stripe-gray2 flex flex-col justify-between">
                    {state.order.length ? (
                      <>
                        <OrderContents order={state.order} dispatch={dispatch} t={t} />
                        <TipPercentageForm dispatch={dispatch} tip={state.tip} t={t} />
                        <OrderTotals
                          order={state.order}
                          tip={state.tip}
                          dispatch={dispatch}
                        />
                        <button className="w-full sm:w-auto bg-stripe-blue text-white px-4 py-2 rounded mt-4">
                          Guardar orden
                        </button>
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
        <footer className="w-full px-2 sm:px-4 md:px-8 lg:px-16 mt-8 flex flex-col items-center">
          <div className="flex items-center gap-3 text-lg text-stripe-gray3 font-medium">
            <Link to="/credits" className="hover:underline">{t.credits}</Link>
            {/* ...otros enlaces o iconos... */}
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
