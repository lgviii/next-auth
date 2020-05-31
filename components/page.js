import Head from "next/head";
import Header from "../components/header";

const Page = (props) => {
  return (
    <div>
      <Head>
        <title>Auth App</title>
        <link rel="icon" href="./lock.jpg" />
      </Head>
      <Header />
      {props.children}
    </div>
  );
};

export default Page;
