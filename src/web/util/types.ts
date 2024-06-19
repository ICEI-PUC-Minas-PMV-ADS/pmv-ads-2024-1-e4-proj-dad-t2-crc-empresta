export interface Item {
    id: string;
    name: string;
    dateLend: string;
    studentName: string;
    code: string;
    isLend: boolean;
}

export interface Category {
    id: string;
    name: string;
    items: Item[];
}

export interface EditCategory {
    id: string;
    name: string;
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

export interface ItemLendingHistory {
    id: string;
    code: string;
    studentName: string;
    studentId: string;
    name: string;
    dateLend: string;
    dateReturn: string | null;
    status: string;
}
