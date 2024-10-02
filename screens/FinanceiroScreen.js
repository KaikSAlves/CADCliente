import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; // Importando o arquivo de estilos

export default function FinanceiroScreen({ navigation }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [notaFiscal, setNotaFiscal] = useState('');
  const [telefone, setTelefone] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [valorVarejo, setValorVarejo] = useState('');
  const [valorAtacado, setValorAtacado] = useState('');

  const handleSaveFinance = () => {
    if (id && nome && notaFiscal && telefone && valorUnitario && valorVarejo && valorAtacado) {
      alert('Dados financeiros salvos com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Cadastro Financeiro" titleStyle={styles.title} />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          label="ID"
          value={id}
          onChangeText={text => setId(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Nota Fiscal"
          value={notaFiscal}
          onChangeText={text => setNotaFiscal(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Telefone"
          value={telefone}
          onChangeText={text => setTelefone(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="phone-pad"
        />
        <TextInput
          label="Valor Unitário"
          value={valorUnitario}
          onChangeText={text => setValorUnitario(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          label="Valor Varejo"
          value={valorVarejo}
          onChangeText={text => setValorVarejo(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          label="Valor Atacado"
          value={valorAtacado}
          onChangeText={text => setValorAtacado(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
        />

        <Button
          mode="contained"
          onPress={handleSaveFinance}
          style={styles.button}
        >
          Salvar Dados Financeiros
        </Button>
      </View>
    </View>
  );
}
