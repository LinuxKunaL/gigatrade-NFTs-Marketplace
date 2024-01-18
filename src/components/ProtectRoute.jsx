import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectRoute({ Component }) {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const userAccountState = useSelector((state) => state.EthAccountStates);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userAccountState.isConnect) {
          Navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Navigate]);

  if (loading) {
    return <p className="h-[100dvh]">Loading...</p>;
  }

  return <Component />;
}

export default ProtectRoute;
