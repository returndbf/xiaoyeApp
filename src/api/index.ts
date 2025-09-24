import {request} from "./fetch.ts";

export const queryHistoryList = async ()=>{
    return request<string[]>('https://v2.xxapi.cn/api/history')
}