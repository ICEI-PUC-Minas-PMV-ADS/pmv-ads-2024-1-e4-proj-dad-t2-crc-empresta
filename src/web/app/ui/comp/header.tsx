import Image from "next/image"
import { ArrowLeftCircleIcon, ArrowRightEndOnRectangleIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Header() {
    const logout = () => {
        localStorage.removeItem('accessToken');
    }

    return (
        <>
        <header className="header">
            <div className="logo">
                <Image
                    width={250}
                    height={190}
                    src="/logo.png"
                    alt="Logo" />
            </div>
            <div className="userinfo justify-right">
                <Link href="/home">
                        <HomeIcon className="w-5 md:w-6"/>
                </Link>
                <button onClick={logout} title="Sair">
                    <ArrowRightEndOnRectangleIcon className="w-5 md:w-6"/>
                </button>
            </div>            
        </header>
        <button className="back-button flex p-5 btn text-white gap-2 hover:text-slate-400" onClick={() => window.history.back()} title="Voltar">
        <ArrowLeftCircleIcon className="w-5 md:w-6"/>Voltar
    </button>
    </>
    )
}
