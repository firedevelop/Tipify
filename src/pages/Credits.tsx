interface CreditsProps {
  t: any
}

const Credits = ({ t }: CreditsProps) => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">Créditos</h2>
      <p>Desarrollado por tu equipo. Imágenes de Unsplash y Pexels. Tipify © 2025.</p>
    </div>
  )
}

export default Credits