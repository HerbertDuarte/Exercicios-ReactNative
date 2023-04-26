import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Form() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [msg, setMsg] = useState('Preencha o seu o peso e a altura');


  // useEffect(() => {
  //   setImc(peso / (altura * altura));
  // }, [peso, altura]);

  const validation = () =>{
    
    if(peso === 0 || peso == 'NaN' || altura === 0 || altura == 'NaN'){   
      setMsg('Erro : Preencha todos os campos')
    }
    else{
      const imc = (peso / (altura * altura)).toFixed(2)
      if(imc == 'NaN'){
        setMsg('Erro : Preencha todos os campos' )
      }else{
        setMsg('IMC = ' + imc)
      }
    }
    return
  }

  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.label}>Peso :</Text>
        <TextInput
          onChangeText={setPeso}
          value={peso}
          style={styles.input}
          placeholderTextColor={'#999'}
          keyboardType="numeric"
          placeholder="Ex.: 75.50"
        />
        <Text style={styles.label}>Altura</Text>
        <TextInput
          onChangeText={setAltura}
          value={altura}
          placeholderTextColor={'#999'}
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ex.: 1.78"
        />
       <View style={styles.button}>
          <Button onPress={() => validation()} color={'red'}title="Calcular"/>
        </View>
      </View>
      {/* {imc && imc > 0 && ( */}
      <Text style={styles.result}>{msg}</Text>

      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color : '#fff'
  },
  input: {
    fontSize: 20,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 5,
    width: 300,
    borderRadius: 6,
    textAlign: "left",
    marginBottom: 10,
    color: "#fff"
  },
  result: {
    fontSize: 20,
    color : "#fff"
  },
  button : {
    marginVertical: 14,
    borderRadius: 6,
    overflow: 'hidden'
  }
});
