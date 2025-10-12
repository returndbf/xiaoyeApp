import {request} from "./fetch.ts";
import {API_URL} from "./constant.ts";
import type {Diary} from "../types/api/diary.ts";
export const queryHistoryList = async ()=>{
    return request<string[]>('https://v2.xxapi.cn/api/history')
}
export const queryDiaryList = async ()=>{
    return request<Diary[]>(`${API_URL}/ye/diary`,{method:'GET'})
}
export const insertDiary = async (diary: Diary,file:File)=>{
    const formData = new FormData();
    if(file){
        formData.append('image',file);
    }
    formData.append('title',diary.title)
    formData.append('content',diary.content)
    return request(`${API_URL}/ye/diary`,{method:'POST',body:formData})
}
export const queryYeCoin = async ()=>{
    return request<number>(`${API_URL}/ye/coin`)
}