import { Post } from '@/domain/interfaces'
import { PostComment } from '@/domain/useCase/postComment'
import { DogCommentButton } from '@/ui/components/icons/DogCommentButton'
import Layout from '@/ui/components/Layout'
import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ReactElement, ReactNode } from 'react'
import { CSS } from './styles'

async function getPhoto(postId: string) {
  const data = await fetch(`http://localhost:3000/api/photo/${postId}`)
  console.log(data)
}

async function handlePostComment() {

  const response = await new PostComment("comment", "postId").exec()
}

export async function getStaticProps(context: any) {
  const { params } = context.params

  console.log(params)

  const response = await axios.get("https://dogsapi.origamid.dev/json/api/photo/239")

  console.log(response)

  return {
    props: response.data
  }
}

export async function getStaticPaths(context: any) {
  console.log(context)
  const response = await axios.get("https://dogsapi.origamid.dev/json/api/photo/?_pag=1&_total=16")

  const paths = response.data.map((post: Post) => {
    return {
      params: {
        postId: post.id.toString()
      }
    }
  })
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}



export default function PostId(props: { photo: Post, comments: any[] }) {
  console.log(props)

  const router = useRouter();
  const postId = router.query.postId as string;
  return (
    <CSS.containers.main>
      <CSS.image src={props.photo.src} />
      <CSS.containers.data>

        <CSS.containers.titleAndView>
          <CSS.views>@{props.photo.author}</CSS.views>
          <CSS.views>{props.photo.acessos}</CSS.views>
        </CSS.containers.titleAndView>

        <CSS.title>{props.photo.title}</CSS.title>

        <CSS.containers.weightAndAge>
          <CSS.about>{props.photo.idade} anos</CSS.about>
          <CSS.about>{props.photo.peso} kg</CSS.about>
        </CSS.containers.weightAndAge>

        <CSS.coments>
          {props.comments && props.comments.map((comment, i) => (
            <li key={i}>
              <p>
                <mark>
                  {comment.comment_author}: {" "}
                </mark>
                {comment.comment_content}
              </p>
            </li>  
          ))}
        </CSS.coments>

        <CSS.form>
          <CSS.input placeholder='Comente...'/>
          <DogCommentButton onClick={handlePostComment}/>
        </CSS.form>
      </CSS.containers.data>
    </CSS.containers.main>
  )
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

PostId.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}