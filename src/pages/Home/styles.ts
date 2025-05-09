import styled from 'styled-components'



export const HomeContainer = styled.main`
  padding: 2rem 10rem;
`


export const IntroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors['base-title']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-top: 1rem;
  }


  .benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
    }

    svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }




  img {
    width: 400px;
    height: auto;
  }
`



export const CoffeeListContainer = styled.section`
  margin-top: 4rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
