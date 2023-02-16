import "./right2.css"
import { Img } from "../../../Data"
import { useState } from "react"

export default function Right2() {
  const [src, setSrc] = useState(Img[6])
  const clickHandler = (myIndex) => {
    setSrc(Img[myIndex])
  }

  return (
    <div className="right2">
      <div className="rightTop">
        <img src={src.imgUrl} alt="" className= "rightTopImg" />
      </div>
      <div className="rightBottom">
        <div className="rightBottomBox">
        <img src="assets/img/31.JPG" alt="" className= "rightBottomImg" 
         key={Img[6].id}
         onClick = { () => clickHandler(6)}
         />
         </div>
         <div className="rightBottomBox">
         <img src="assets/img/32.JPG" alt="" className= "rightBottomImg" 
         key={Img[7].id}
         onClick = { () => clickHandler(6)}/>
       </div>
         
      </div>
    </div>
  )
}
