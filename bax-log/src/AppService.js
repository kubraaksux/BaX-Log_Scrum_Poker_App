import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/baxlog/users";
const SESSION_API_BASE_URL = "http://localhost:8080/api/baxlog/sessions";

class AppService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    getSessions() {
        return axios.get(SESSION_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL + '/save', user);
    }

    createSession(session) {
        return axios.post(SESSION_API_BASE_URL + '/save', session);
    }

    checkJoinSession(sessionID) {
        return axios.get(SESSION_API_BASE_URL + '/joincheck/' + sessionID);
    }

    checkCreateSession(sessionID) {
        return axios.get(SESSION_API_BASE_URL + '/createcheck/' + sessionID);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    deleteSession(sessionId) {
        return axios.delete(SESSION_API_BASE_URL + '/' + sessionId);
    }

    updateUser(userId, user) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    joinSession(sessionID) {
        return axios.put(SESSION_API_BASE_URL + '/join/' + sessionID);
    }
}

export default new AppService()