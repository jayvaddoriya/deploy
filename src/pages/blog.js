import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import generatePageSEO from '@/utils/generatePageSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styled from 'styled-components';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f1f5f9;
  padding: 4rem 1rem 5rem;
  margin-top: -1.5rem;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem 7rem;
  }
`;

const BlogTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 4rem;
`;

const BlogGrid = styled.div`
  display: grid;
  gap: 5rem;
  /* margin-top: 3rem; */
  margin-left: auto;
  margin-right: auto;
  max-width: 28rem;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: none;
  }
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  padding: 4;
  transition: transform 300ms;
  cursor: pointer;
  width: 331px;

  &:hover {
    transform: scale(1.05);
  }
`;

const BlogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 13rem;
  justify-content: center;
`;

const BlogCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1.5rem;
  border-top: 2px solid #e2e8f0;
`;


const BlogCardDate = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #f97316;
`;

const BlogCardTitle = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #f97316;
  }
`;

const Blog = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);

  return (
    <>
      <Head>
        <title>Debt Relief Blog</title>
        {generatePageSEO(
          'blog',
          'Debt Relief Blog',
          `Thought leadership from The Debt Relief Co. Creatively crafted 
          publications on everything from personal finance to debt consolidation 
          and credit card debt help tips.`,
          'links'
        )}
      </Head>
      <BlogContainer>
        <Header className="mac-book-pro-16-4-2" />
        {/* <BlogTitle>From the blog</BlogTitle> */}
        <BlogTitle>Debt Relief Blog</BlogTitle>
        <BlogGrid>
          {posts.length > 0 &&
            posts.map(
              ({ _id, title = '', slug = '', publishedAt = '', mainImage }) =>
                slug && (
                  <Link
                    key={_id}
                    href="/post/[slug]"
                    as={`/post/${slug.current}`}
                    passHref
                  >
                    <BlogCard>
                      <BlogImageContainer>
                        <Image
                          width={331}
                          height={250}
                          src={urlFor(mainImage)
                            .width(300)
                            .height(250)
                            .crop('focalpoint')
                            .auto('format')
                            .url()}
                          alt=""
                        // objectFit="cover"
                        />
                      </BlogImageContainer>
                      <BlogCardContent>
                        <BlogCardDate>
                          <time>
                            {new Date(publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: '2-digit',
                            })}
                          </time>
                        </BlogCardDate>
                        <BlogCardTitle>{title.substring(0, 55)}{title.length > 55 && '...'}</BlogCardTitle>
                      </BlogCardContent>
                    </BlogCard>
                  </Link>
                )
            )}
        </BlogGrid>
      </BlogContainer>
      <Footer className="footer-2" />
    </>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;