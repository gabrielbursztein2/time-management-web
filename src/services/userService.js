import httpClient from 'httpClient';

class UserService {
  static create(user) {
    return httpClient.post('/admin/users', { user });
  }

  static update(user) {
    return httpClient.put(`/admin/users/${user.id}`, user);
  }

  static delete(id) {
    return httpClient.delete(`/admin/users/${id}`);
  }

  static getAll() {
    return httpClient.get('/admin/users');
  }
}

export default UserService;
