import Link from "next/link";
import { BlogCard } from "./blog-card";

export const Blogs = async () => {
  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts?size=9"
  );
  const data = await response.json();

  const categoriesResponse = await fetch(
    "https://next-mock-api.vercel.app/api/posts/categories"
  );
  const categoriesData = await categoriesResponse.json();

  return (
    <section className="container">
      <p className="font-bold text-2xl mb-8">All Blog Post</p>
      <div className="flex justify-between font-bold mb-8">
        <div className="flex gap-5">
          <Link className="text-[#D4A373]" href={"/blog"}>
            All
          </Link>
          {categoriesData.map((category, index) => (
            <Link
              key={index}
              className="text-[#495057] hover:text-[#D4A373] "
              href={"/category/" + category}
            >
              {category}
            </Link>
          ))}
        </div>
        <div>
          <Link href={"/blog"}>View All</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link className="block" href={`/blog/${item.id}`} key={item.id}>
            <BlogCard post={item} />
          </Link>
        ))}
      </div>
      {/* <div className="flex justify-center items-center mb-[100px]">
        <button className="w-[123px] h-[48px] border rounded-lg flex justify-center items-center">
          Load More
        </button>
      </div> */}
    </section>
  );
};
