import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };

  // 가격 포매팅 함수 (세 자리마다 콤마)
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card" onClick={() => showProduct(item.id)}>
      <img src={item?.img} alt={item?.title} />
      <div className={item?.choice ? "choice choice-recommended" : "choice"}>
        {item?.choice ? `♥ 추천상품 50%세일` : ""}
      </div>
      <div className="product-title">{item?.title}</div>
      <div className="product-price">₩{formatPrice(item?.price)}</div>
      <div className={item?.new ? "new-product new-product-highlight" : "new-product"}>
        {item?.new ? "신제품" : ""}
      </div>
    </div>
  );
};

export default ProductCard;
