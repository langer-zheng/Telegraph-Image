export async function auth(context){
    const { env } = context
    const authCode = env.AUTH_CODE
    const auth = window.localStorage.getItem('auth') ||  window.prompt("auth")
    if (auth === authCode) {
        window.localStorage.setItem('auth', authCode)
        window.location.reload()
    } else {
        window.location.reload()
    }
}