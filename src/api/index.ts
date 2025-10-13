import {request} from "./fetch.ts";
import {API_URL} from "./constant.ts";
import type {IDiary} from "../types/api/diary.ts";

export const queryHistoryList = async () => {
    return request<string[]>('https://v2.xxapi.cn/api/history')
}
export const queryDiaryList = async () => {
    return request<IDiary[]>(`${API_URL}/ye/diary`, {method: 'GET'})
}
export const insertDiary = async (diary: IDiary, file: File) => {
    const formData = new FormData();
    if (file) {
        formData.append('image', file);
    }
    formData.append('title', diary.title)
    formData.append('content', diary.content)
    return request(`${API_URL}/ye/diary`, {method: 'POST', body: formData})
}
export const queryYeCoin = async () => {
    return request<number>(`${API_URL}/ye/coin`)
}
export const updateYeCoin = async (plusNumber: number) => {
    return request<boolean>(`${API_URL}/ye/coin`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ plusNumber })
    })
}