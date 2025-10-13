import {useRef, useState} from "react";
import Modal from "../../components/Modal/Modal.tsx";
import {useDrag} from "@use-gesture/react";
import {debounce} from "../../utils";
// import Toast from "../../components/Toast/Toast.tsx";
import {ToastManager as Toast} from '../../components/Toast/Toast.tsx';

const EatWhat = () => {
    const [menu, setMenu] = useState<string[]>(JSON.parse(localStorage.getItem('menu') as string) || [])
    const [open, setOpen] = useState(false)
    const [inputText, setInputText] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const [currentSelected, setCurrentSelected] = useState('二个按钮')


    const bind = useDrag(
        (state) => {
            const {active, tap} = state;
            if (tap) handleEatWhatClick()
            else if (active) handleChooseEatDebounced()
        },
        {
            filterTaps: true, // 启用 tap 检测
            threshold: 10,     // 滑动阈值
            delay: 100
        }
    );

    const handleEatWhatClick = () => {
        setOpen(true)
        setTimeout(() => {
            inputRef?.current?.focus()
        }, 0)


    }

    const onChooseEat = () => {
        if (menu.length === 0) return setCurrentSelected('没有内容哦')
        const randomNum = Math.floor(Math.random() * menu.length);
        setCurrentSelected(() => menu[randomNum])
    }
    const handleChooseEatDebounced = debounce(onChooseEat, 100);

    const handleInsert = () => {
        setMenu(() => menu.concat([inputText]))
        localStorage.setItem('menu', JSON.stringify(menu.concat([inputText])))
        setInputText('')
        Toast.show({message: '添加成功！', duration: 2000, type: 'info', position: 'center'});
        inputRef?.current?.focus()
    }

    return (
        <>
            <button className={"btn btn-accent m-2 btn-lg w-35"} {...bind()} >{currentSelected}</button>
            <Modal open={open} showFooter={true} modalHeight={'20vh'} modalWidth={'70vw'}
                   onConfirm={handleInsert} onClose={() => setOpen(false)} okText={'添加'} title={'添加菜单项'}
                   isCenter={true}>
                <input type="text" placeholder="输入选项" className="input input-secondary  input-ghost input-sm"
                       value={inputText} ref={inputRef}
                       onChange={(e) => {
                           setInputText(e.target.value)
                       }}
                />
            </Modal>
        </>
    );
};

export default EatWhat;