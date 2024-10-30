import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(Props) => Props.theme.corPrincipal};
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
