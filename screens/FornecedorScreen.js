import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; // Importando o arquivo de estilos

export default function FornecedorScreen({ navigation }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSaveSupplier = () => {
    if (id && nome && endereco && cpfCnpj && cep && telefone) {
      alert('Fornecedor salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Cadastro de Fornecedor" titleStyle={styles.title} />
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
          label="Endereço"
          value={endereco}
          onChangeText={text => setEndereco(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="CPF/CNPJ"
          value={cpfCnpj}
          onChangeText={text => setCpfCnpj(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          label="CEP"
          value={cep}
          onChangeText={text => setCep(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          label="Telefone"
          value={telefone}
          onChangeText={text => setTelefone(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="phone-pad"
        />

        <Button
          mode="contained"
          onPress={handleSaveSupplier}
          style={styles.button}
        >
          Salvar Fornecedor
        </Button>
      </View>
    </View>
  );
}
