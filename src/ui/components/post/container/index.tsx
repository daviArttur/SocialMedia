
import { Post } from "@/domain/interfaces";
import { getPhotos } from "@/domain/useCase/getPhotos";
import CSS from "@/ui/styles/pages/styles";
import { useEffect, useState } from "react"
import { LoadingScreen } from "../../loadingScreen";
import { PostCard } from "../card"

export interface Props {
  index: number;
  infinite: any
}

export function PostContainer({ index, infinite }: Props) {

  const [ posts, setPosts ] = useState<Post[] | null>(null);
  const [ loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true)
      const response = await new getPhotos(index, 6).exec()
      const data = response.data
      setLoading(false)
      if (!data) {
        infinite(false)
        return
      } 
      setPosts(data)
    }
    loadPosts()
  }, [infinite])

  if (loading) return <LoadingScreen/>

  if (posts) return (
    <CSS.Wrapper>
      { posts.map((post, i) => (
        <PostCard post={post} key={post.id} />
      ))}
    </CSS.Wrapper>
  )
  
  return (
    <>
    </>
  )
}