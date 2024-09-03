'use client'
import { returnItem } from "@/app/lib/actions";

export function DevolveItemWithId({ itemId }: { itemId: string }) {
    const returnItemWithId = returnItem.bind(null, itemId);
    return (
    <button onClick={returnItemWithId}>Devolver</button>
)
}