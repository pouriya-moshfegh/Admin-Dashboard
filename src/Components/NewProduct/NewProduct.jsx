import { useState } from "react";
import "./newProduct.css";
import Input from "./Inputs";

export default function NewProduct() {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [imageAdress, setImageAdress] = useState("");
  const [colorsValue, setColorsValue] = useState("");
  const [productId, setProductId] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let mainProduct = {
      title: nameValue,
      price: priceValue,
      img: imageAdress,
      count:quantityValue,
      popularity:quantityValue,
      sale:quantityValue,
      colors:colorsValue
    };

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(mainProduct),
    })
      .then((res) => console.log("fisrt",res))
      .then((res) => console.log("second",res));
  };
  return (
    <section className="box-container">
      <h2 className="text-xl uppercase font-medium">Add product</h2>
      <form
        onSubmit={submitHandler}
        action="#"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2 py-4"
      >
        {/* _____ name _____ */}
        <Input title="name" value={nameValue} setValue={setNameValue} />

        {/* _____ price _____ */}
        <Input
          type="number"
          title="price"
          value={priceValue}
          setValue={setPriceValue}
        />

        {/* _____ quantity _____ */}
        <Input
          type="number"
          title="quantity"
          value={quantityValue}
          setValue={setQuantityValue}
        />
        {/* _____ image _____ */}
        <Input
          title="image address"
          value={imageAdress}
          setValue={setImageAdress}
        />
        {/* _____ rate _____ */}
        <Input title="id" value={productId} setValue={setProductId} />
        {/* _____ image _____ */}
        <Input title="colors" value={colorsValue} setValue={setColorsValue} />
        <button
          type="submit"
          className="md:col-span-2 product-input bg-secondary hover:bg-secondary/80 duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
