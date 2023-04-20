import instance from '../interceptor'

export const getAllNews = () => {
  return instance.get('news')
}
