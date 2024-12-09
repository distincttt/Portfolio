import styled from 'styled-components'

import { I } from '../../../constant/style/boxicon'
import { PResume } from '../ResumeStyle'

export const Ul = styled.ul`
   padding: 0.3rem;
   list-style: none;
`
export const Li = styled.li`
   padding-top: 0.3rem;
`
export const PResumeEducation = styled(PResume)`
   font-size: 1.4rem;
`
export const LabelResumeEducation = styled.label`
   display: flex;
   gap: 0.5rem;
`
export const IResumeEducation = styled(I)`
   position: relative;
   top: 0.3rem;
`
