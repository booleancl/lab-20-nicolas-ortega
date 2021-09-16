class AuthService {
	constructor() {
		this.authenticated = false;
	}
	setAuth(authenticated){
		this.authenticated = authenticated;
	}
	getAuth(authenticated){
		this.authenticated = authenticated;
	}
}
export default AuthService
