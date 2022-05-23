import React, { useState, useCallback, useEffect } from 'react'
import { View, LogBox,BackHandler} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import * as Notification from "expo-notifications";
//Notificações locais com expo

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});
 
export function Chat({navigation,route}) {
  const {rua} = route.params
  const {bairro} = route.params
  const {cidade} = route.params
  const {estado} = route.params

  const [messages, setMessages] = useState([]);

  const Setmsgbot = (id, text) =>{
    let msgbot = {
      _id: id,
      text: text,
      createdAt: new Date(),
      user: {
        name: 'React Native',
        avatar: 'https://cdn-icons-png.flaticon.com/512/2080/2080772.png',
      }
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, msgbot))   
  }

  let id=4;

  const handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Compra realizada com sucesso!",
        body: "Agradecemos a compra... Volte sempre!",
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  const infoNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Seu pedido será entregue em breve!",
        body: `Status: pendente\nEndereço:\nLocalidade:${cidade}-${estado}\nLogradouro:${rua}\nBairro:${bairro}`,
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  useEffect(() => {
    LogBox.ignoreLogs(['EventEmitter.removeListener'])
   }, [])

   useEffect(() => {
    handleNotification()
   }, [])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Digite "home" caso deseje sair do chat e voltar às compras!',
        createdAt: new Date(),
        user: {
          name: 'React Native',
          avatar: 'https://cdn-icons-png.flaticon.com/512/2080/2080772.png',
        },
      },
      {
        _id: 2,
        text: 'Digite "notificação" caso deseje receber uma notificação com detalhes da compra!',
        createdAt: new Date(),
        user: {
          name: 'React Native',
          avatar: 'https://cdn-icons-png.flaticon.com/512/2080/2080772.png',
        },
      },

      {
        _id: 3,
        text: 'Obrigado pela compra!',
        createdAt: new Date(),
        user: {
          name: 'React Native',
          avatar: 'https://cdn-icons-png.flaticon.com/512/2080/2080772.png',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    const msg= JSON.stringify(messages).replace('[','').replace(']','')
    const msguser = JSON.parse(msg)
    setMessages(previousMessages => GiftedChat.append(previousMessages, msguser))
    if(msguser.text==='notificação'){
      id+=1;
      Setmsgbot(id, "Aguarde...")
      //handleNotification()
      infoNotification()
      return false
    }
    if(msguser.text==='home'){
      id+=1
      Setmsgbot(id,"Redirecionando para Home... Boas compras!")
      setTimeout(() => {
        navigation.navigate('Home')
      }, 1000)
      
    }
    else{
      id+=1
      Setmsgbot(id,"Não entendi o comando! Tente novamente!")
    }
  }, [])
  return (

    <View  style={{flex:1}}>

      <GiftedChat
        alignTop={true}
        showAvatarForEveryMessage={true}
        placeholder='Escreva uma mensagem'
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{_id: 1}}
      />
    </View>
  )
}


