import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { Button } from "./RefreshButton.styled";
import { loginApi } from "../../../apis/loginApi";
import { refreshApi } from "../../../apis/refreshApi";

const RefreshButton = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부 관리

  const handleLogin = async () => {
    const handle = prompt(
      "핸들을 입력해주세요. 리프레시 버튼을 누르면 벗의 푼 문제 업데이트가 진행 및 반영됩니다.\n( 처음 한 번만 입력하면 만료될 때까지 다시 입력하지 않으셔도 됩니다. )"
    );

    if (!handle) {
      alert("핸들을 입력하지 않았습니다.");
      return;
    }

    setIsLoading(true);
    const success = await loginApi(handle);
    setIsLoading(false);

    if (success) {
      alert("리프레시 시작!");
      setIsLoggedIn(true);
    } else {
      alert("다시 시도해주세요.");
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    const success = await refreshApi();
    setIsLoading(false);

    if (success) {
      alert("리프레시 시작!");
    } else {
      alert("리프레시 실패. 다시 시도해주세요.");
    }
  };

  const handleRefreshButtonClick = async () => {
    const hasCookie = document.cookie.includes("auth_token"); // 인증 쿠키 확인

    if (!hasCookie && !isLoggedIn) {
      console.log("쿠키 없음: 로그인 진행");
      await handleLogin();
    } else {
      console.log("리프레시 요청 시작");
      await handleRefresh();
    }
  };

  return (
    <Button onClick={handleRefreshButtonClick} disabled={isLoading}>
      {isLoading ? "..." : <FaSyncAlt />}
    </Button>
  );
};

export default RefreshButton;
