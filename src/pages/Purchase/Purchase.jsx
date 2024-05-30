import { useLoaderData } from "react-router-dom";

const Purchase = () => {
  const { params } = useLoaderData();
  console.log(params);
  return <div></div>;
};

export default Purchase;
