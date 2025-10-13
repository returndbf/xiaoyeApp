import './App.css'
import {useEffect, useState} from "react";
import HistoryList from './views/HistoryList'
import EatWhat from './views/EatWhat'
import EasterEgg from './views/EasterEgg'
import Diary from "./views/Diary"
import YeCoin from "./views/YeCoin"
import Lock from "./views/Lock";
import {queryYeCoin} from "./api";


function App() {
    const [coinNumber, setCoinNumber] = useState(0)
    const getYeCoin = async () => {
        const res = await queryYeCoin()
        setCoinNumber(res)
    }
    useEffect(() => {
        getYeCoin()
    }, []);
    return (
        <div className={'w-[100vw] h-[100%] bg-pink-50 overflow-hidden'}>
            <div className={'flex justify-center items-center h-[20%]'}>
                <img className={'h-[80%]'} src={'/banner.png'} alt={''}/>
                <div className={'font-bold text-2xl'}>小叶的</div>
            </div>
            <div className={'flex justify-center items-center h-[80%] flex-col'}>
                <Lock></Lock>
                <HistoryList></HistoryList>
                <EatWhat></EatWhat>
                <EasterEgg></EasterEgg>
                <Diary getCoin={getYeCoin}></Diary>
                <YeCoin coinNumber={coinNumber}></YeCoin>
            </div>
        </div>
    )
}

export default App
