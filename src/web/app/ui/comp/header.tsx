import Image from "next/image"

export default function Header(){
    return (
        <header className="header">
        <div className="logo">
            <Image
                width={250}
                height={190}
                src="/logo.png"
                alt="Logo" />
        </div>
        <div className="userinfo">
            <span>Bem-vindo!</span>            
        </div>
    </header>
    )
}