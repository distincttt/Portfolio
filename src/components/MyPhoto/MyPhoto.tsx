import { Img, ImgBoxWrapper, ImgWrapper } from './MyPhotoStyle'

export const MyPhoto = ({ src }: { src: string }): JSX.Element => {
   return (
      <ImgWrapper>
         <ImgBoxWrapper>
            <Img src={src} alt='Какой-то крассавчик' />
         </ImgBoxWrapper>
      </ImgWrapper>
   )
}
