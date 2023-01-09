import { useState } from "react"
import './Home.scss'

function Home() {
    const [name, setName] = useState("qsfjokjqsfdjk")

    const onClickCreateGameHandler = () => {
        alert("Create Game")
    }

    const onClickJoinGameHandler = () => {
        alert("JoinGame")
    }

    return (
        <div className="HomePage">
            <button onClick={() => onClickCreateGameHandler()}> Créer une partie</button>
            <button onClick={() => onClickJoinGameHandler()}> Rejoindre une partie</button>
        </div>
    )
}

export default Home