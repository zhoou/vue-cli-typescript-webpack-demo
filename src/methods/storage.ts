export function setLocalStorage(key: string, value: string) {
    if (!key) { return }
    window.localStorage.setItem(key, value)
}

export function getLocalStorage(key: string) {
    if (!key) { return }
    return window.localStorage.getItem(key)
}