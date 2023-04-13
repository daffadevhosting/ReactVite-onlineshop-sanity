import React, { useState, useEffect } from 'react'
import { sanityClient } from '../../lib/sanity.client'
import { Link } from 'react-router-dom'
import { Image } from 'react-img-placeholder';

function ProductSection() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "produk"]{
        _id,
        title,
        price,
        slug,
        "imageUrl": images[0].asset->url
      }`).then((data) => {
      setProducts(data)
    }).catch((error) => {
      console.error(error)
    })
  }, []);

  if (!products) {
    return <div className="loadingProduk">Loading...</div>;
  }

  return (
    <section>
      <h2>Our Products</h2>
      <div className="grid_product">
        {products.map((product) => (
          <div key={product._id} className="box_grid">
            {product.imageUrl && (
              <Image className="cover"
                src={product.imageUrl}
                alt={product.title}
                loading="lazy"
                height={300}
                width={'100%'}
                placeholderColor="pink"
              />
            )}
            <div className="detail">
            <h3>{product.title}</h3>
            <p>Rp. {product.price}</p>
            </div>
            <Link to={`/products/${product.slug.current}`} key={product.slug.current}>
            <span className="link_beli">Lihat Detail
            </span></Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductSection

