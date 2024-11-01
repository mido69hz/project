import dayjs from "dayjs";
import Image from "next/image";

export const BlogCard = ({ post }) => {
  return (
    <article className="border border-[#E8E8EA] rounded-xl p-4">
      <Image
        className="rounded-md aspect-[360/240] object-cover mb-4 w-full"
        src={post.image}
        alt={post.title}
        width={360}
        height={240}
      />
      <div className="p-2">
        <div className="flex gap-4">
          {post.categories.map((category) => (
            <div
              key={category}
              className="bg-[#4B6BFB]/5 py-1 px-3 inline-block text-[#4B6BFB] text-xs rounded-md font-medium mb-4"
            >
              {category}
            </div>
          ))}
        </div>
        <p className="text-[#181A2A] text-2xl font-semibold mb-5">
          {post.title}
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image
              alt={post.authorName}
              src={post.authorImage}
              width={36}
              height={36}
              className="object-cover rounded-full aspect-square"
            />
            <p className="text-[#97989F] font-medium">{post.authorName}</p>
          </div>
          {/* August 20, 2022 */}
          <p className="text-[#97989F]">
            {dayjs(post.createdAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </div>
    </article>
  );
};
