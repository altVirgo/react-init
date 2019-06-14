// 这是一个reducer 用于响应action，根据一个旧的state返回一个新的state
// reducer 必须是纯方法(只根据传入参数计算得到返回值，不能包含参数以外值参与计算，比如时间)；
// 此处的state是当前的reducer的state，区别于container中mapStateToProps的state(整个状态树)，
const initStatus = {
    username:"",
    userid:""
}
const user = (state = initStatus, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.state
        case "LAYOUT":
            return initStatus;
        default:
            return state;
    }
}

export default user;

