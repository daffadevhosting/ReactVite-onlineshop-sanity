import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { sanityClient } from '../../../lib/sanity.client'
import { Image } from 'react-img-placeholder';
import { PortableText } from "@portabletext/react";


function ProductSection() {
  const [products, setProducts] = useState([null]);
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(undefined);

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
            title,
            price,
            sizes,
            colors,
            slug,
            body,
            publishedAt,
        "imageUrl": images[].asset->url,
        "name": author -> name,
      }`
      )
      .then((data) => {
        setProducts(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  }

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  }

  if (!products) {
    return <div className="loadingProduk">Loading...</div>;
  }

  return (
    <section className="produkGrid">
      {products ? (
        <>
        <div className="imageSection">
          {products.imageUrl && (
            <Image
              className="imgProduk"
              src={products.imageUrl}
              alt={products.imageUrl.alt}
              loading="lazy"
              height={300}
              width={300}
              placeholderColor="pink"
            />
          )}
          </div>
          <div className="detailSection">
          <h2 className="textJudul">{products.title}</h2>
          <p className="textHarga">Harga: Rp.{products.price}</p>
          {products.sizes && (
            <p>Ukuran: {products.sizes.join(', ')}</p>
          )}
          {products.colors && (
            <p>Warna: {products.colors.join(', ')}</p>
          )}

          {products.sizes && (
            <div>
              <label htmlFor="sizes">Pilih Ukuran:</label>
              <select name="sizes" id="sizes" value={selectedSize} onChange={handleSizeChange}>
                <option value="">Ukuran</option>
                {products.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}
          {products.colors && (
            <div>
              <label htmlFor="colors">Pilih Warna:</label>
              <select name="colors" id="colors" value={selectedColor} onChange={handleColorChange}>
                <option value="">Warna</option>
                {products.colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          )}
          <PortableText value={products.body} />
          <p className="author">
            Penjual: {products.name}{" "} pada {new Date(products.publishedAt).toLocaleDateString()}
          </p>
          <button>Masuk Keranjang</button>
          </div>
        </>
      ) : (
        <div className="loadingProduk">Loading...</div>
      )}
    </section>
  );
}

export default ProductSection;
