

/**
 * 
 * States are 10 bit numbers
 * 
 * The 2 most significant bits refer to the "access level"
 *  00 = logged out
 *  01 = member logged in
 *  02 = moderator logged in
 *  03 = admin logged in
 * 
 * The 8 lower bits refer to the state or sub state
 */

const loggedOut =     0b0000000000
const memberLogIn =   0b0100000000
const modLoggedIn =   0b1000000000
const adminLoggedIn = 0b1100000000
const inactive =        0b00000000
const comPage =         0b00000001
const loginPage =       0b00000010
const regPage =         0b00000011
const pwResetPage =     0b00000100
const settingsPage =    0b00000101
const modPage =         0b00000110
const reportPage =      0b00000111



export enum STATE {
    EXTENSION_INACTIVE =    loggedOut | inactive,
    COMMENTS_LOGGED_OUT =   loggedOut | comPage,
    LOGIN =                 loggedOut | loginPage,
    REGISTER =              loggedOut | regPage,
    PW_RESET =              loggedOut | pwResetPage,
    COMMENTS_MEMBER =       memberLogIn | comPage,
    SETTINGS_MEMBER =       memberLogIn | settingsPage,
    COMMENTS_MODERATOR =    modLoggedIn | comPage,
    MODERATION_MODERATOR =  modLoggedIn | modPage,
    SETTINGS_MODERATOR =    modLoggedIn | settingsPage,
    COMMENTS_ADMIN =        adminLoggedIn | comPage,
    SETTINGS_ADMIN =        adminLoggedIn | settingsPage,
    REPORTS_ADMIN =         adminLoggedIn | reportPage,
    MODERATION_ADMIN =      adminLoggedIn | modPage
}

const maskState =  0b1100000000
const maskAccess = 0b0011111111

export const StateChecks = {
    isLoggedIn(state:STATE) {
        return (state & maskState) != loggedOut
    },
    isMember(state:STATE) {
        return (state & maskState) == memberLogIn
    },
    isMod(state:STATE) {
        return (state & maskState) == modLoggedIn
    },
    isAdmin(state:STATE) {
        return (state & maskState) == adminLoggedIn
    },
    isOnCommentsPage(state:STATE) {
        return (state & maskAccess) == comPage
    },
    isOnSettingsPage(state:STATE) {
        return (state & maskAccess) == settingsPage
    },
    isOnLoginPage(state:STATE) {
        return (state & maskAccess) == loginPage
    },
    isOnRegPage(state:STATE) {
        return (state & maskAccess) == regPage
    },
    isOnPWResetPage(state:STATE) { 
        return (state & maskAccess) == pwResetPage
    },
    isOnModPage(state:STATE) {
        return (state & maskAccess) == modPage
    },
    isOnReportsPage(state:STATE) {
        return (state & maskAccess) == reportPage
    }
}