'use client'
import Header from "../../ui/comp/header"
import CardHome from "../../ui/comp/card/card-home"
import Card from "../../ui/comp/card/card"
import ReturnModal from '../../ui/comp/modal/return';
import { useState, useEffect } from 'react';
import { getAllItems } from '@/app/lib/actions';
import { Item } from "@/util/types";
import { Tabs } from '@mantine/core';
import Emprestar from "../emprestar/page";
import Historico from "../historico/page";


export default function Home() {
    const [lentItems, setLentItems] = useState<Item[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchLentItems = async () => {
            try {
                const items = await getAllItems();
                const lentItems = items.filter((item: Item) => item.isLend);
                setLentItems(lentItems);
                console.log(lentItems)
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

            <Tabs defaultValue="first">
            <Tabs.List grow justify="center">
                    <Tabs.Tab value="first">Emprestar</Tabs.Tab>
                    <Tabs.Tab value="second">Devolver</Tabs.Tab>
                    <Tabs.Tab value="third">Historico</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="first"><Emprestar/></Tabs.Panel>
                <Tabs.Panel value="second" className='flex justify-center'><Card onClick={handleOpenModal}>
                    <span>Devolver</span>
                </Card></Tabs.Panel>
                <Tabs.Panel value="third"><Historico/></Tabs.Panel>
            </Tabs>

            {isModalOpen && <ReturnModal items={lentItems} onClose={handleCloseModal} />}
        </>
    )
}