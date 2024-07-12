import React, { useState } from 'react';
import styled from 'styled-components';
import client from '../../../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
// import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Head from 'next/head';
import Post from '@/components/Post';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
  ManropeSemiBoldWhite16px,
} from "../../styledMixins";

const macBookPro1642Data = {
  className: "mac-book-pro-16-4-1",
};

function urlFor (source) {
  if (source) {
    return imageUrlBuilder(client).image(source).width(30).url();
  }
  else {
    return "https://cdn.sanity.io/images/hr3nk4qn/production/dcb3be7abfc4596d1ac9e77885394e2c78934736-200x200.webp?w=30"
  }
}

function urlForOpenGraph (source) {
  if (source) {
    return imageUrlBuilder(client).image(source).width(1200).height(627).fit('max').auto('format').url();
  }
  else {
    return "https://cdn.sanity.io/images/hr3nk4qn/production/6082b057106b836cefbee3813171e964dbf280db-740x494.png?w=720";
  }
}

const Slug = ({ post = {} }) => {

  const { 
    title, 
    slug = { current: '' },
    publishedAt,
    name,
    metaTitle, 
    metaDescription, 
    mainImage,
    authorImage,
    categories = ['Debt Relief'],
    estimatedTime
  } = post;

  const socialImageURL = urlForOpenGraph(mainImage);

  const authorImageURL = urlFor(authorImage);

  function addPageJsonLd(authorImageSource) {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "author": {
          "@type": "Person",
          "name": "${name}",
          "image": {
            "@type": "ImageObject",
            "url": "${authorImageURL}",
            "width": "30",
            "height": "30"
          }
        },
        "articleSection": "${categories[0]}",
        "dateModified": "${publishedAt}",
        "datePublished": "${publishedAt}",
        "headline": "${title}",
        "mainEntityOfPage": {
          "@id": "${`https://www.thedebtreliefcompany.com/post/${slug.current}`}",
          "@type": "itemPage",
          "url": "${`https://www.thedebtreliefcompany.com/post/${slug.current}`}"
        },
        "description": "${metaDescription}",
        "url": "${`https://www.thedebtreliefcompany.com/post/${slug.current}`}",
        "image": {
          "@type": "ImageObject",
          "url": "${socialImageURL}",
          "width": "1200",
          "height": "627"
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Debt Relief Company",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png" 
          }
        }
      }
  `,
    };
  }

  return (
    <div className='container-center-horizontal'>
      <Head>
        <title>{title}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:title" property="og:title" content={metaTitle} />
        <meta name="og:description" property="og:description" content={metaDescription} />
        <meta name="og:image" property="og:image" content={socialImageURL} />
        <meta name="og:url" property="og:url" content={`https://www.thedebtreliefcompany.com/post/${slug.current}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`https://www.thedebtreliefcompany.com/post/${slug.current}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@debtreliefco" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={socialImageURL} />
        <meta name="twitter:creator" content="@debtreliefco" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="The Debt Relief Co" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content={estimatedTime} />
        <meta property="article:author" content={name} />
        <meta property="article:publisher" content="https://www.facebook.com/Thedebtreliefcompany" />
        <meta property="article:modified_time" content={publishedAt} />
        <meta property="article:published_time" content={publishedAt} />
        <meta property="article:site_name" content="DebtReliefCompany" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addPageJsonLd(authorImage)}
          key="page-jsonld"
        />
      </Head>
      <Main className='screen'>
        {/* <Header className="mac-book-pro-16-4-2" /> */}
        <Header className={macBookPro1642Data.className} />
        <ContentWrapper>
          <Post post={post} />
          <Link href="/blog" passHref={true}>
            <BackToBlogLink>
              Back to Blog
            </BackToBlogLink>
          </Link>
        </ContentWrapper>
      </Main>
      <Footer className="footer-2" />
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  body,
  metaTitle,
  metaDescription,
  slug,
  publishedAt,
  estimatedTime
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    },
    revalidate: 10,
  }
}

export default Slug;



const Main = styled.main`
  color: var(--main-text);
  background-color: white;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding-top: 100px;
`;

const BackToBlogLink = styled.button`
  ${ManropeSemiBoldWhite16px}
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;
  text-decoration: none;
  width: 25%;
  max-width: 25rem;
  margin-bottom: 3rem;
  padding: 1rem 0.75rem;
  display: inline-flex;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--international-orange);
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 768px) {
    width: calc(100% - 2rem);
    max-width: 100%;
  }

`;
