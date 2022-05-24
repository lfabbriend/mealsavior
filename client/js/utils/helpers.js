import { localStorageTokenKey } from './constants.js';

/**
 * Esto devuelve true o false si el token existe en el localstorage
 */
export function isLoggedIn() {
	return !!localStorage.getItem(localStorageTokenKey);
}

/**
 * Setea el token de login
 */
export function setLoginToken(token) {
	localStorage.setItem(localStorageTokenKey, token);
}

/**
 * Remueve el token de login
 */
export function removeLoginToken() {
	localStorage.removeItem(localStorageTokenKey);
}
