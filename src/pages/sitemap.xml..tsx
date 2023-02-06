import { GetServerSidePropsContext } from "next";


function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://vahryiskandar.my.id</loc>
     </url>
     <url>
       <loc>https://vahryiskandar.my.id/about</loc>
     </url>
     <url>
       <loc>https://vahryiskandar.my.id/projects</loc>
     </url>
     <url>
       <loc>https://vahryiskandar.my.id/tag</loc>
     </url>
     <url>
       <loc>https://vahryiskandar.my.id/guestbook</loc>
     </url>
     <url>
       <loc>https://vahryiskandar.my.id/blog</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  return null
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;