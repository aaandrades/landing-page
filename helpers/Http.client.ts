export class HttpClient {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async get<T>() {
    try {
      const data = await fetch(this.url);
      const parsedData = await data.json();
      return parsedData;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async post<T>(body: any) {
    try {
      const data = await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(body),
      });
      const parsedData = await data.json();
      return parsedData;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
