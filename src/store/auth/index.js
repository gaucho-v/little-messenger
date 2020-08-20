export const spreadUserData = res => {
    const {user} = res || null;
    return {
        name: user.email.split('@')[0],
        email: user.email,
        uid: user.uid
    };
};

export const saveUserInStorage = (user) => {
    localStorage.setItem('little-messenger-user', user)
}