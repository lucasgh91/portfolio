import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(Props) => Props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(Props) => Props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(Props) => Props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
