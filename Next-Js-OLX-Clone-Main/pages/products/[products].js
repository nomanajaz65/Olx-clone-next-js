import { useRouter } from "next/router";
import { Fragment } from "react";
import ProductPage from "../../components/Items/ProductPage";
import { getProductById } from "../../components/Body/utils";
import NotFound from "../../components/Items/NotFound";

export default function Products() {
  const router = useRouter();

  const productId = router.query.products;
  const product = getProductById(productId);

  if (!product) {
    return <NotFound />;
  }
  return (
    <Fragment>
      <ProductPage
        mainCategory={product.mainCategory}
        productType={product.productType}
        shortDescription={product.shortDescription}
        longDescription={product.longDescription}
        listingDate={product.listingDate}
        sellerName={product.sellerName}
        membershipDate={product.membershipDate}
        imgSrc={product.Img}
        price={product.price}
        phoneNum={product.phoneNum}
        province={product.province}
        city={product.city}
        address={product.location}
      />
    </Fragment>
  );
}
