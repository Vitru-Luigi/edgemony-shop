function getProducts(setLoading, setProducts, setError, setErrorMsg) {
	setLoading(true);
	setError(false);
	fetch('https://fakestoreapi.com/products')
		.then((res) => res.json())
		.then((products) => {
			setProducts(products);
		})
		.catch((err) => {
			setError(true);
			setErrorMsg(`${err}`);
		})
		.finally(() => setLoading(false));
}

function getCategories(setLoading, setCategories, setError, setErrorMsg) {
	setLoading(true);
	setError(false);
	fetch('https://fakestoreapi.com/products/categories')
		.then((res) => res.json())
		.then((categorie) => {
			setCategories(categorie);
		})
		.catch((err) => {
			setError(true);
			setErrorMsg(`${err}`);
		})
		.finally(() => setLoading(false));
}

export {getProducts, getCategories};
