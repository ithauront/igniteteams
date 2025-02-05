import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroups() {
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
              <Highlight 
              title="Nova turma"
              subtitle="crie uma turma para adicionar pessoas" />
              <Input />
              <Button title="Criar" style={{marginTop: 20}}/>
            </Content>
        </Container>
    )
}