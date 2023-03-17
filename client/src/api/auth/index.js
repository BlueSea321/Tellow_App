import { auth_axios } from '../../utils/utils'

export const login = async (loginData) => {
    const res = await auth_axios.post(
        `/auth/login`,
        loginData
    )
    return res.data
}

export const resendEmail = async (info) => {
    const res = await auth_axios.post(
        `/auth/resendEmail`,
        info
    )
    return res.data
}

export const signUp = async (personalData) => {
    const res = await auth_axios.post(
        `/auth/signup`,
        personalData
    )
    return res.data
}

export const getUserData = async (id) => {
    const res = await auth_axios.get(
        `/auth/getUserData/${id}`
    )
    return res.data
}