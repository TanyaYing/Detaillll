import "./right1.css"
import { Img } from "../../.././Data"
import { useState } from "react"

export default function Right1() {
  const [src, setSrc] = useState(Img[4])
  const clickHandler = (myIndex) => {
    setSrc(Img[myIndex])
  }

  return (
    <div className="right1">
      <div className="right1Top">
        <img src={src.imgUrl} alt="" className= "right1TopImg" />
      </div>
      <div className="right1Bottom">
        <div className="right1BottomBox">
        <img src="assets/img/21.JPG" alt="" className= "right1BottomImg" 
         key={Img[4].id}
         onClick = { () => clickHandler(4)}
         />
         </div>
         <div className="right1BottomBox">
         <img src="assets/img/21.JPG" alt="" className= "right1BottomImg" 
         key={Img[5].id}
         onClick = { () => clickHandler(4)}/>
       </div>
       <div className="right1BottomBox">
         <img src="assets/img/22.JPG" alt="" className= "right1BottomImg"
         key={Img[6].id}
         onClick = { () => clickHandler(4)} />
       </div>
      </div>
    </div>
  )
}
