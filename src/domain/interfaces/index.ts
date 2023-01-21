export interface Post {
  id: number,
  author: string,
  title: string,
  date: string,
  src: string,
  peso: string,
  idade: string,
  acessos: number,
  total_comments: string,
}

export interface HttpResponse<T> {
  data?: T;
  status?: number;
  error?: string;
}

export interface BackendDefaultData {
  message: string
}

export interface Http {
  get:<T> () => Promise<HttpResponse<T>>
  post:<T, Q> (body: Q) => Promise<HttpResponse<T>>
  put:<T, Q> (body: Q) => Promise<HttpResponse<T>>
  patch:<T, Q> (body: Q) => Promise<HttpResponse<T>>
  delete:<T> () => Promise<HttpResponse<T>>
  setToken: string
}
