import {request} from "./fetch.ts";
import {API_URL} from "./constant.ts";
import type {Diary} from "../types/api/diary.ts";
export const queryHistoryList = async ()=>{
    return request<string[]>('https://v2.xxapi.cn/api/history')
}
export const queryDiaryList = async ()=>{
    return request<Diary[]>(`${API_URL}/ye/diary`,{method:'GET'})
}