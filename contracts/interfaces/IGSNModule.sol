pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


contract IGSNModule {
  function acceptRelayedCall(
    address /* relay */,
    address /* from */,
    bytes memory /* encodedFunction */,
    uint256 /* transactionFee */,
    uint256 /* gasPrice */,
    uint256 /* gasLimit */,
    uint256 /* nonce */,
    bytes memory /* approvalData */,
    uint256 /* maxPossibleCharge */
  ) public  pure  returns (uint256 doCall, bytes memory);
  function preRelayedCall(bytes memory /* context */) public  pure    returns (bytes32) { }
  function postRelayedCall(bytes memory /* context */, bool /* success */, uint256 /* actualCharge */, bytes32 /* preRetVal */) public  pure  ;
}
