'use client'

import Header from "@/app/ui/comp/header";
import { useState, useEffect } from "react";
import { fetchLendingHistory } from "@/app/lib/actions";
import { ItemLendingHistory } from "@/util/types";
import { Alert, Loader, Table, Container, Center } from "@mantine/core";


export default function Historico() {
    const [lendingHistory, setLendingHistory] = useState<ItemLendingHistory[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            fetchLendingHistory(token)
                .then((data: ItemLendingHistory[]) => {
                    setLendingHistory(data);
                    setIsLoading(false);
                })
                .catch((error: Error) => {
                    console.error('Erro ao obter o histórico de empréstimos:', error);
                    setIsError(true);
                    setIsLoading(false);
                });
        } else {
            console.error('Token não encontrado');
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    return (
        <>
            <Container  className="bg-white rounded-2xl py-2" size="md" style={{ marginTop: '20px' }}>
                {isLoading ? (
                    <Center>
                        <Loader size="xl" />
                    </Center>
                ) : (
                    <div>
                        <h1 className= "text-xl pb-5" style={{ textAlign: 'center' }}>Histórico de Empréstimos</h1>
                        {isError ? (
                            <Alert color="red">Erro ao carregar histórico de empréstimos.</Alert>
                        ) : (
                            lendingHistory.length === 0 ? (
                                <p style={{ textAlign: 'center' }}>Nenhum empréstimo encontrado.</p>
                            ) : (
                                <Table highlightOnHover>
                                    <thead>
                                        <tr className="border-b-2">
                                            <th className="pb-2 pt-1">Item</th>
                                            <th className="pb-2 pt-1">Aluno</th>
                                            <th className="pb-2 pt-1">Cod. de Pessoa</th>
                                            <th className="pb-2 pt-1">Data de Empréstimo</th>
                                            <th className="pb-2 pt-1">Data de Devolução</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{textAlign: 'center'}}>
                                        {lendingHistory.map((history) => (
                                            <tr className="hover:bg-gray-300" key={history.id}>
                                                <td className="p-1">{history.name}</td>
                                                <td className="p-1">{history.studentName}</td>
                                                <td className="p-1">{history.studentId}</td>
                                                <td className="p-1">{new Date(history.dateLend).toLocaleDateString()}</td>
                                                <td className="p-1">{history.dateReturn ? new Date(history.dateReturn).toLocaleDateString() : 'Não devolvido'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )
                        )}
                    </div>
                )}
            </Container>
        </>
    );
}
