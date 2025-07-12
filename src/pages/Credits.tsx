interface CreditsProps {
  t: any
}

const Credits = ({ t }: CreditsProps) => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">{t.creditsTitulo}</h2>
      <p>{t.creditsDescripcion}</p>
    </div>
  )
}

export default Credits