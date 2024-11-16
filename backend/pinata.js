import { PinataSDK } from "pinata";
import 'dotenv/config'

export const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.GATEWAY_URL,
});
