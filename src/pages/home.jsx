import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../lib/sanity.client'
import { Image } from 'react-img-placeholder';

function HomePage() {
  const [cerita, setCerita] = useState([]);


  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setCerita(data.slice(0, 3));
      })
      .catch(console.error);
  }, []);
  if (!cerita === null) {
    return <h2>Loading posts...</h2>;
  }

	return (
		<div className="home_section">
			<h1>Blog Page</h1>
			<p>Welcome to blog page</p>

        {cerita.map((blog) => (
          <article className="card_grid" key={blog.slug.current}>
            <div className="boxBlog">
              {blog.mainImage && (
                <Image
                  src={blog.mainImage.asset.url}
                  alt={blog.mainImage.alt}
                  loading="lazy"
                  height={300}
                  width={300}
                  placeholderColor="pink"
                  className="styleImg"
                />
              )}
              <div className="flexCenter">
                <div className="boxContent">
                  <div className="blogTitle">{blog.title}</div>
                  <div className="blogDesc">
                    {`${blog.body[0].children[0].text.substring(0, 80)}...`}
                  </div>
                  </div>
                  <div className="btnReadBlog">Read More</div>
                </div>
              </div>
          </article>
        ))}
		</div>
		);
};

export default HomePage;