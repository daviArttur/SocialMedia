import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import Layout from "@/ui/components/Layout";
import { Subtitle } from "@/ui/components/subtitle";
import { Title } from "@/ui/components/title";
import CSS from "@/ui/styles/pages/login";

export default function Login() {

  return (
    <CSS.main>
    <CSS.img />
      
      <CSS.container>
        <Title>Login</Title>
        <CSS.form>
          <label>
            Nome de usuário
            <CSS.input type="email" />
          </label>

          <label>
            Senha
            <CSS.input type="password" />
          </label>
          <CSS.button>Entrar</CSS.button>

          <a href=""> Perdeu a Senha?</a>
          <Subtitle>Cadastre-se</Subtitle>

          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <CSS.button>Cadastro</CSS.button>
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


