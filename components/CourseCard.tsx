import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export default function CourseCard({ id, title, description, thumbnail }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col h-full">
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={220}
        className="rounded-xl object-cover w-full mb-3"
      />
      <h3 className="font-bold text-lg mb-1 text-sky-700">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
      <Link
        href={`/courses?id=${id}`}
        className="mt-4 inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition"
      >
        Xem chi tiết
      </Link>
    </div>
  );
}
