import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, getOrNull, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const lmsrMarketMakerFactory = await getOrNull('LMSRMarketMakerFactory');
  if (lmsrMarketMakerFactory) {
    log(`reusing "LMSRMarketMakerFactory" at ${lmsrMarketMakerFactory.address}`);
  } else {
    await deploy('LMSRMarketMakerFactory', {
      from: deployer,
      log: true,
      libraries: {
        Fixed192x64Math: (await get('Fixed192x64Math')).address,
      },
      skipIfAlreadyDeployed: true,
    });
  }
};
export default func;
func.tags = ['LMSRMarketMakerFactory'];
