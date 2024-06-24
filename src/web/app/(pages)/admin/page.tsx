"use client"
import Category from "./comp/category";
import User from "./comp/user";
import Item from "./comp/item";
import { useState } from 'react';
import { Tabs } from '@mantine/core';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<string | null>('first');
  return (
    <>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="first">Usuários</Tabs.Tab>
          <Tabs.Tab value="second">Itens</Tabs.Tab>
          <Tabs.Tab value="Terceiro">Categoria</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first"><User /></Tabs.Panel>
        <Tabs.Panel value="second"><Item /></Tabs.Panel>
        <Tabs.Panel value="Terceiro"><Category /></Tabs.Panel>
      </Tabs>
    </>
  )
}