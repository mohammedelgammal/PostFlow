import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PostCard = ({ title, body, id }: CardPropsType) => {
  return (
    <Link href={`/posts/${id}`}>
      <Card className="max-w-[400px] relative bg-black border-none before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+3px)] before:h-[calc(100%+3px)] before:rounded-2xl cursor-pointer before:bg-linear-to-br before:from-gray-50 before:to-gray-800 hover:before:from-[#fff150] hover:before:to-gray-800 before:-z-10">
        <CardHeader>
          <CardTitle className="primary-gradient text-2xl capitalize">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 truncate first-letter:uppercase">
            {body}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

type CardPropsType = {
  title: string;
  body: string;
  id: number;
};

export default PostCard;
