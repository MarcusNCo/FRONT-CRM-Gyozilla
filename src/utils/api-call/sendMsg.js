import instance from '../interceptor'

export const sendMsg = async (values) => {
  return await instance.post('messages', values)
}
