import request from "@/serveice";
 const httpConfig = (url: string, method: string, data?:any) => {
 return request({
    url,
    method,
    data,
    interceptors: {
      requestInterceptors(res) {
        console.log("接口请求拦截");
        return res;
      },
      responseInterceptors(result) {
        console.log("接口响应拦截");
        return result;
      },
    },
  });
};

export default httpConfig