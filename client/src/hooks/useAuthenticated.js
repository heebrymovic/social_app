
export const useAuthenticated = () => {

	
	return () => {

			const check = localStorage.getItem("authenticate");

			!check && localStorage.setItem("authenticate", "true")
	}

}