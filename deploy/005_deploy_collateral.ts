import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, getOrNull, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const wETH = await getOrNull('WETH9');
  if (wETH) {
    log(`reusing "WETH9" at ${wETH.address}`);
  } else {
    await deploy('WETH9', {
      from: deployer,
      log: true,
      skipIfAlreadyDeployed: true,
    });
  }
};
export default func;
func.tags = ['WETH9'];
