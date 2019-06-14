export function login(userinfo) {
    debugger;
    return {
        type: "LOGIN",
        state: {
            userid:userinfo.userid,
            username:userinfo.username
        }
    }
}