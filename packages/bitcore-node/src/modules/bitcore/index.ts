import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from '..';
import { AUDAXStateProvider } from '../../providers/chain-state/audax/audax';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class AUDAXModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('AUDAX', 'bitcore-audax-lib', 'bitcore-audax2-p2p');
    services.P2P.register('AUDAX', BitcoinP2PWorker);
    services.CSP.registerService('AUDAX', new AUDAXStateProvider());
    services.Verification.register('AUDAX', VerificationPeer);
  }
}
