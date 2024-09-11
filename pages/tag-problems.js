import Layout from "../components/Layout/Layout";
import Title from "../components/Title";
<<<<<<< HEAD
import ProblemTable from "../components/ProblemPage/ProblemTable";

const tagProblemData = [
  { name: "다이나믹 프로그래밍", count: 6180 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
=======
import TagMainProblemTable from "../components/TagProblemPage/TagMainProblemTable";

const tagProblemData = [
  { name: "math" },
  { name: "implementation" },
  { name: "greedy" },
  { name: "string" },
  { name: "data_structures" },
  { name: "graphs" },
  { name: "dp" },
  { name: "geometry" },
>>>>>>> newcode/#0
];

const TagProblems = () => {
  return (
    <Layout>
      <Title sentence={"- 분류별 벗들이 안 푼 문제 -"} />
<<<<<<< HEAD
      <ProblemTable problems={tagProblemData} />
=======
      <TagMainProblemTable problems={tagProblemData} />
>>>>>>> newcode/#0
    </Layout>
  );
};

export default TagProblems;
