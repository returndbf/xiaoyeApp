import {ToastManager as Toast} from "../../components/Toast/Toast.tsx";
import oneBg from '../../assets/toast-bg/one.png'
import twoBg from '../../assets/toast-bg/two.png'
import threeBg from '../../assets/toast-bg/three.svg'
import fourBg from '../../assets/toast-bg/four.png'
import fiveBg from '../../assets/toast-bg/five.png'

const Index = () => {
    const sentence = ['我可能被彩蛋所inject了', '奖励系统很快就来', '小乖今天乖吗', '看到这里就打开微信给我问好', '第二个按钮可以点击也可以滑动','期待见面！']
    const bgs = [oneBg, twoBg, threeBg, fourBg, fiveBg]
    const handleClick = () => {
        Toast.show({
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

export default Index;