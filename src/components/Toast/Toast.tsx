// toastManager.js
import {type CSSProperties, type Dispatch, useState} from 'react';
import {createRoot} from 'react-dom/client';
import type {ToastProps} from "../../types/components/Toast.ts";
import './Toast.css'

export class ToastManager {
    // 全局变量存储当前的更新函数
    private static toastUpdate: Dispatch<ToastProps | null> = () => {
    };

    // 初始化，在 App 渲染后注入 update 函数
    static init(updateFn: Dispatch<ToastProps | null>) {
        this.toastUpdate = updateFn;
    }

    // 命令式 API
    static show(toastInstance: ToastProps | null | string) {
        if (this.toastUpdate) {
            if (typeof toastInstance === 'string') {
                toastInstance = {
                    message: toastInstance,
                    duration: 3000,
                    position: 'center',
                    type: 'info'
                }
            }
            this.toastUpdate(toastInstance);
            setTimeout(() => {
                ToastManager.hide();
            }, toastInstance?.duration || 3000)
        }
    }

    static hide() {
        if (this.toastUpdate) {
            this.toastUpdate(null);
        }
    }
};

// Toast 组件本身
export function ToastContainer() {
    const [toast, setToasts] = useState<ToastProps | null>();
    const positionStyle: Record<NonNullable<ToastProps['position']>, CSSProperties> = {
        'top': {top: 20, right: 20},
        'bottom': {bottom: 20, right: 20},
        'center': {top: '30vh', left: '50%', transform: 'translateX(-50%)'},
    }
    const typeStyle: Record<NonNullable<ToastProps['type']>, CSSProperties> = {
        'success': {backgroundColor: '#75d579', color: '#014204'},
        'error': {backgroundColor: '#f37066', color: '#360300'},
        'info': {backgroundColor: '#60afef', color: '#012444'},
        'warning': {backgroundColor: '#efbb6c', color: '#4d3000'},
    }

    // 将 setToasts 注入到管理器中
    ToastManager.init(setToasts);

    return (
        <>
            {toast && <div className={'dbf-toast'}
                           style={{
                               ...positionStyle[toast?.position || 'center'],
                               ...typeStyle[toast?.type || 'info'],

                           }}
            >
                {toast?.message}
            </div>}

        </>
    );
}

// Portal 挂载点
const mount = document.createElement('div');
mount.id = 'toast-root';
mount.style.position='relative'
mount.style.zIndex='9999'
document.body.appendChild(mount);

// 渲染 ToastContainer 到 DOM
const root = createRoot(mount);
root.render(<ToastContainer/>);