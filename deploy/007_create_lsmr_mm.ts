import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { deployConfig } from '../utils/deployConfig';
import { web3 } from 'hardhat';
import Decimal from 'decimal.js-light';
Decimal.config({ precision: 30 });
import { markets } from '../utils/market';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, getOrNull, log, execute } = deployments;
  const { deployer } = await getNamedAccounts();
  const conditionalToken = await getOrNull('ConditionalTokens');
  const collateralToken = await getOrNull('WETH9');
  const lmsrMarketMakerFactory = await getOrNull('LMSRMarketMakerFactory');
  const { ammFunding } = deployConfig();
  if (conditionalToken) {
    log(`reusing "ConditionalTokens" at ${conditionalToken.address}`);
    const conditionIds = markets.map(({ questionId }) =>
      web3.utils.soliditySha3(
        { t: 'address', v: deployConfig().oracle },
        { t: 'bytes32', v: questionId },
        { t: 'uint', v: 2 }
      )
    );
    await execute(
      'WETH9',
      { from: deployer, log: true, gasLimit: 1000000, value: ammFunding },
      'deposit'
    );

    await execute(
      'WETH9',
      { from: deployer, log: true, gasLimit: 1000000 },
      'approve',
      lmsrMarketMakerFactory?.address,
      ammFunding
    );

    const lmsrFactoryTx = await execute(
      'LMSRMarketMakerFactory',
      { from: deployer, log: true, gasLimit: 1000000 },
      'createLMSRMarketMaker',
      conditionalToken.address,
      collateralToken?.address,
      conditionIds,
      0,
      '0x0000000000000000000000000000000000000000',
      ammFunding
    );

    const creationLogEntry = lmsrFactoryTx!.events!.find(
      ({ event }) => event === 'LMSRMarketMakerCreation'
    );

    if (!creationLogEntry) {
      // eslint-disable-next-line
      console.error(JSON.stringify(lmsrFactoryTx, null, 2));
      throw new Error(
        'No LMSRMarketMakerCreation Event fired. Please check the TX above.\nPossible causes for failure:\n- ABIs outdated. Delete the build/ folder\n- Transaction failure\n- Unfunded LMSR'
      );
    }
  }
};
export default func;
func.tags = ['CreateLSMRMM'];
