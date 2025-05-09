
import { IntroSection, CoffeeListContainer, HomeContainer } from './styles'
import introImg from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { coffeeList } from './coffeeData'
import { CoffeeCard } from '../../components/CoffeeCard'



export function Home() {
  return (
    <HomeContainer>
      <IntroSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <div className="benefits">
            <div><ShoppingCart weight="fill" /> Compra simples e segura</div>
            <div><Package weight="fill" /> Embalagem mantém o café intacto</div>
            <div><Timer weight="fill" /> Entrega rápida e rastreada</div>
            <div><Coffee weight="fill" /> O café chega fresquinho até você</div>
          </div>
        </div>

        <img src={introImg} alt="Imagem de café" />
      </IntroSection>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
           {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
        </div>

      </CoffeeListContainer>
    </HomeContainer>
  )
}
