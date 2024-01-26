import Web3 from "web3";
import store from "../app/redux/ReduxStore";
import { setEthAccount } from "../app/redux/ReduxSlices";
import { getUserNamePicByEthAddress } from "../apis/profile.apis";

export const WalletInstance = window.ethereum || "";

export const Connect = async () => {
  if (WalletInstance) {
    try {
      const web3 = new Web3(window.ethereum);

      await window.ethereum.enable();

      const EthAccounts = await web3.eth.getAccounts();

      if (EthAccounts.length > 0) {
        const EthAccountBalanceInWei = await web3.eth.getBalance(
          EthAccounts[0]
        );

        const Balance = web3.utils.fromWei(EthAccountBalanceInWei, "ether");

        const userProfile = await getUserNamePicByEthAddress(EthAccounts[0]);

        store.dispatch(
          setEthAccount({
            isConnect: true,
            account: EthAccounts[0],
            balance: Balance,
            userName: userProfile.userName ?? "",
            userAvatar: userProfile.userProfile ?? "",
          })
        );

        // nullish coalescing operator { ?? } provide default values when the properties are null or undefined

        localStorage.setItem("IsMetamaskConnect", "true");
      } else {
        console.log("No account available ");
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  } else {
    return false;
  }
};
