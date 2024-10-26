import { Img, ImgBoxWrapper, ImgWrapper } from './MyPhotoStyle'

export const MyPhoto = ({ page }: { page: string }): JSX.Element => {
   return (
      <ImgWrapper>
         <ImgBoxWrapper $page={page}>
            <Img src='images/myPhoto2.png' alt='Какой-то крассавчик' />
         </ImgBoxWrapper>
      </ImgWrapper>
   )
}
