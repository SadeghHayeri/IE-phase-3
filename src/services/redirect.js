class RedirectService {
    static referer = null;

    static setReferer() {
        this.referer = window.location.pathname;
        console.log(this.referer);
    }

    static getReferer(defaultUrl) {
        console.log(this.referer);

        if (!this.referer)
            return defaultUrl;

        const url = this.referer;
        this.referer = null;
        return url;
    }
}

export default RedirectService;