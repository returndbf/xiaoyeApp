import {ToastManager as Toast} from "../../components/Toast/Toast.tsx";
import oneBg from '../../assets/toast-bg/one.png'
import twoBg from '../../assets/toast-bg/two.png'
import threeBg from '../../assets/toast-bg/three.svg'
import fourBg from '../../assets/toast-bg/four.png'
import fiveBg from '../../assets/toast-bg/five.png'
import {useEffect} from "react";
import {generateRandomNumber} from "../../utils";
import {updateYeCoin} from "../../api";

interface IProps {
    getCoin: () => void
}

const EasterEgg = ({getCoin}: IProps) => {
    const sentence = ['写日志后有概率获得双倍积分！', '积分系统上线啦', '小乖今天乖吗', '看到这里就打开微信给我问好', '第二个按钮可以点击也可以滑动', '期待下次见面！']
    const bgs = [oneBg, twoBg, threeBg, fourBg, fiveBg]

    useEffect(() => {
        bgs.forEach(bg => {
            const img = new Image();
            img.src = bg;
        });
    }, []);


    const handleClick = async() => {
        const number = generateRandomNumber(10);
        if (number === 10) {
            await updateYeCoin(1)
             Toast.show({
                message: '恭喜触发彩蛋，积分+1！',
                duration: 2000,
                type: 'success',
                position: 'center',
                cusBg: bgs[Math.floor(Math.random() * bgs.length)]
            })
            return getCoin()
        }
        return Toast.show({
            message: sentence[Math.floor(Math.random() * sentence.length)],
            duration: 2000,
            type: 'info',
            position: 'center',
            cusBg: bgs[Math.floor(Math.random() * bgs.length)]
        })
    }
    return (
        <div>
            <button className={"btn btn-error m-2 btn-lg w-35"} onClick={handleClick}>可能是彩蛋</button>
        </div>
    );
};

export default EasterEgg;