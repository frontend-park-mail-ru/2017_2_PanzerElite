import routeValidate from "./RouteValidate";
class Router {
	constructor() {
		window.onpopstate = (event) => {
			//this.go(document.location.pathname);
			routeValidate(document.location.pathname, this, false);
		};
	}

	init(node, config) {
		this.views = config;
		this.node = node;
		this.currentHref = null;
	}

	startListen() {
		this.node.addEventListener("click", event => this._onRouteChange(event));
	}

	go(href, saveHistory = true) {
		if (saveHistory) {
			window.history.pushState({ path: href }, "", href); // for -> <-
		}
		if (href !== this.currentHref) {
			this.views[href].view.show();
			if (this.currentHref !== null) {
				this.views[this.currentHref].view.hide();
			}
			this.currentHref = href;
		}
	}

	_onRouteChange(event) {
		if (event.target instanceof HTMLAnchorElement) {
			event.preventDefault();
			this.go(event.target.getAttribute("href"));
		}
	}
}

export default new Router();