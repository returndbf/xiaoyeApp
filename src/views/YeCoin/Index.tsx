import {useEffect, useState} from "react";
import {queryYeCoin} from "../../api";


const Index = () => {
    const [yeCoin,setYeCoin] = useState(0)
    const getYeCoin = async () => {
        const res = await queryYeCoin()
        setYeCoin(res)
    }
    useEffect(() => {
        getYeCoin()
    }, []);
    return (
        <div className={'absolute bottom-0 left-2'}>
            <span className={' font-bold'}> 积分数量：</span>
            <span className={' font-bold'}>{yeCoin}</span>
        </div>
    );
};

export default Index;