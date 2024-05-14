import {useState} from 'react'
import { Alert,Text, View, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';
export function Home() {
    const [participants,setParticipants] = useState<string[]>([])
    const [participantName,setParticipantName] = useState<string>('')

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert('Participante já existe','Já existe um participante na lista.')
        }
        if(participantName==''){
            return Alert.alert('Campo vazio','Deve inserir um nome')
        }
        setParticipants(prevState => [...prevState,participantName])
        setParticipantName('')
    }
    function handleParticipantRemove(name: string) {
        console.log("ok");

    }

    return (
        <View style={styles.container}>

            <Text style={{
                color: '#FDFCFE',
                fontSize: 21,
                fontWeight: 600
            }}>Nome do Evento</Text>
            <Text style={{
                color: '#ABABAB',
                fontSize: 12
            }}>Segunda-Feira, 13 de Maio de 2024</Text>

            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    keyboardType="default"
                    onChangeText={setParticipantName}
                    value={participantName}
                ></TextInput>

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map((p,i)=>(
                    <Participant key={i} name={p} onRemove={()=>handleParticipantRemove(p)} />
                ))    
            }
            </ScrollView>

        </View>
    )
}