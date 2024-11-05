export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Product 1", price: 100, description: "Description 1" },
        { id: 2, name: "Product 2", price: 150, description: "Description 2" },
      ]);
    }, 500);
  });
};

export const getProductById = async (id) => {
  const products = await getProducts();
  return products.find((product) => product.id === Number(id));
};