import {use, useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal.tsx";
import {queryDiaryList} from "../../api";
import type {Diary} from "../../types/api/diary.ts";

const Index = () => {
    const [isShowDiaryModal, setIsShowDiaryModal] = useState(false)
    const [diaryList, setDiaryList] = useState<Diary[]>([])

    const getDiaryList = async () => {
        const list = await queryDiaryList()
        setDiaryList(list)
    }
    useEffect(() => {
        getDiaryList()
    },[])
    return (
        <div>
            <button className={"btn  m-2 btn-lg w-35"} onClick={() => setIsShowDiaryModal(true)}>日记列表</button>
            <Modal open={isShowDiaryModal} modalHeight={'80vh'} title={'日记列表'} showFooter={false}
                   onClose={() => setIsShowDiaryModal(false)}>
                {
                    diaryList?.map((item, index) => {
                        return (
                            <div className="collapse collapse-arrow bg-base-100 border-base-300 border" key={index}>
                                <input type="checkbox" />
                                <div className="collapse-title font-semibold">{item.title}</div>
                                <div className="collapse-content text-sm">
                                    {item.content}
                                </div>
                            </div>
                        )
                    })
                }
            </Modal>
        </div>
    );
};

export default Index;