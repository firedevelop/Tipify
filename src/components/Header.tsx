export default function Header() {
  return (
    <header className="bg-primary py-5">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="w-32">
          <img src="/logo-tipify-4.svg" alt="Logotipo de Tipify" />
        </div>
        <h1 className="text-center text-4xl font-black text-white uppercase">
          Calculadora
        </h1>
      </div>
    </header>
  )
}