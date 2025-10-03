import { useProducs } from "@/hooks/home";

type Props = {};

const HomePage = (props: Props) => {
  const { data: productLists, isLoading } = useProducs();

  if (isLoading) {
    return <>Isloading...</>;
  } else {
    console.log("productLists", productLists);
  }

  return <div>index</div>;
};

export default HomePage;
