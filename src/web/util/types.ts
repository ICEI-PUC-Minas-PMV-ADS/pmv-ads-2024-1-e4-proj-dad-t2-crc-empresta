export interface Item {
    id: string;
    name: string;
    isLend: boolean;
}

export interface Category {
    id: string;
    name: string;
    items: Item[];
}

export interface ModalProps {
    onClose: () => void | undefined;
    opened: boolean;
    catId: string;
    catName: string;
    onSuccess?: () => void;
    onItemIdChange?: (itemId: string) => void;
}

export interface ReturnModalProps {
    onClose: () => void;
    //close?: () => void;
    opened: boolean;
    items: Item[];
}