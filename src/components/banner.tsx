import React from 'react'

interface PropsType {
    imageUrl: string
}
//https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg
const Banner : React.FC<PropsType> = (props) => {
  return (
    <div>
    <img 
     className =" w-full h-[700px] object-cover object-center " 
     src={props.imageUrl} alt="cat said maow"/>
    </div>
  )
}

export default Banner
