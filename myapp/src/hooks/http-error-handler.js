import { useState, useEffect } from "react";

export default httpClient => {
    const [error, setError] = useState(null)

    const reqInterceptors = httpClient.interceptors.request.use((req) => {
      setError(null)
      return req;
    });

    const respInterceptors = httpClient.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
      }
    );

 
    useEffect(() => {
      return () => {
        httpClient.interceptors.request.eject(reqInterceptors);
        httpClient.interceptors.response.eject(respInterceptors);
      };
    }, [httpClient.interceptors.request, httpClient.interceptors.response, reqInterceptors, respInterceptors]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
}