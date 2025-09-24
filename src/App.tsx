import { useState} from 'react'

import './App.css'
import {queryHistoryList} from "./api";
import Modal from "./components/Modal.tsx";
const HistoryList = ({list}:{list:string[]}) => {
    return (
        <>
            {list.map(item=>{
                return <div key={item}>{item}</div>
            })}
        </>
    )
}

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [historyList, setHistoryList] = useState<string[]>([])
    const onHistoryBtnClick = async () => {
        const list = await queryHistoryList()
        setHistoryList(list)
        setIsOpen( true)
    }

    return (

        <div className={'w-[100vw] h-[100vh] bg-pink-50'}>
            <div className={'flex justify-center items-center h-[20%]'}>
                <img className={'h-[80%]'} src={'/banner.png'}/>
                <div className={'font-bold text-2xl'}>小叶的</div>
            </div>
            <div className={'flex justify-center items-center h-[80%]'}>
                <button className={"btn btn-secondary "} onClick={onHistoryBtnClick}>一个按钮</button>
                <Modal open={isOpen} content={<HistoryList list={historyList}/>} showFooter={false} modalHeight={'70vh'} onClose={()=>setIsOpen(false)}/>
            </div>
        </div>
    )
}

export default App
