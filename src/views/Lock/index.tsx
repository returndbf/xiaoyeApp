import {useState} from 'react';
import Modal from "../../components/Modal/Modal.tsx";
import {ToastManager as Toast} from "../../components/Toast/Toast.tsx";

const Lock = () => {
    const keys = ['ye', 'dbf']
    const hasUser = keys.includes(localStorage.getItem('user') || '')
    const [isLock, setIsLock] = useState(!hasUser)
    const [keyText, setKeyText] = useState('')


    const onConfirm = () => {
        if (keys.includes(keyText)) {
            localStorage.setItem('user', 'ye')
            setIsLock(false)
        } else {
            Toast.show({message: '口令错误！', duration: 2000, type: 'error', position: 'top'});
        }
    }

    return (
        <div>
            <Modal open={isLock} modalHeight={'20vh'} onClose={() => {
                Toast.show({message: '对上口令才能关闭！',type:'error',position:'top'})
            }} title={'身份确认'} showFooter={true} isCenter={true}
                   okText={'确认'} onConfirm={onConfirm}>
                <input type="text" placeholder="输入选项" className="input input-secondary  input-ghost input-sm"
                       value={keyText}
                       onChange={(e) => {
                           setKeyText(e.target.value)
                       }}
                />
            </Modal>
        </div>
    );
};

export default Lock;