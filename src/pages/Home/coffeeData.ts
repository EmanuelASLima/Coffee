
import type { CoffeeProps } from '../../types/Coffee'


export const coffeeList: CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    image: new URL('../../assets/Coffeeimg/expTrad.svg', import.meta.url).href
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    image: 'expAmer.svg',
  },
  // ...adicione mais cafés conforme o layout
]
