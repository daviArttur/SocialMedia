import { Post } from "@/domain/interfaces"
import { getPhotos } from "@/domain/useCase/getPhotos"
import Layout from "@/ui/components/Layout"
import { PostCard } from "@/ui/components/post/card/"
import { PostContainer } from "@/ui/components/post/container"
import { NextPage } from "next"
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react"
import CSS from "../ui/styles/pages/styles"

export async function getStaticProps() {
  const response = await new getPhotos(1, 6).exec();
  const data = response.data;

  if (data) {
    return {
      props: {
        posts: data,
      },
      revalidate: 10
    }
  }
}

interface Props {
  posts: Post[],
}

export default function Home({ posts }: Props) {

  const [pages, setPages] = useState([2]);
  const [infinite, setInfinite] = useState(true);
  const wait = useRef(false)

  useEffect(() => {
    function handleScroll() {
      if (infinite) {
        const height =
          document.body.offsetHeight - document.documentElement.clientHeight;
        const scroll = window.scrollY;
        if (scroll > height * 0.85 && !wait.current) {
          wait.current = true;
          setPages(() => [...pages, pages[pages.length - 1] + 1]);
          setTimeout(() => (wait.current = false), 2000);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [pages, infinite]);

  return (
    <CSS.mainContainer onClick={(ev) => console.log(ev.target)}>
      {
        posts && (
          <CSS.Wrapper>
            { posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
          </CSS.Wrapper>
        ) 
      }
      {
        pages[1] && pages.map((index, i) => (
            <PostContainer infinite={setInfinite} key={index} index={index} />
        ))
      }
    </CSS.mainContainer>
  )
}

Home.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}