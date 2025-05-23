import Image from "next/image";

const Error = ({ error }: ErrorPropsType) => {
  return (
    <div className="container-center w-full gap-5 flex-col pb-10">
      <Image src="/error.png" alt="error" width={40} height={40} />
      <h1 className="error-gradient text-4xl text-center">{error}</h1>
    </div>
  );
};

type ErrorPropsType = {
  error: string;
};

export default Error;
