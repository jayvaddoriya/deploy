import React, { useState } from 'react'
import styled from 'styled-components';
import client from '../../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import Head from 'next/head';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  Instagram,
  InstagramShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <ProseImage
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(1200).height(627).fit('max').auto('format')}
        />
      )
    },
  }
}

const Post = ({ post }) => {

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    slug = { current: '' },
    metaDescription,
    authorImage,
    mainImage,
    body = []
  } = post;

  return (
    <Article>
      <ShareWrapper>
        <ShareTitle>Share</ShareTitle>
        <FacebookShareButton
          url={`https://www.thedebtreliefcompany.com/post/${slug.current}`}
          quote={metaDescription}
          hashtag={'#debtreliefco'}
        >
          <FacebookIcon size={42} />
        </FacebookShareButton>
        <LinkedinShareButton url={`https://www.thedebtreliefcompany.com/post/${slug.current}`}>
          <LinkedinIcon size={42} />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`https://www.thedebtreliefcompany.com/post/${slug.current}`}
          title={metaDescription}
        >
          <TwitterIcon size={42} />
        </TwitterShareButton>
      </ShareWrapper>
      <PageHeader>{title}</PageHeader>
      <AuthorInfo>
        <span>By {name}</span>
        {authorImage && (
          <div>
            <AuthorImage
              src={urlFor(authorImage).width(30).url()}
            />
          </div>
        )}
      </AuthorInfo>
      {/* {mainImage && (
        <div>
          <ProseImage src={urlFor(mainImage).width(720).url()} />
        </div>
      )} */}
      <Prose className="prose">
        <PortableText value={body} components={ptComponents} />
      </Prose>
    </Article>
  )
}

export default Post;

const Article = styled.article`
  padding: 3rem 1.5rem;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 6rem;
  }
`;

const ShareWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    position: fixed;
    right: 15%;
    top: 33.333333%;
    width: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const ShareTitle = styled.h1`
  font-size: 1.125rem;
  color: var(--main-text);
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const PageHeader = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
`;

const ProseImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
`;

const Prose = styled.div`
  font-size: 1.125rem;
  line-height: 1.75;
  max-width: 65ch;
  margin: 0 auto;
`;
