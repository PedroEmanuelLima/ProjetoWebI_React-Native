import React, {useState} from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import { styles } from './Styles';
import MaskInput, { Masks } from 'react-native-mask-input';

export const AdressAndPayment = ({route,navigation}) => {
    const {valor} = route.params
    const [cpf, setCPF] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [cvv, setCVV] = useState('');
    const [validDate, setValidDate] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCEP] = useState('');

    const verify = () =>{
      if((cpf,creditCard,cvv,validDate,rua,bairro,numero,cep)!==""){
        Alert.alert(
          '',
          'COMPRA FINALIZADA COM SUCESSO!', 
          [,
            {text: 'Ok', onPress: ()=> navigation.navigate('Home')},
          ],
          {cancelable: false},
        )
        
      }else{
        Alert.alert("Campo", "Campo inválido ou nulo!")
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

            <TextInput
              style={styles.input}
              value={rua}
              onChangeText={setRua}           
              placeholder="Rua"
            />
            <TextInput
              style={styles.input}
              value={bairro}
              onChangeText={setBairro}      
              placeholder="Bairro"
            />      
            <TextInput
              style={styles.input}
              value={numero}
              onChangeText={setNumero}               
              placeholder="Número"
              keyboardType="numeric"
            />
            <MaskInput
                style={styles.input}  
                value={cep}
                onChangeText={setCEP}
                mask={Masks.ZIP_CODE}
                placeholder="CEP"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.buttonBuy} onPress={verify} >
               <Text style={styles.titleBuy}>Finalizar Compra</Text>
            </TouchableOpacity>

          </ScrollView>
        </KeyboardAvoidingView>

    )
}