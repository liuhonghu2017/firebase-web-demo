// * 整个应用都会使用服务器渲染。
// * 例如，src/app/page.js 文件是负责主页面的服务器组件

import RestaurantListings from "@/src/components/RestaurantListings.jsx";
import { getRestaurants } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";

// Force next.js to treat this route as server-side rendered
// Without this line, during the build process, next.js will treat this route as static and build a static HTML file for it

export const dynamic = "force-dynamic";

// This line also forces this route to be server-side rendered
// export const revalidate = 0;

export default async function Home({ searchParams }) {
	// Using seachParams which Next.js provides, allows the filtering to happen on the server-side, for example:
	// ?city=London&category=Indian&sort=Review
	const { firebaseServerApp } = await getAuthenticatedAppForUser();
	const restaurants = await getRestaurants(
		getFirestore(firebaseServerApp),
		searchParams
	);
	return (
		<main className="main__home">
			<RestaurantListings
				initialRestaurants={restaurants}
				searchParams={searchParams}
			/>
		</main>
	);
}
