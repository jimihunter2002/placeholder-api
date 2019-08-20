const axios = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com'
const placholder = {

    /*createUser: (input) => axios.post(`${baseUrl}/users`, input)
        .then(response => response)
        .catch(err => err),

    getUser: (userId) => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response)
        .catch(err => err),

    createPost: (payload) => axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(response => response)
        .catch(err => err),

    getPost: (postId) => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response)
        .catch(err => err),

    updatePost: (payload, postId, options) => axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, payload, options)
        .then(response => response)
        .catch(err => err),

    partialPostUpdate: (payload, postId) => axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, payload)
        .then(response => response)
        .catch(err => err),

    deletePost: (postId) => axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response)
        .catch(err => err), */




    createUser: (payload) => axios.post(`${baseUrl}/users`, payload)
        .then(response => response)
        .catch(err => err),

    getUser: (userId) => axios.get(`${baseUrl}/users/${userId}`)
        .then(response => response)
        .catch(err => err),

    createPost: (payload) => axios.post(`${baseUrl}/posts`, payload)
        .then(response => response)
        .catch(err => err),

    getPost: (postId) => axios.get(`${baseUrl}/posts/${postId}`)
        .then(response => response)
        .catch(err => err),

    updatePost: (payload, postId, options) => axios.put(`${baseUrl}/posts/${postId}`, payload, options)
        .then(response => response)
        .catch(err => err),

    partialPostUpdate: (payload, postId) => axios.patch(`${baseUrl}/posts/${postId}`, payload)
        .then(response => response)
        .catch(err => err),

    deletePost: (postId) => axios.delete(`${baseUrl}/posts/${postId}`)
        .then(response => response)
        .catch(err => err),

    universalCreate: (type, payload) => axios.post(`${baseUrl}/${type}`, payload)
        .then(response => response)
        .catch(err => err)


};

module.exports = placholder;

