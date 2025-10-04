import './App.css'

import HistoryList from './views/HistoryList/Index'
import EatWhat from './views/EatWhat/Index'

function App() {


    return (
        <div className={'w-[100vw] h-[100%] bg-pink-50 overflow-hidden'}>
            <div className={'flex justify-center items-center h-[20%]'}>
                <img className={'h-[80%]'} src={'/banner.png'}/>
                <div className={'font-bold text-2xl'}>小叶的</div>
            </div>
            <div className={'flex justify-center items-center h-[80%] flex-col'}>
                <HistoryList></HistoryList>
                <EatWhat></EatWhat>
            </div>
        </div>
    )
}

export default App
