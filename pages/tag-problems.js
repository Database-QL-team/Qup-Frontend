import Layout from "../components/Layout/Layout";
import Title from "../components/ui/Title";
import { tagProblemData } from "../const/tagProblemData";
import TagMainProblemTable from "../components/TagProblemPage/TagMainProblemTable";

const TagProblems = () => {
  return (
    <Layout>
      <Title sentence={"- 분류별 벗들이 안 푼 문제 -"} />
      <TagMainProblemTable problems={tagProblemData} />
    </Layout>
  );
};

export default TagProblems;
