import EpubService from '../services/epubService.js';

export const parseEpub = async (req, res) => {
  try {
    const id = req.params.id;
    await EpubService.parseEpub(id);
    res.status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error parsing Epub' });
  }
};
