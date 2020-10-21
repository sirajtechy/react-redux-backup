
const {protocol,hostname} = window.location
const PORT = global.PORT

/**
 * globally available enviornments comes from webpack build settings .
 */
const config = {
    apiBaseUrl: `${protocol}//${hostname}:${PORT}`
}

export default config