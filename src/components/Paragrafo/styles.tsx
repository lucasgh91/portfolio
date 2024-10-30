import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(Props) => (Props.tipo === 'principal' ? '#282A35' : '#949494')};
  line-height: 22px;
`
