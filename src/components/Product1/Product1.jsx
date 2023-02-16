import "./product1.css"
import Left1 from "./left1/Left1"
import Right1 from "./right1/Right1"


export default function Product1() {
  return (
    <div className="product1">
      
      <div className="product1-wrapper">
        <Left1 />
       <Right1 />
      </div>   
    </div>
  )
}
