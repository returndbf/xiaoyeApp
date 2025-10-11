import type {ReactNode} from "react";

export type ModalProps = Partial<{
    open: boolean;
    title: string;
    // content:string | ReactElement | ReactNode;
    onClose: () => void;
    onConfirm: () => void;
    showFooter: boolean;
    okText: string;
    cancelText: string;
    modalHeight: string;
    modalWidth: string;
    children: ReactNode;
    isCenter?: boolean;
    onOpen?: () => void;
}>