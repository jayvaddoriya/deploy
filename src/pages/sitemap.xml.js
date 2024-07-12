import client from '../../client';
import groq from 'groq';

const pages = [
  { url: '/', lastmod: '2023-07-14' },
  { url: '/bankruptcy', lastmod: '2023-07-14' },
  { url: '/blog', lastmod: '2023-07-14' },
  { url: '/book-online', lastmod: '2023-07-14' },
  { url: '/contact-us', lastmod: '2023-07-14' },
  { url: '/credit-worthiness', lastmod: '2023-07-14' },
  { url: '/debt-calculator', lastmod: '2023-07-14' },
  { url: '/debt-collections', lastmod: '2023-07-14' },
  { url: '/debt-consolidation', lastmod: '2023-07-14' },
  { url: '/debt-management', lastmod: '2023-07-14' },
  { url: '/debt-relief-options', lastmod: '2023-07-14' },
  { url: '/debt-resources', lastmod: '2023-07-14' },
  { url: '/debt-to-income-ratio', lastmod: '2023-07-14' },
  { url: '/faqs', lastmod: '2023-07-14' },
  { url: '/our-company', lastmod: '2023-07-14' },
  { url: '/press', lastmod: '2023-07-14' },
  { url: '/the-drc-program', lastmod: '2023-07-14' },
];

const blogPosts = [
  { url: '/post/debt-consolidations-and-such', lastmod: '2023-06-01' },
  { url: '/post/debt-relief-and-credit-worthiness', lastmod: '2022-12-17' },
  { url: '/post/four-reasons-why-your-credit-card-balance-transfer-might-flop', lastmod: '2023-05-30' },
  { url: '/post/how-the-coronavirus-pandemic-will-impact-your-credit-worthiness', lastmod: '2023-05-30' },
  { url: '/post/how-to-take-control-back-from-your-credit-card-debt-in-2020', lastmod: '2023-06-01' },
  { url: '/post/stressed-out-by-debt-you-re-not-alone', lastmod: '2023-06-01' },
  { url: '/post/what-is-debt-relief-and-is-it-worth-the-consequences', lastmod: '2023-06-01' },
];

const allPages = [...pages, ...blogPosts];

function generateSitemap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ url, lastmod }) => {
          return `
            <url>
              <loc>https://www.thedebtreliefcompany.com${url}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

function Sitemap() {
  // getServerSideProps will do the heavy lifting
}

async function fetchDynamicPosts() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);

  return posts.map((post) => ({
    url: `/post/${post.slug.current}`,
    lastmod: post.publishedAt,
  }));
}

export async function getServerSideProps({ res }) {
  const dynamicPosts = await fetchDynamicPosts();
  const uniqueDynamicPosts = dynamicPosts.filter(
    (dynamicPost) => !blogPosts.some((blogPost) => blogPost.url === dynamicPost.url)
  );
  const allPagesWithDynamicPosts = [...allPages, ...uniqueDynamicPosts];
  const sitemap = generateSitemap(allPagesWithDynamicPosts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}


export default Sitemap;