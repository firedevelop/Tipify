interface PlansProps {
  t: any
}

const Plans = ({ t }: PlansProps) => {
  const plans = [
    {
      name: t('planes.basico'),
      price: t('planes.precioBasico'),
      features: [t('planes.feature1'), t('planes.feature2')],
      highlight: false,
    },
    {
      name: t('planes.premium'),
      price: t('planes.precioPremium'),
      features: [t('planes.feature1'), t('planes.feature2'), t('planes.feature3')],
      highlight: true,
    },
    {
      name: t('planes.pro'),
      price: t('planes.precioPro'),
      features: [t('planes.feature1'), t('planes.feature2'), t('planes.feature3'), t('planes.feature4')],
      highlight: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-2">
      <h2 className="text-3xl font-bold mb-4 text-center">{t.plans.titulo}</h2>
      <p className="mb-8 text-center text-stripe-gray3">{t.plans.descripcion}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`rounded-2xl border shadow p-6 flex flex-col items-center
              ${plan.highlight ? 'border-stripe-blue bg-stripe-blue/5' : 'border-stripe-gray2 bg-white'}
            `}
          >
            <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-stripe-blue' : 'text-stripe-dark'}`}>{plan.name}</h3>
            <div className="text-3xl font-black mb-4">{plan.price}</div>
            <ul className="mb-6 text-stripe-gray3 text-center space-y-2">
              {plan.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition-colors
                ${plan.highlight
                  ? 'bg-stripe-blue text-white hover:bg-stripe-blue/90'
                  : 'bg-stripe-gray2 text-stripe-dark hover:bg-stripe-blue hover:text-white'}
              `}
            >
              {plan.highlight ? t('planes.ctaPremium') : t('planes.cta')}
            </button>
          </div>
        ))}
      </div>
      <button className="mt-8 px-4 py-2 rounded-lg bg-stripe-blue text-white font-semibold transition-colors hover:bg-stripe-blue/90">
        {t.plans.cta}
      </button>
    </div>
  )
}

export default Plans