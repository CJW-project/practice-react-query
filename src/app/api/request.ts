
type requestApiProp = {
    uri: string;
  };

export async function requestApi({
    uri
}: requestApiProp) {
    const baseUrl = "https://jsonplaceholder.typicode.com";

    let resData;
    let url = [baseUrl, uri].join('/');

    const response = (await fetch(url));
    resData = response.json();

    return resData;
}
