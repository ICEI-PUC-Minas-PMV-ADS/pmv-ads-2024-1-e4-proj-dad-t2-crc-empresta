import Header from "../ui/comp/header"
import Card from "../ui/comp/card/card-home"

export default function Home() {
    return (
        <>
            <Header />
            <div className="content">
                <div className="cardscontainer">

                    <Card
                        href="/emprestar">
                        <span>Pegar Emprestado</span>
                    </Card>
                    <Card
                        href="/devolver"
                        >
                        <span>Devolver</span>
                    </Card >
                    <Card
                        href="/historico">
                        <span>Meu Histórico</span>
                    </Card >
                </div>
            </div>

        </>
    )
}