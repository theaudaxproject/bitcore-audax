const BitcoreLibAudax = require('bitcore-audax-lib');
import { AbstractBitcoreLibDeriver } from '../btc';
export class AudaxDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLibAudax;
}
