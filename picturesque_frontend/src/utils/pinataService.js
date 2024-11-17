import { PinataSDK } from "pinata-web3";
import { pinataConfig } from "./pinata.config";

const pinata = new PinataSDK(pinataConfig);

export async function uploadToPinata(file) {
  try {
    const upload = await pinata.upload.file(file);
    return upload;
  } catch (error) {
    throw new Error("Upload failed");
  }
}