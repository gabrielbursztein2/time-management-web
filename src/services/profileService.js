import httpClient from 'httpClient';

class ProfileService {
  static login(user) {
    return httpClient.post('/profile/sign_in', user);
  }

  static logout() {
    return httpClient.delete('/profile/sign_out');
  }

  static signUp(user) {
    return httpClient.post('/profile', user);
  }

  static update(user) {
    return httpClient.put(`/users/${user.id}`, user);
  }
}

export default ProfileService;
