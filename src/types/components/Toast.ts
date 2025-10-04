import type {ReactNode} from "react";

export  interface ToastProps {
    message: string | ReactNode;
    duration?: number;
    position?: 'top' | 'bottom' | 'center' ;
    type?: 'success' | 'error' | 'info' | 'warning';
    onClose?: () => void;
    cusBg?:string
}