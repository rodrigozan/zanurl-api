import { Request, Response } from 'express';
import shortid from 'shortid';
import dotenv from 'dotenv';

import { UrlConverterService } from '../services/UrlConverterService';

dotenv.config();

const service = UrlConverterService;

class UrlConverter {
  /**
   * Shortens a given URL and returns the shortened URL.
   * @param req - The request object.
   * @param res - The response object.
   * @returns The response object with the shortened URL.
   */
  public async shorten(req: Request, res: Response): Promise<Response> {
    const { url } = req.body;

    if (!url) { return res.status(400).json({ error: 'URL not provided' }); }

    const id = shortid.generate();
    const shortUrl = `/${id}`;

    await service.saveUrl(url, shortUrl);

    return res.status(200).json({ shortUrl });
  }

  /**
   * Redirects to the original URL based on the provided ID.
   * @param req - The request object.
   * @param res - The response object.
   */
  public async redirect(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    if (typeof id !== 'string') {
      res.status(400).json({ error: 'Invalid ID format' });
      return;
    }

    const url = service.findUrl(id)
    console.log(url)

    // if (!url) {
    //   res.status(404).json({ error: 'URL not found' });
    //   return;
    // }

    // res.redirect(url);
  }
}

export default new UrlConverter();