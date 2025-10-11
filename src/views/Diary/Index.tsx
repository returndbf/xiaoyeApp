import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal.tsx";
import {insertDiary, queryDiaryList} from "../../api";
import type {Diary} from "../../types/api/diary.ts";
import {ToastManager as Toast} from '../../components/Toast/Toast.tsx';

const Index = () => {
    const [isShowDiaryModal, setIsShowDiaryModal] = useState(false)
    const [diaryList, setDiaryList] = useState<Diary[]>([])
    const [curDiary, setCurDiary] = useState<Diary>({content: "", title: "", uploader: "", picture: ''})
    const [file, setFile] = useState<File>()
    const [diaryModal, setDiaryModal] = useState<boolean>(false)

    const getDiaryList = async () => {
        const list = await queryDiaryList()
        setDiaryList(list)
    }
    const onListConfirm = () => {
        setDiaryModal(true)
    }
    const onEditConfirm = async () => {
        if(!curDiary.title || !curDiary.content){
            return Toast.show({message: '请填写标题和内容哦！', duration: 2000, type: 'error', position: 'center'});
        }
        const response = await insertDiary(curDiary, file!)
        if(response){
            getDiaryList()
            setDiaryModal(false)
            localStorage.removeItem('diaryTitle')
            localStorage.removeItem('diaryContent')
        }

    }
    const onEditModalOpen = () => {
        setCurDiary({
            content: localStorage.getItem('diaryContent') || '',
            title: localStorage.getItem('diaryTitle') || '',
            uploader: ''
        })
    }
    const onDiaryInput = (type: string, value: string) => {
        if (type === 'title') {
            setCurDiary({...curDiary, title: value})
            localStorage.setItem('diaryTitle', value)
        } else {
            setCurDiary({...curDiary, content: value})
            localStorage.setItem('diaryContent', value)
        }
    }
    const handleDiaryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputFile = e.target.files?.[0];
        setFile(inputFile);
    };
    useEffect(() => {
        getDiaryList()
    }, [])
    return (
        <div>
            <button className={"btn  m-2 btn-lg w-35"} onClick={() => setIsShowDiaryModal(true)}>日记列表</button>
            <Modal open={isShowDiaryModal} modalHeight={'80vh'} title={'日记列表'} showFooter={true}
                   onClose={() => setIsShowDiaryModal(false)} okText={'添加日记'} onConfirm={onListConfirm}>
                {
                    diaryList?.map((item, index) => {
                        return (
                            <div className="collapse collapse-arrow bg-base-100 border-base-300 border mb-2"
                                 key={index}>
                                <input type="checkbox"/>
                                <div className="collapse-title font-semibold">{item.title}</div>
                                <div className="collapse-content text-sm">
                                    <div>{item.content}</div>
                                    {item.picture && <img src={item.picture} width={100} height={100}/>}
                                </div>

                            </div>
                        )
                    })
                }
            </Modal>
            <Modal open={diaryModal} modalHeight={'60vh'} title={'添加日记'} showFooter={true}
                   onClose={() => setDiaryModal(false)} onConfirm={onEditConfirm} onOpen={onEditModalOpen}>
                <input type="text" placeholder="输入日记标记" className="input  mb-4" value={curDiary.title}
                       onInput={(e) => {
                           onDiaryInput('title', e.currentTarget.value)
                       }}/>
                <textarea className="textarea mb-4" placeholder="输入日记内容" rows={15} value={curDiary.content}
                          onInput={(e) => {
                              onDiaryInput('content', e.currentTarget.value)
                          }}></textarea>
                <input type="file" className="file-input" accept="image/*" onChange={handleDiaryFileChange}/>
            </Modal>
        </div>
    );
};

export default Index;