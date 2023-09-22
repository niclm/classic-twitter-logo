const replaceLogo = () => {
    const element = document.querySelector('a[aria-label="X"]')

    if (element && element.getAttribute('logo-replaced') !== 'true') {

        element.setAttribute('logo-replaced', 'true')

        element.innerHTML = `
        <svg viewBox="0 0 24 24" fill="#198cd8" xmlns="http://www.w3.org/2000/svg" style="padding: 5px;">
          <path d="M23.998 4.571a9.562 9.562 0 0 1-2.74.755A4.79 4.79 0 0 0 23.32 3.3a9.579 9.579 0 0 1-3.043 1.16 4.776 4.776 0 0 0-8.158 4.346A13.554 13.554 0 0 1 2.033 3.07a4.774 4.774 0 0 0 1.47 6.377 4.755 4.755 0 0 1-2.163-.596v.06a4.772 4.772 0 0 0 3.828 4.68 4.791 4.791 0 0 1-2.157.082 4.776 4.776 0 0 0 4.449 3.311 9.576 9.576 0 0 1-6.89 1.894 13.56 13.56 0 0 0 7.34 2.147c8.796 0 13.59-7.418 13.59-13.891 0-.21-.005-.42-.015-.628A9.964 9.964 0 0 0 24 4.573z"/>
        </svg>`

        observer.disconnect()
    }
}

const replaceFavicon = () => {
    const favicon = document.querySelector('link[rel="shortcut icon"]')

    favicon.href = 'https://abs.twimg.com/favicons/twitter.2.ico'
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            replaceFavicon()
            replaceLogo()
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
})
