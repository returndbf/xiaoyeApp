export const debounce = <T extends (...args: never[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, delay);
    };
}

export const generateRandomNumber = (maxNumber: number): number => {
    return Math.floor(Math.random() * maxNumber) + 1;
}

export const groupBy = <T, K extends string | number>(
    array: T[],
    keyFn: (item: T) => K
): { key: K; value: T[] }[] => {
    const groups = array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<K, T[]>);

    // 将对象转换为 [{ key, value: [] }] 数组格式
    return Object.keys(groups).map(key => ({
        key: key as K,
        value: groups[key as K]
    }));
}