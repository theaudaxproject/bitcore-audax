import { BTCStateProvider } from '../btc/btc';
import { CSP } from '../../../types/namespaces/ChainStateProvider';

export class AUDAXStateProvider extends BTCStateProvider {
  constructor(chain: string = 'AUDAX') {
    super(chain);
  }

  async getFee(params: CSP.GetEstimateSmartFeeParams) {
    const { chain, network } = params;
    return { feerate: await this.getRPC(chain, network).getEstimateFee() };
  }
}
