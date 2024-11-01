import { BlogCard } from "@/components/blog-card";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


// export async function generateMetadata({ params }) {
//   const id = (await params).id;

//   const post = await fetch(
//     `https://next-mock-api.vercel.app/api/posts/${id}`
//   ).then((res) => res.json());

//   return {
//     title: post.title,
//     openGraph: {
//       image: "https://images3.alphacoders.com/132/1328547.png",
//     },
//   };
// }

const CategoryRead = async ({ params }) => {
  const { name } = params;

  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts/categories/" + name
  );
  if (response.status === 404) return notFound();
  const categoryPosts = await response.json();

  return (
    <section className="container">
      <h1 className="text-[#181A2A] font-bold text-2xl mb-12">
        {name} posts
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categoryPosts.items.map((item) => (
          <Link className="block" href={`/blog/${item.id}`} key={item.id}>
            <BlogCard post={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryRead;
