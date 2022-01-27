import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { isTestNetwork } from '../utils/network';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, execute, getOrNull, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const fixedMath = await getOrNull('Fixed192x64Math');
  if (fixedMath) {
    log(`reusing "Fixed192x64Math" at ${fixedMath.address}`);
  } else {
    await deploy('Fixed192x64Math', {
      from: deployer,
      log: true,
      skipIfAlreadyDeployed: true,
    });
  }
};
export default func;
func.tags = ['Fixed192x64Math'];
