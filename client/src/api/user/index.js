import { auth_axios } from "../../utils/utils";

export const getTellowsData = async () => {
  const res = await auth_axios(
    '/user/getTellowsData'
  )
  return res.data;
};

export const phoneCheck = async (phone_number) => {
  const res = await auth_axios(
    `/user/phoneCheck/${phone_number}`
  )

  return res.data;
};

export const getPhoneNumberInfo = async (phoneNumber) => {
  const res = await auth_axios.get(
    `/user/getPhoneNumberInfo/${phoneNumber}`
  );
  return res.data;
};

export const createPhoneNumberInfo = async (info) => {
  const res = await auth_axios.post(
    `/user/createPhoneNumberInfo`,
    info
  );
  return res.data;
};

export const createComment = async (commentData) => {
  const res = await auth_axios.post(
    `/user/createComment`,
    commentData
  );
  return res.data;
};

export const updateComments = async (commentData) => {
  const res = await auth_axios.post(
    `/user/updateComment`,
    commentData
  );
  return res.data;
}

export const removeComment = async (id, userid) => {
  const res = await auth_axios.get(
    `/user/removeComment/${id}/${userid}`
  )
  return res.data
}

export const getCommentData = async (userid) => {
  const res = await auth_axios.get(
    `/user/getCommentData/${userid}`
  );
  return res.data;
};

export const getPhoneCommentData = async (phoneNumber) => {
  const res = await auth_axios.get(
    `/user/getPhoneCommentData/${phoneNumber}`
  );
  return res.data
}

export const getUnwantedNumbers = async () => {
  const res = await auth_axios.get(`/user/getUnwantedNumbers`);
  return res.data;
};

export const getRecentNumbers = async () => {
  const res = await auth_axios.get(`/user/getRecentNumbers`);
  return res.data;
};
