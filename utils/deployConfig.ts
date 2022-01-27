export const deployConfig = () => ({
  ammFunding: process.env.REACT_APP_FUNDING || '1' + '0'.repeat(18),
  oracle: process.env.REACT_APP_ORACLE_ADDRESS || '0x76Ec3E390d68bABf545539aF3eD4f548505f9Ffe',
});
