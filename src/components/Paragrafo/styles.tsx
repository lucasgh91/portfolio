import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + 'px' : '14px')};
  color: ${(Props) =>
    Props.tipo === 'principal'
      ? Props.theme.corPrincipal
      : Props.theme.corSecundaria};
  line-height: 22px;
`
