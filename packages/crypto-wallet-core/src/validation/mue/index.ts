import { IValidation } from '..';
const BitcoreAudax = require('bitcore-audax-lib');

export class AudaxValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const AddressAudax = BitcoreAudax.Address;
    // Regular Address: try Bitcoin AUDAX
    return AddressAudax.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URIAudax = BitcoreAudax.URI;
    // Bip21 uri
    return URIAudax.isValid(addressUri);
  }
}
