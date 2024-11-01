import { Carousel } from "@/components/carousel";
import { Partone } from "@/components/partone";
import { Partthree } from "@/components/partthree";
import { Parttwo } from "@/components/partwo";
import Image from "next/image";
import { Blogs } from "@/components/blogs";

export default function Home() {
  return (
    <>
      <div className="container">
        <Partone />
        <Parttwo />
        <Blogs></Blogs>
      </div>
    </>
  );
}
