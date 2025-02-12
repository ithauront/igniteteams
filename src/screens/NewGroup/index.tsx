import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroups() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    async function handleNew() {
        try{

            if(group.trim().length === 0 ) {
                return Alert.alert("Novo groupo", "Informe o nome da turma.")   
            }

            await groupCreate(group)
            navigation.navigate('players', {group})
        } catch(error) {
            if(error instanceof AppError) {
                Alert.alert("Novo groupo", error.message)
            } else {
                Alert.alert("Novo groupo", "Não foi possivel criar um novo grupo")   
                console.log(error)
            }
           
        }
    
    }
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
              <Highlight 
              title="Nova turma"
              subtitle="crie uma turma para adicionar pessoas" />
              <Input placeholder="Nome da turma" onChangeText={setGroup}/>
              <Button title="Criar" style={{marginTop: 20}} onPress={handleNew}/>
            </Content>
        </Container>
    )
}