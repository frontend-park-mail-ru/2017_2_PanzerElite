import UserService from "../services/user-service";

let userService = new UserService();

function routeValidate(href, router, savehistory) {
	userService.whoami()
		.then(() => {
			analyseHref(href, true, router, savehistory);
		})
		.catch(error => {
			analyseHref(href, false, router, savehistory);
		});
}

function analyseHref(href, isLogged, router, savehistory) {
	if (isLogged) {
		["/register/", "/login/"].includes(href) ? router.go("/menu/", savehistory) : router.go(href, savehistory);
	} else {
		["/register/", "/login/"].includes(href) ? router.go(href, savehistory) : router.go("/login/", savehistory);
	}
}

export default routeValidate;