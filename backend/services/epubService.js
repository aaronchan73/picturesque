import { pinata } from '../pinata.js'
import { Book } from 'epubjs'

class EpubService {
  static async parseEpub(id) {
    try {
      const epubBlob = await pinata.gateways.get(id);
      const blob = epubBlob.data;

      const buf = await blob.arrayBuffer()
      const book = new Book(buf, { openAs: 'binary' })
      console.log("BOOK", book)
      await book.opened
      const title = book.metadata.title;
      console.log("Book Title:", title);
    } catch (error) {
      throw new Error('Error parsing epub');
    }
  }
}

export default EpubService;
