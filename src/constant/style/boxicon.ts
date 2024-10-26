import styled from 'styled-components'
import { IconName } from 'boxicons'

export const I = styled.i.attrs<{ className: IconName }>(({ className }) => ({
   className: className,
}))``
