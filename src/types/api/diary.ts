export interface IDiary {
    id?: string | number
    content: string;
    title: string;
    uploader?: string;
    uploadTime?: string;
    picture?: string;
    upload_month?: string
}