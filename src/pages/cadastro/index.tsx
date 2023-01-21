import Layout from "@/ui/components/Layout";
import { Title } from "@/ui/components/title";
import CSS from "@/ui/styles/pages/login";
import { useFormik } from "formik";

export default function Login() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validate: (values) => {
      const { email, password, username } = values;
      const errors = { } as unknown as { email: string, password: string, username: string }

      if (!email) {
        errors.email = "Escreva seu nome"
      }

      if (!password) {
        errors.password = "Escreva  sua senha"
      }

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
    <CSS.img />
      
      <CSS.container>
        <Title>Cadastro</Title>
        <CSS.form onSubmit={formik.handleSubmit}>
          <label>
            Usuário
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
            Email
            <CSS.input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="email"
              id="email"
              type="email"
            />
            { formik.errors.email  && formik.touched.email && <span>{formik.errors.email}</span>}
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
          <CSS.button type="submit">Cadastrar</CSS.button> 
        </CSS.form>
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