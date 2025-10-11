import {useState} from "react";
import Modal from "../../components/Modal/Modal.tsx";

const Index = () => {
    const [isShowDiaryModal, setIsShowDiaryModal] = useState(false)
    const [diaryList, setDiaryList] = useState([])
    return (
        <div>
            <button className={"btn  m-2 btn-lg w-35"} onClick={() => setIsShowDiaryModal(true)}>日记列表</button>
            <Modal open={isShowDiaryModal} modalHeight={'80vh'} title={'日记列表'} showFooter={false}
                   onClose={() => setIsShowDiaryModal(false)}>
                {
                    diaryList.map((item, index) => {
                        return (
                            <div key={index} className={'p-2'}>
                                <div className={'text-lg font-bold'}>{item?.title}</div>
                                <div className={'text-sm'}>{item?.content}</div>
                            </div>
                        )
                    })
                }
            </Modal>
        </div>
    );
};

export default Index;