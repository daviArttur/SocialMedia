import Router from "next/router"
import { CSS } from "./styles"

export function PostCard({ post }: any) {

  function redirectToView() {
    Router.push(`http://localhost:3000/posts/${post.id}`)
  }

  return (
      <CSS.image
        onClick={redirectToView}
        id={post.id.toString()} 
        width={280} 
        height={280} 
        alt="asd" 
        src={post.src}
      />
  )
}