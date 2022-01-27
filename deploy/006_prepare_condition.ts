import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { deployConfig } from '../utils/deployConfig';
import { markets } from '../utils/market';
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, getOrNull, log, execute } = deployments;
  const { deployer } = await getNamedAccounts();
  const conditionalToken = await getOrNull('ConditionalTokens');
  if (conditionalToken) {
    log(`reusing "ConditionalTokens" at ${conditionalToken.address}`);
    for (const { questionId } of markets) {
      await execute(
        'ConditionalTokens',
        { from: deployer, log: true, gasLimit: 1000000 },
        'prepareCondition',
        deployConfig().oracle,
        questionId,
        2
      );
    }
  }
};
export default func;
func.tags = ['PrepareConditions'];
