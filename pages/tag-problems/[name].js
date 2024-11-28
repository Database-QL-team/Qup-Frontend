import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { tagApi } from "../../apis/tagApi";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/ui/Title";
import TagDetailProblemTable from "../../components/TagProblemPage/TagDetailProblemTable";

const tagProblemsDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await tagApi(name);
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setError("데이터를 불러오는 중 에러가 발생했습니다.");
        setIsLoading(false);
      }
    };

    if (name) {
      fetchData();
    }
  }, [name]);

  return (
    <Layout>
      <Title sentence={`- ${name} -`} />
      {isLoading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TagDetailProblemTable ProblemData={data} />
      )}
    </Layout>
  );
};

export default tagProblemsDetail;
