import React, {useState} from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import { styles } from './Styles';
import MaskInput, { Masks } from 'react-native-mask-input';
import { api } from "../../config";
import axios from "axios";

export const AdressAndPayment = ({route,navigation}) => {
    const {valor} = route.params
    const [cpf, setCPF] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [cvv, setCVV] = useState('');
    const [validDate, setValidDate] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCEP] = useState('');

    const buscarcep = () =>{

        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(({ data }) => {
          console.log(data)
          if(data.cep===cep){
            setRua(data.logradouro)
            setBairro(data.bairro)
            setCidade(data.localidade)
            setEstado(data.uf)
          }
          else{
            Alert.alert("Erro","Cep não encontrado!")
            setRua('')
            setBairro('')
            setCidade('')
            setEstado('')
          }


        })
        .catch(err => { 
          Alert.alert("Erro","Cep não pode ser vazio!")
        })
    }

    const verify = () =>{
      if((cpf && creditCard && cvv && validDate && rua && bairro && numero && cidade && estado && cep)!==""){
        Alert.alert(
          '',
          'COMPRA FINALIZADA COM SUCESSO!', 
          [,
            {text: 'Ok', onPress: ()=> navigation.navigate('Chat', {rua:rua, cidade:cidade, bairro:bairro, estado:estado})},
          ],
          {cancelable: false},
        )
        
      }
      if((cpf && creditCard && cvv && validDate)===""){
        Alert.alert("Pagamento", "Preencha todos os campos de pagamento!")
      }
      if((rua && bairro && numero && cidade && estado && cep)===""){
        Alert.alert("Endereço", "Preencha todos os campos de endereço!")
      }
      }

    return(
        <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"} 
          keyboardVerticalOffset={100} style={{padding:10}}>
          <ScrollView >
            <Text style={styles.title}>
              SubTotal: R$ {valor.toFixed(2)}
            </Text>

            <View style={styles.lineDiv}/>

            <Text style={styles.title}>
              Pagamento
            </Text>
            
            <MaskInput
                style={styles.input}  
                value={cpf}
                onChangeText={setCPF}
                mask={Masks.BRL_CPF}
                placeholder="CPF"
                keyboardType="numeric"
            />

            <MaskInput
                style={styles.input}  
                value={creditCard}
                onChangeText={setCreditCard}
                mask={Masks.CREDIT_CARD}
                showObfuscatedValue={false}
                obfuscationCharacter="*"
                placeholder="Número do cartão de crédito"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}  
                value={cvv}
                onChangeText={setCVV}
                maxLength={3}
                placeholder="CVV"
                keyboardType="numeric"
            />

            <MaskInput
                style={styles.input}  
                value={validDate}
                onChangeText={setValidDate}
                mask={Masks.DATE_DDMMYYYY}
                placeholder="Data de Validade"
                keyboardType="numeric"
            />

            <View style={styles.lineDiv}/>

            <Text style={styles.title}>
              Endereço
            </Text>
            <MaskInput
                style={styles.input}  
                value={cep}
                onChangeText={setCEP}
                onBlur={buscarcep}
                mask={Masks.ZIP_CODE}
                placeholder="CEP"
                keyboardType="numeric"
            />
            <TextInput
              style={styles.endereco}
              value={rua}
              onChangeText={setRua}           
              placeholder="Rua"
              editable={false}
            />
            <TextInput
              style={styles.endereco}
              value={bairro}
              onChangeText={setBairro}      
              placeholder="Bairro"
              editable={false}
            /> 
            <TextInput
              style={styles.endereco}
              value={cidade}
              onChangeText={setCidade}      
              placeholder="Cidade"
              editable={false}
            />
            <TextInput
              style={styles.endereco}
              value={estado}
              onChangeText={setEstado}      
              placeholder="Estado"
              editable={false}
            />        
            <TextInput
              selectionColor={"red"}
              style={styles.input}
              value={numero}
              onChangeText={setNumero}               
              placeholder="Número"
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.buttonBuy} onPress={verify} >
               <Text style={styles.titleBuy}>Finalizar Compra</Text>
            </TouchableOpacity>

          </ScrollView>
        </KeyboardAvoidingView>

    )
}