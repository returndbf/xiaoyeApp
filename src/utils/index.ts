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