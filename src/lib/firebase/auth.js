// * 所有 Firebase API 代码都封装在 src/lib/firebase 目录中。
// * 然后，各个 React 组件会从 src/lib/firebase 目录导入封装的函数，
// * 而不是直接导入 Firebase Functions 函数。

import {
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase/clientApp";

export function onAuthStateChanged(cb) {
	return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();

	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.error("Error signing in with Google", error);
	}
}

export async function signOut() {
	try {
		return auth.signOut();
	} catch (error) {
		console.error("Error signing out with Google", error);
	}
}
