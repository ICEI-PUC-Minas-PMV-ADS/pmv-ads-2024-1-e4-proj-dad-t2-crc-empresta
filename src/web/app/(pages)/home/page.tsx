'use client'
import Header from "../../ui/comp/header"
import CardHome from "../../ui/comp/card/card-home"
import Card from "../../ui/comp/card/card"
import ReturnModal from '../../ui/comp/modal/return';
import { useState, useEffect } from 'react';
import { getAllItems } from '@/app/lib/actions';

interface Item {
  id: string;
  name: string;
  isLend: boolean;
}

export default function Home() {
    const [lentItems, setLentItems] = useState<Item[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchLentItems = async () => {
            try {
                const items = await getAllItems();
                const lentItems = items.filter((item: Item) => item.isLend);
                setLentItems(lentItems);
            } catch (error) {
                console.error('Erro ao obter itens emprestados:', error);
            }
        };

        fetchLentItems();
    }, []);

    const handleOpenModal = () => {
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
                    <CardHome href="/emprestar">
                        <span>Emprestar</span>
                    </CardHome>
                    <Card onClick={handleOpenModal}>
                        <span>Devolver</span>
                    </Card>
                    <CardHome href="/historico">
                        <span>Meu Histórico</span>
                    </CardHome>
                </div>
            </div>
            {isModalOpen && <ReturnModal items={lentItems} onClose={handleCloseModal} />}
        </>
    )
}
