## creating nft in smart contract : 23 - dec - 23

### make SOL file

### Import openzeppelin lib and Ownable

    ```solidity

    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
    import "@openzeppelin/contracts/access/Ownable.sol";
    ```

### make contract with constructor

````solidity

 contract MyNFT is ERC721, Ownable {
     constructor() ERC721("MyNFT", "MNFT") {}
 }
 ```
````
