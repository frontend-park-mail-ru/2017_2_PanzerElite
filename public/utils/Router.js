class Router {
    constructor() {

    }

    init(node, config) {
        this.views = config;
        this.node = node;
        this.currentHref = "/login"; //пока что так Дес не психуй
    }

    startListen() {
        this.node.addEventListener('click', event => this._onRouteChange(event));
    }

    go(href) {
        window.history.pushState({ path: href }, '', href); // for -> <-
        if (href !== this.currentHref) {
            this.views[href].view.show();
            this.views[this.currentHref].view.hide();
            this.currentHref = href;
        }
    }

    _onRouteChange(event) {
        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            this.go(event.target.getAttribute('href'));
        }
    }
}

export default new Router();