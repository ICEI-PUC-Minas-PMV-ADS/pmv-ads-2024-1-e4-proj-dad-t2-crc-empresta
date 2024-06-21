'use client'
import Card from "@/app/ui/comp/card/card";
import Header from "@/app/ui/comp/header";
import { useState, useEffect, useMemo } from "react";
import Modal from '@/app/ui/comp/modal/modal';
import { getAllCat } from '@/app/lib/data';
import { useDisclosure } from "@mantine/hooks";
import { Category, Item } from "@/util/types";
import { Alert, CheckIcon } from "@mantine/core";
import Modale from "@/app/ui/comp/modal/modal";

export default function Emprestar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return (
        <>
            <Header />
            <div className="content">
                <div className="cardscontainer">

                    <Card
                        onClick={handleCardClick}
                        >
                        <span>HeadSet</span>
                    </Card>
                    <Card
                        onClick={handleCardClick}
                    >
                        <span>Mesa Digitalizadora</span>
                    </Card >
                    <Card
                        onClick={handleCardClick}>
                        <span>JoyStick</span>
                    </Card >
                    <Card
                        onClick={handleCardClick}>
                        <span>Óculos VR</span>
                    </Card >
                    <Card
                        onClick={handleCardClick}>
                        <span>Arduino</span>
                    </Card >
                    <Card
                        onClick={handleCardClick}>
                        <span>Notebook</span>
                    </Card >
                </div>
                
            </div>
            {isModalOpen && <Modal onClose={handleCloseModal} />}

        </>
    )
}