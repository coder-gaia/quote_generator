import { styled } from 'styled-components'
// import GlobalStyle from './global'

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 200px;
  font-family: 'Lemon', sans serif;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const QuoteContainer = styled.div`
  width: 500px;
  text-align: center;
  border: none;
  padding: 20px;
  border-bottom: 4px solid var(--secondary-color);
  border-radius: 8px;
  font-weight: bold;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 300px;
    margin-top: 30px;
  }
`

export const P = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: var(--main-color);
  margin: 10px;
  font-style: italic;
`

export const QuoteBtn = styled.button`
  background-color: var(--main-color);
  color: #fff;
  padding: 14px 20px;
  margin: 20px auto;
  border: none;
  border-radius: 8px;
  border-bottom: 4px solid var(--secondary-color);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px
    padding: 10px 15px;
  }
`
