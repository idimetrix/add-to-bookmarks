declare global {
    interface Window {
        sidebar: {
            addPanel: (title: string, url: string, id?: string) => void;
        }
    }
}

/**
 * The addToBookmarks function allows you to add a specified URL to the browser's bookmarks with a given title.
 *
 * @param title
 * @param url
 */
export function addToBookmarks(title: string, url: string): void {
    if (navigator.userAgent.match(/(firefox|chrome|safari|msie|trident|edge)/i)) {
        // For Firefox and Chrome
        if (window.sidebar && window.sidebar.addPanel) {
            window.sidebar.addPanel(title, url, "");
        }
        // For Internet Explorer
        else if (window.external && "AddFavorite" in window.external) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.external.AddFavorite(url, title);
        }
        // For Safari
        else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (window.external && window.external.addToFavoritesBar) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                window.external.addToFavoritesBar(url, title, "");
            }
                // For Opera < 15
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            else if (window.opera && window.print) {
                const elem = document.createElement("a");
                elem.setAttribute("href", url);
                elem.setAttribute("title", title);
                elem.setAttribute("rel", "sidebar");
                elem.click();
            }
            // For other browsers
            else {
                alert("Please press Ctrl+D (Cmd+D for Mac) to add this page to your bookmarks.");
            }
        }
    } else {
        alert("Your browser does not support bookmarking. Please use a different browser.");
    }
}
