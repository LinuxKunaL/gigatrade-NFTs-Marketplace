const verifyUser = () => {
  const Storage = localStorage.getItem("IsMetamaskConnect");
  console.log(Storage);
  
  if (Storage === "true") {
    console.log("user found");
    return false;
  } else {
    console.log("user not found");
    return true;
  }
};

export { verifyUser };
