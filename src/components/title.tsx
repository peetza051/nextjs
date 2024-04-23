import React from 'react'
interface PropsType {
    title : string
}
const Title : React.FC<PropsType> = (props) => {

  return (
    <h1 className=' text-center text-6xl my-auto text-sky-400	 '>{props.title}

      
    </h1>
  )
}

export default Title
