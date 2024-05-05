import Card from "@/app/ui/comp/card/card"
import Header from "@/app/ui/comp/header"

export default function Emprestar(){
    return(
        <>
            <Header />
            <div className="content">
                <div className="cardscontainer">

                    <Card
                        href="/HeadSet">
                        <span>HeadSet</span>
                    </Card>
                    <Card
                        href="/MesaDigitalizadora"
                        >
                        <span>Mesa Digitalizadora</span>
                    </Card >
                    <Card
                        href="/JoyStick">
                        <span>JoyStick</span>
                    </Card >
                    <Card
                        href="/Óculos VR">
                        <span>Óculos VR</span>
                    </Card >
                    <Card
                        href="/Arduino">
                        <span>Arduino</span>
                    </Card >
                    <Card
                        href="/Notebook">
                        <span>Notebook</span>
                    </Card >
                </div>
            </div>

        </>
    )
}