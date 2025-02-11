import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroups() {
    const navigation = useNavigation()

    function handleNavigation() {
        navigation.navigate('players', {group: 'rocket'})
    }
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
              <Highlight 
              title="Nova turma"
              subtitle="crie uma turma para adicionar pessoas" />
              <Input placeholder="Nome da turma" />
              <Button title="Criar" style={{marginTop: 20}} onPress={handleNavigation}/>
            </Content>
        </Container>
    )
}