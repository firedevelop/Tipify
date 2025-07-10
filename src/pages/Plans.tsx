interface PlansProps {
  t: any // O el tipo específico de tus traducciones
}

const Plans = ({ t }: PlansProps) => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">{t('planes.titulo')}</h2>
      <p className="mb-2">{t('planes.descripcion')}</p>
      <ul className="list-disc pl-6">
        <li>{t('planes.basico')}</li>
        <li>{t('planes.premium')}</li>
        <li>{t('planes.empresarial')}</li>
      </ul>
    </div>
  )
}

export default Plans