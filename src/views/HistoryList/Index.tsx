import {useState} from 'react';
import {queryHistoryList} from "../../api";
import Modal from "../../components/Modal/Modal.tsx";



const Index = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [historyList, setHistoryList] = useState<string[]>([])
    const onHistoryBtnClick = async () => {
        const list = await queryHistoryList()
        setHistoryList(list)
        setIsOpen(true)
    }
    return (
        <>
            <button className={"btn btn-secondary m-2 btn-lg w-35"} onClick={onHistoryBtnClick}>一个按钮</button>
            <Modal open={isOpen} showFooter={false} modalHeight={'70vh'} onClose={() => setIsOpen(false)}>
                {historyList.map(item => {
                    return <div key={item}>{item}</div>
                })}
            </Modal>
        </>
    );
}

export default Index;