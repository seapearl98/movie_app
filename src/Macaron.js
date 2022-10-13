import React from 'react'

// export default function Macaron(props) {  구조분해할당1
//     console.log(props)
//   return (
//     <div>
//         <h1>Macaron No.{props.propsid}</h1>
//         <h2>Macaron Name : {props.propsname}</h2>
//         <img src={props.propsimage} alt={props.propsname}/>
//     </div>
//   )
// }
// export default function Macaron(props) {  구조분해할당1
//     console.log(props)
//     const {propsname,propsid,propsimage} = props;
//   return (
//     <div>
//         <h1>Macaron No.{propsid}</h1>
//         <h2>Macaron Name : {propsname}</h2>
//         <img src={propsimage} alt={propsname}/>
//     </div>
//   )
// }
export default function Macaron({propsname,propsid,propsimage}) { //구조분해할당2
  return (
    <div>
        <h1>Macaron No.{propsid}</h1>
        <h2>Macaron Name : {propsname}</h2>
        <img src={propsimage} alt={propsname}/>
    </div>
  )
}
