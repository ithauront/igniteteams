import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";

type RouteParams = {
    group: string
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const navigation = useNavigation()

    const route = useRoute()
    const { group } = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null)

   async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
        }
        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group)
            newPlayerNameInputRef.current?.blur()
            setNewPlayerName('')
            fetchPlayersByTeam()


        } catch(error) {
            if(error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar.')
            }
        }
   } 

   async function fetchPlayersByTeam() {
    try{
        setIsLoading(true)
        const playersByTeam = await playerGetByGroupAndTeam(group, team)
        setPlayers(playersByTeam)
        
    } catch(error) {
        console.log(error)
            Alert.alert('Pessoas', 'não foi possivel carregar as pessoas do time selecionado.')
    } finally {
        setIsLoading(false)
    }
   }

   async function handlePlayerRemove(playerName:string) {
        try{
            await playerRemoveByGroup(playerName, group)
            fetchPlayersByTeam()
        } catch(error) {
            console.log(error)
            Alert.alert('Remover pessoa', 'Não foi possivel remover essa pessoa.')
        }
    
   }

   async function groupRemove() {
    try{
        await groupRemoveByName(group)
        navigation.navigate('groups')
    } catch(error) {
        console.log(error)
        Alert.alert('Remover turma', 'Não foi possivel remover a turma.')
    }
   }

   async function handleGroupRemove() {
        Alert.alert('Remover', 'Deseja remover a turma?', [
            {
                text: 'não', style: 'cancel'
            },
            {
                text: 'sim', onPress: ()=> groupRemove()
            }
        ])
   }

   useEffect(()=>{
    fetchPlayersByTeam()
   }, [team])
 
    return(
        <Container >
            <Header showBackButton/>
            <Highlight 
            title={group}
            subtitle="Adicione a galera e separe os times" />
            <Form>
             <Input
                placeholder="Nome da pessoa"
                onChangeText={setNewPlayerName}
                autoCorrect={false}
                value={newPlayerName}
                inputRef={newPlayerNameInputRef}
                onSubmitEditing={handleAddPlayer}
                returnKeyType="done"
              />
              <ButtonIcon icon="add" onPress={handleAddPlayer}/>
            </Form>
            <HeaderList>
            <FlatList
                data={['Time A', 'Time B']}
                keyExtractor={(item)=>item}
                renderItem={({item})=>(
                    <Filter title={item} isActive={item === team}
                    onPress={()=>setTeam(item)}
                    />
                )}
            horizontal
            />
            <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>
            {
                isLoading ? <Loading /> : 
                <FlatList
                data={players}
                keyExtractor={(item)=>item.name}
                renderItem={({item})=>(
                    <PlayerCard name={item.name} onRemove={()=> handlePlayerRemove(item.name)}/>
                )}
             
                ListEmptyComponent={()=>(
                    <ListEmpty message="Não ha pessoas nesse time." />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100}, 
                    players.length === 0 && {flex: 1}
                ]}
            />
            }

         
          <Button title="Remover turma" type="SECONDARY" onPress={handleGroupRemove}/>
        </Container>
    )
}