import { auth_axios } from "../../utils/utils";

export const getAllUserData = async () => {
    const res = await auth_axios.get(
        `/admin/getAllUserData`
    )
    return res.data;
}

export const activeUser = async (id) => {
    const res = await auth_axios.get(
        `/admin/activeUser/${id}`
    )
    return res.data
}

export const suspendUser = async (id) => {
    const res = await auth_axios.get(
        `/admin/suspendUser/${id}`
    )
    return res.data
}

export const getAllPhoneData = async () => {
    const res = await auth_axios.get(
        `/admin/getAllPhoneData`
    )
    return res.data;
}

export const getAllCommentData = async () => {
    const res = await auth_axios.get(
        `/admin/getAllCommentData`
    )
    return res.data
}

export const removeUser = async (id) => {
    const res = await auth_axios.get(
        `/admin/removeUser/${id}`
    )
    return res.data
}

export const removeComment = async (id) => {
    const res = await auth_axios.get(
        `/admin/removeComment/${id}`
    )
    return res.data
}

export const getTotalStatus = async () => {
    const res = await auth_axios.get(
        `/admin/getTotalStatus`
    )
    return res.data
} 