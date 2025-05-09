import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  text-align: center;
  width: 256px;

  img {
    margin-top: -2.5rem;
    width: 120px;
    height: 120px;
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-label']};
    margin: 0.5rem 0 2rem;
  }

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin: 1rem 0;

  span {
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`
