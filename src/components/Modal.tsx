import "./Modal.css"
import type {ModalProps} from "../types/Modal.ts"

const Modal = ({
                   open,
                   title = '',
                   content,
                   modalHeight,
                   showFooter = false,
                   okText = '确认',
                   cancelText = '返回',
                   onClose,
                   onConfirm
               }: ModalProps) => {
    const modalContentHeight = showFooter ? 'calc(100% - 60px)' : 'calc(100% - 20px)'
    return (
        <>
            {open &&
                <div className="y-modal-overlay">
                    <div className="y-modal-container" style={{height: modalHeight}}>
                        <div className={'flex justify-between items-center y-modal-header'}>
                            <h3 className="font-bold text-lg ">{title}</h3>
                            <div className="" onClick={onClose}>✕</div>
                        </div>

                        <p className="y-modal-content p-2" style={{height: modalContentHeight}}>
                            {content}
                        </p>
                        {showFooter && <div className="flex items-center justify-end y-modal-action ">
                            <button className="btn btn-sm mr-2" onClick={onClose}>{cancelText}</button>
                            <button className="btn btn-sm btn-info" onClick={onConfirm}>{okText}</button>
                        </div>}
                    </div>
                </div>}
        </>
    );
}
export default Modal;