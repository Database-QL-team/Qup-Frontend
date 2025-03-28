import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { Button } from "./RefreshButton.styled";
import { loginApi } from "../../../apis/loginApi";
import { refreshApi } from "../../../apis/refreshApi";
import { getCookie, setCookie } from "../../../utils/cookie";

const RefreshButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async (handle: string) => {
    setIsLoading(true);
    const success = await refreshApi(handle);
    setIsLoading(false);

    if (success) {
      alert("리프레시!");
    } else {
      alert("리프레시 실패. 다시 시도해주세요.");
    }
  };

  const handleLogin = async (): Promise<string | null> => {
    const handle = prompt(
      "핸들을 입력해주세요. 리프레시 버튼을 누르면 벗의 푼 문제 업데이트가 진행 및 반영됩니다.\n( 처음 한 번만 입력하면 만료될 때까지 다시 입력하지 않으셔도 됩니다. )"
    );

    if (!handle) {
      alert("핸들을 입력하지 않았습니다.");
      return null;
    }

    setIsLoading(true);
    const success = await loginApi(handle);
    setIsLoading(false);

    if (success) {
      setCookie("handle", handle, 7); // 7일간 유효
      alert("핸들이 7일간 저장됩니다.");
      //await handleRefresh(handle);
      return handle;
    } else {
      alert("handle 입력이 정확하지 않은 것 같아요ㅠ (이화인만 가능 / 백준에서 이화여대 단체 등록을 확인해주세요. )");
      return null;
    }
  };


  const handleRefreshButtonClick = async () => {
    let handle = getCookie("handle");
    if (!handle) {
      handle = await handleLogin();
    }

    if (handle) {
      await handleRefresh(handle);
    }
  };

  return (
    <Button onClick={handleRefreshButtonClick}>
      {isLoading ? "..." : <FaSyncAlt />}
    </Button>
  );
};

export default RefreshButton;