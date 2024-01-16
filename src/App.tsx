import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { QuoteContainer, QuoteBtn, Wrapper, P, Title } from './styledComponents'
import GlobalStyle from './global'

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchQuote = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.quotable.io/random')
      setQuote(response.data.content)
    } catch (error) {
      console.error('Error while fetching the quote: ', error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const generateQuote = () => {
    fetchQuote()
  }

  return (
    <>
      <GlobalStyle />
      <Title>Daily Quote</Title>
      <Wrapper>
        <QuoteContainer>
          {loading ? <p>Loading...</p> : <P>{quote}</P>}
        </QuoteContainer>
      </Wrapper>
      <QuoteBtn onClick={generateQuote}>Generate new quote</QuoteBtn>
    </>
  )
}

export default App
