"use client"
import Image from "next/image"
import { ArrowLeftCircleIcon, ArrowRightEndOnRectangleIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { BackgroundImage } from "@mantine/core";

export default function Header() {
    const logout = () => {
        localStorage.removeItem('accessToken');
    }

    return (
        <>
        <header className="header bg-white ">
        <div className="logo">
        <Link href="\">
                <Image
                    width={250}
                    height={190}
                    src="/logo.png"
                    alt="Logo" />
                    </Link>
            </div>
            <div className="text-3xl">
               CRC Empresta
            </div>
            <div className="gap-3 userinfo justify-right">
                <Link href="\">
                        <HomeIcon className="w-5 md:w-6"/>
                </Link>
                <button onClick={logout} title="Sair">
                    <ArrowRightEndOnRectangleIcon className="w-5 md:w-6"/>
                </button>
            </div>            
        </header>
    </>
    )
}

