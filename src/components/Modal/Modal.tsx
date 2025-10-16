import "./Modal.css"
import type {ModalProps} from "../../types/components/Modal.ts"
import {motion, AnimatePresence} from "motion/react"
import {type CSSProperties, useEffect} from "react";

const Modal = ({
                   open,
                   title = '',
                   modalHeight,
                   showFooter = false,
                   okText = '确认',
                   cancelText = '返回',
                   onClose,
                   modalWidth = '80vw',
                   onConfirm,
                   children,
                   isCenter = false,
                   isLoading = false,
                   onOpen = () => {
                   }
               }: ModalProps) => {
    const modalContentHeight = showFooter ? 'calc(100% - 60px - 10px)' : 'calc(100% - 20px - 10px)'

    const centerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const applyCenterStyle: CSSProperties = isCenter ? centerStyle : {}
    useEffect(() => {
        if (open) {
            onOpen()
        }
    }, [open])
    return (
        <AnimatePresence>
            {open &&
                <div className="y-modal-overlay">
                    <motion.div initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: open ? 1 : 0, scale: open ? 1 : 0}}
                                exit={{opacity: 0, scale: 0.5}}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut'
                                }}
                                key="modal" className="y-modal-container"
                                style={{height: modalHeight, width: modalWidth}}>
                        <div className={'flex justify-between items-center y-modal-header'}>
                            <h3 className="font-bold text-sm ">{title}</h3>
                            {isLoading ? <span className="loading loading-spinner text-primary"></span> :
                                <div className="" onClick={onClose}>
                                    <img src='/close.svg' alt={''} className={'h-[20px]'}></img>
                                </div>}
                        </div>

                        <div className="y-modal-content p-2"
                             style={{height: modalContentHeight, ...applyCenterStyle}}>
                            {children}
                        </div>
                        {showFooter &&
                            <div className="flex items-center justify-end y-modal-action ">
                                {isLoading ? <span className="loading loading-spinner text-primary"></span> :
                                    <>
                                        <button className="btn btn-sm mr-2" onClick={onClose}>{cancelText}</button>
                                        <button className="btn btn-sm btn-info" onClick={onConfirm}>{okText}</button>
                                    </>}
                            </div>
                        }
                    </motion.div>
                </div>}
        </AnimatePresence>
    );
}
export default Modal;