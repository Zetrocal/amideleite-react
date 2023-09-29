import { getCategoryFromProduct } from "../data/products/ProductsInfo";

export async function getProductInfo(productId: string) {
	const categoryCode = productId ? productId.slice(0, 2) : "";
	const categoryProducts = getCategoryFromProduct(categoryCode);
	const productInfo = categoryProducts ? categoryProducts[productId] : null;
	if (!productInfo) return null;
	return productInfo;
}
