interface IProps {
    coinNumber: number
}
const Index = ({coinNumber}: IProps) => {

    return (
        <div className={'absolute bottom-0 left-2'}>
            <span className={' font-bold'}> 积分数量：</span>
            <span className={' font-bold'}>{coinNumber}</span>
        </div>
    );
};

export default Index;