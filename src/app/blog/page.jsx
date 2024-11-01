"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { BlogCard } from "@/components/blog-card";

const BlogPage = ({ searchParams }) => {
  const { q = "", page = 1 } = searchParams;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://next-mock-api.vercel.app/api/posts?size=12&page=${page}&q=${q}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q, page]);

  if (loading) return <p className="container">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="container">
      <h1 className="text-[#181A2A] font-bold text-2xl mb-12">
        {q ? `"${q}" - search results` : "All blog posts"}
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogCard post={item} />
          </Link>
        ))}
      </div>
      <nav
        aria-label="Page navigation example"
        className="flex justify-center my-10"
      >
        <ul className="inline-flex -space-x-px text-sm">
          {Array.from({ length: data.pageInfo.totalPages }).map((_, index) => (
            <li key={index}>
              <Link
                href={`?page=${index + 1}${
                  q ? `&q=${encodeURIComponent(q)}` : ""
                }`}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  index + 1 === data.pageInfo.page
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 bg-white"
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                aria-current={
                  index + 1 === data.pageInfo.page ? "page" : undefined
                }
              >
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default BlogPage;
