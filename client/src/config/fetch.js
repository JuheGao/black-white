import axios from 'axios'
import { BASEURL } from './env'

/** 
  * method: 方法  
  * url: 链接   
  * data: 参数    
  * BASEURL: 域名地址 
* */
export const fetch = (method, url, data) => {
  console.log(url, data)
  return new Promise(async (resolve, reject) => {
    let header = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "x-requested-with,content-type",
      "Content-Type": "application/x-www-form-urlencoded"
    }
    axios.request({
      method,
      data, 
      header,
      url: BASEURL + url,
    }).then(response => {
      resolve(response.data.data)
    }).catch(response => {
      reject(response.data)
    })
  })
}