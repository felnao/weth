import { BigInt } from "@graphprotocol/graph-ts"
import {
  WETH9,
  Approval,
  Transfer,
  Deposit,
  Withdrawal
} from "../generated/WETH9/WETH9"
import { ApprovalEntity, TransferEntity, DepositEntity, WithdrawalEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {

  let id = event.params.src
  .toHexString()
  .concat('-')
  .concat(event.logIndex.toString())

  let approval = new ApprovalEntity(id)

  
  approval.src = event.params.src
  approval.guy = event.params.guy
  approval.wad = event.params.wad

  approval.save()

}

export function handleTransfer(event: Transfer): void {

  let id = event.params.dst
  .toHexString()
  .concat('-')
  .concat(event.logIndex.toString())

let transfert = new TransferEntity(id)


  transfert.src = event.params.src
  transfert.dst = event.params.dst
  transfert.wad = event.params.wad

  transfert.save()

}

export function handleDeposit(event: Deposit): void {

  let id = event.params.dst
  .toHexString()
  .concat('-')
  .concat(event.logIndex.toString())

let deposit = new DepositEntity(id)



  
  deposit.dst = event.params.dst
  deposit.wad = event.params.wad

  deposit.save()
}

export function handleWithdrawal(event: Withdrawal): void {

  let id = event.params.src
  .toHexString()
  .concat('-')
  .concat(event.logIndex.toString())

let withdrawal = new WithdrawalEntity(id)

  withdrawal.src = event.params.src
  withdrawal.wad = event.params.wad

  withdrawal.save()

}
