interface IResponse<T> {
    code: number;
    data: T;
    message: string;
}

export async function request<T>(url: string, options?: Record<string, object>): Promise<T> {
    const res = await fetch(url, options);
    const rawData = await res.json() as IResponse<T>;

    // 需要保留错误处理逻辑
    if (rawData.code === 200) {
        return rawData.data;
    } else {
        throw new Error(rawData.message || '请求失败');
    }
}