import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { isTestNetwork } from '../utils/network';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, execute, getOrNull, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const lpToken = await getOrNull('ConditionalTokens');
  if (lpToken) {
    log(`reusing "ConditionalTokens" at ${lpToken.address}`);
  } else {
    await deploy('ConditionalTokens', {
      from: deployer,
      log: true,
      skipIfAlreadyDeployed: true,
    });
  }
};
export default func;
func.tags = ['ConditionalTokens'];
