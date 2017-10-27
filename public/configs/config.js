const PREFIX_URL = "https://salty-shelf-19870.herokuapp.com/api/user/";
// const PREFIX_URL = "http://127.0.0.1:8080/api/user/";

const urls = {
	login: PREFIX_URL + "login",
	register: PREFIX_URL + "register",
	logout: PREFIX_URL + "logout",
	check: PREFIX_URL + "getuser",
	chagePassword: PREFIX_URL + "changepassword"
};
const GET = "GET";
const POST = "POST";

export default urls;
export { GET, POST };