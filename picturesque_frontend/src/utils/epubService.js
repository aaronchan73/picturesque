import { store } from '../redux/store';
import { addBook } from '../redux/slices/bookSlice';

export async function processEpub(ipfsHash) {
    const apiUrl = `http://127.0.0.1:5000/epub/${ipfsHash}`;
    
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {},
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      
      // Dispatch to Redux store
      store.dispatch(addBook({
        title: data.title,
        author: data.author,
        data: data.data
      }));

      return data;
    } catch (error) {
      console.error("Error processing epub:", error);
      throw error;
    }
  }