import EpubService from '../services/epubService.js';

export const parseEpub = async (req, res) => {
  try {
    await EpubService.parseEpub();
    res.status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error parsing Epub' });
  }
};
