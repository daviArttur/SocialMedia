import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import Layout from "@/ui/components/Layout";
import { Subtitle } from "@/ui/components/subtitle";
import { Title } from "@/ui/components/title";
import CSS from "@/ui/styles/pages/login";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";

export default function Login() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: (values) => {
      const { password, username } = values;
      const errors = { } as unknown as { password: string, username: string }

      if (!username) {
        errors.username = "Escreva seu nome de usuário"
      }

      if (password.length < 4) {
        errors.password = "Sua senha deve ter mais de 3 caracteres"
      }

      return errors
    },
    onSubmit: (values) => {
      console.log("PASSOE")
    }
  })

  return (
    <CSS.main>

      <Head>
        <title> Dogs | Login </title>
        <meta name="description" content="Faça login" />
      </Head>

      <CSS.img />
      <CSS.container>
        <Title>Login</Title>
        <CSS.form onSubmit={formik.handleSubmit}>
          <label>
            Nome de usuário
            <CSS.input
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="username"
              id="username"
              type="text"
            />
            { formik.errors.username && formik.touched.username && <span>{formik.errors.username}</span>}
          </label>

          <label>
            Senha
            <CSS.input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="password"
              id="password"
              type="password"
            />
            { formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span>}
          </label>
          <CSS.button>Entrar</CSS.button> 
        </CSS.form>

        <a href=""> Perdeu a Senha?</a>
        <Subtitle>Cadastre-se</Subtitle>

        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <CSS.button><Link href="/cadastro">Cadastro</Link></CSS.button>
      </CSS.container>
    </CSS.main>
  )
}

Login.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}