export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-2">¿Tienes dudas o sugerencias? Escríbenos:</p>
      <form className="space-y-4">
        <input className="w-full border rounded p-2" type="text" placeholder="Tu nombre" />
        <input className="w-full border rounded p-2" type="email" placeholder="Tu email" />
        <textarea className="w-full border rounded p-2" placeholder="Mensaje" rows={4}></textarea>
        <button className="bg-stripe-blue text-white px-4 py-2 rounded" type="submit">Enviar</button>
      </form>
    </div>
  )
}