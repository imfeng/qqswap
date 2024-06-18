import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.ARBTESTNET]: '0x6FF3f32aD4a23468439736D3Fdc8e5F15C46e106',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
