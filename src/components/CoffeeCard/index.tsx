import type {  CoffeeProps } from '../../types/Coffee'
import { CardContainer, TagsContainer } from './styles'

interface Props {
  coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: Props) {
  return (
    <CardContainer>
      <img src={`/src/assets/${coffee.image}`} alt={coffee.name} />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <strong>R$ {coffee.price.toFixed(2)}</strong>
    </CardContainer>
  )
}
