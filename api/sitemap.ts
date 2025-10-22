import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Path to your sitemap.xml file in the built frontend
  const sitemapPath = path.join(process.cwd(), 'frontend', 'dist', 'sitemap.xml');
  
  try {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.status(200).send(sitemap);
  } catch (err) {
    console.error('Error loading sitemap:', err);
    res.status(500).json({ error: 'Error loading sitemap' });
  }
}
