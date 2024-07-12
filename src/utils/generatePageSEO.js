import Script from "next/script";

function addPageJsonLd(slug, title, description) {
  return {
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "author": {
        "@type": "Person",
        "name": "Adem Selita",
        "image": {
          "@type": "ImageObject",
          "url": "https://cdn.sanity.io/images/hr3nk4qn/production/dcb3be7abfc4596d1ac9e77885394e2c78934736-200x200.webp?w=30",
          "width": "30",
          "height": "30"
        }
      },
      "articleSection": "Debt Relief",
      "dateModified": "2021-10-11T19:22:00.000Z",
      "datePublished": "2021-10-11T19:22:00.000Z",
      "headline": "${title}",
      "mainEntityOfPage": {
        "@id": "${`https://www.thedebtreliefcompany.com/${slug}`}",
        "@type": "itemPage",
        "url": "${`https://www.thedebtreliefcompany.com/${slug}`}"
      },
      "description": "${description}",
      "url": "${`https://www.thedebtreliefcompany.com/${slug}`}",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png",
        "width": "512",
        "height": "512"
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



const generatePageSEO = (slug, title, description, type) => {
  return (
   <>
    <meta name="description" content={description}/>
    <link rel="canonical" href={`https://www.thedebtreliefcompany.com/${slug}`}/>
    <meta name="robots" content="index"/>
    <meta property="og:title" content={`${title}`}/>
    <meta property="og:description" content={`${description}`}/>
    <meta property="og:image" content="https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"/>
    <meta property="og:image:width" content="457"/>
    <meta property="og:image:height" content="256"/>
    <meta property="og:url" content={`https://www.thedebtreliefcompany.com/${slug}`}/>
    <meta property="og:site_name" content="Debt Relief Company"/>
    <meta property="og:type" content="website"/>
    
    {type === 'article' &&
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addPageJsonLd(slug, title, description)}
          key="page-jsonld"
      />
    }
    <link rel="alternate" href={`https://www.thedebtreliefcompany.com/${slug}`} hrefLang="x-default"/>
    <link rel="alternate" href={`https://www.thedebtreliefcompany.com/${slug}`} hrefLang="en-us"/>
    <meta name="fb_admins_meta_tag" content="thedebtreliefcompany"/>
    <meta name="google-site-verification" content="2OKIukogdkZURrWxVcDHG-tDZVcNw6CZejQpbR2KCdM"/>
    <meta property="fb:admins" content="thedebtreliefcompany"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={`${title}`}/>
    <meta name="twitter:description" content={`${description}`}/>
    <meta name="twitter:image" content="https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"/>
  </>
  );
}

export default generatePageSEO;