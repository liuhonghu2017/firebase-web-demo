const config = {
	apiKey: "AIzaSyDJcbwW-3iqqNCTR0yGtpyK0TtlTtPbe6U",
	authDomain: "fir-web-demo-f1e05.firebaseapp.com",
	projectId: "fir-web-demo-f1e05",
	storageBucket: "fir-web-demo-f1e05.appspot.com",
	messagingSenderId: "485026318421",
	appId: "1:485026318421:web:2608f5ebdd6e57780c6cdc",
};
// const config = {
// 	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
console.log("🧊 - config:", config);

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
	const configValue = config[key] + "";
	if (configValue.charAt(0) === '"') {
		config[key] = configValue.substring(1, configValue.length - 1);
	}
});

export const firebaseConfig = config;
