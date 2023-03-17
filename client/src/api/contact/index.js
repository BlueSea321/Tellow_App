import { auth_axios } from "../../utils/utils";

export const sendProblem = async (data) => {
  const res = await auth_axios.post("/contact/sendProblem", data);

  return res.data;
};

export const reportBug = async (data) => {
  const res = await auth_axios.post("/contact/reportBug", data);

  return res.data;
};

export const removeAccount = async (data) => {
  const res = await auth_axios.post("/contact/removeAccount", data);

  return res.data;
};

export const sendCooperation = async (data) => {
    const res = await auth_axios.post("/contact/sendCooperation", data);

    return res.data
}
