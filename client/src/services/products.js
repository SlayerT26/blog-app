import api from './apiConfig'

export const getPosts = async () => {
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPost = async _id => {
  try {
    const response = await api.get(`/posts/${_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createPost = async post => {
  try {
    const response = await api.post('/posts', post)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePost = async (_id, post) => {
  try {
    const response = await api.put(`/posts/${_id}`, post)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async _id => {
  try {
    const response = await api.delete(`/posts/${_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}