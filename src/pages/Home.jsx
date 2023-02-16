import "./home.css"
import Left from "../components/left/Left"
import Right from "../components/right/Right"


export default function Home() {
  return (
    <div className="home">
      
      <div className="home-wrapper">
        <Left />
       <Right />
      </div>   
    </div>
  )
}
