export type MenuItem = {
    id: number
    name: string
    price: number
    image: string // <-- Añade esta línea
}

export type OrderItem = MenuItem & {
    quantity: number
}