import axios from 'axios';
import Qs from "qs";

let base = 'http://sys.e-media.vip/'


export const requestLogin = params => {
  return axios.post(`${base}api/auth/login`, Qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
};

export const getCheckModelList = params => {
  return axios.get(`${base}api/checkModel/getCheckModelList`, {
    params,
    params
  })
};

export const getMerchantInfoList = params => {
  return axios.get(`${base}api/merchantInfo/getMerchantInfoPage`, {
    params,
    params
  })
};

export const postDomain = params => {
  return axios.post(`${base}api/domain/addDomain`, Qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
};

export const postCheckInfo = params => {
  return axios.post(`${base}api/merchantInfo/checkMerchantInfo`, Qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
};

export const getCheckInfo = params => {
  return axios.get(`${base}/TBXEditor/preview_online/index_online.html?`, Qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
};

export const getCheckNav = params => {
  return axios.get(`${base}api/checkModel/getCheckInfo`, {
    params,
    params
  })
};

export const postCheck = params => {
  return axios.post(`${base}api/checkModel/check`, Qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
