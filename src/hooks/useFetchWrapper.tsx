import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export function useFetchWrapper() {

    const navigate = useNavigate();

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE'),
        post_multipart: request_multipart('POST'),
    };

    function request(method: string) {
        return (url: string, body: any) => {
            const requestOptions = {
                method,
                headers: authHeader(url),
                body
            };
            if (body) {
                requestOptions.body = JSON.stringify(body);
            }
            return fetch(url, requestOptions).then(handleResponse);
        }
    }

    // helper functions
    function authHeader(url: string): any {
        // return auth header with jwt if user is logged in and request is to the api url
        return { 'Content-Type': 'application/json' };
    }

    function handleResponse(response: any) {
        return response.text().then((text: string) => {
            const data = text && JSON.parse(text);

            if (!response.ok) {
                if ([401, 403].includes(response.status)) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    navigate("/");
                }

                const error = (data && data.message) || response.statusText;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                });
                return Promise.reject(error);
            }

            return {
                "totalCount": response.headers.get("totalCount"),
                data
            };
        });
    }

    function request_multipart(method: string) {
        return (url: string, body: any) => {
            const requestOptions = {
                headers: authHeader_multipart(url),
                method,
                body
            };
            if (body) {
                requestOptions.body = body;
            }
            return fetch(url, requestOptions).then(handleResponse);
        }
    }

    // helper functions
    function authHeader_multipart(url: string): any {
        // return auth header with jwt if user is logged in and request is to the api url
        return { 'Content-Type': 'multipart/form-data' };
    }
}