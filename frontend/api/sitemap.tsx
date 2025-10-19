import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Path to your sitemap.xml file
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  try {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');

    // THIS IS THE KEY PART
    res.setHeader('Content-Type', 'application/xml'); 
    res.status(200).send(sitemap); // send the XML content
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading sitemap');
  }
}
