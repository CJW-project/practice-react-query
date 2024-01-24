
type requestApiProp = {
    uri: string;
    method: string;
    body?: Record<string, any> | any;
  };

export async function requestApi({
    uri,
    method,
    body,
}: requestApiProp) {
    const baseUrl = "https://jsonplaceholder.typicode.com";

    const options: RequestInit = {};
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    options.method = method;
    options.headers = headers;
    options.body = JSON.stringify(body);

    let resData;
    let url = [baseUrl, uri].join('/');

    const response = (await fetch(url, options ?? {}));
    resData = response.json();

    return resData;
}
