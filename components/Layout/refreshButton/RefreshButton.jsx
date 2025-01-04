import React from "react";
import { FaSync } from "react-icons/fa";
import { Button } from "./RefreshButton.styled";

const RefreshButton = () => {
  const handleRefresh = () => {
    prompt(
      "리프레시 버튼을 누르면 벗의 푼 문제 업데이트가 진행 및 반영됩니다. \n( 처음 한 번만 입력하면 만료될 때까지 다시 입력하지 않으셔도 됩니다. )"
    );
  };

  return (
    <Button onClick={handleRefresh}>
      <FaSync />
    </Button>
  );
};

export default RefreshButton;
