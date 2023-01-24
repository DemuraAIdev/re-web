import { FrontMatter } from "@/lib/mdx";

const generateRssItem = (post: FrontMatter) => `
  <item>
    <guid>https://vahryiskandar.my.id/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://vahryiskandar.my.id/blog/${post.slug}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>cyberaioff@gmail.com (Abdul Vaiz)</author>
    ${post.tags.map((t) => `<category>${t}</category>`).join("")}
  </item>
`;

const generateRss = (posts: FrontMatter[], page = "feed.xml") => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Vahry Iskandar</title>
      <link>https://vahryiskandar.my.id/blog</link>
      <description>I am a website developer, bot, graphic designer, and nft artist. I learned to make a website from 2019</description>
      <language>en-US</language>
      <managingEditor>cyberaioff@gmail.com (Abdul Vaiz)</managingEditor>
      <webMaster>cyberaioff@gmail.com (Abdul Vaiz)</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://vahryiskandar.my.id/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;
export default generateRss;