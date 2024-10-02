import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; // Importando o arquivo de estilos

export default function ClienteScreen({ navigation }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState(null);

  const handleSaveClient = () => {
    if (id && nome && cpf && endereco && bairro && cidade && cep && telefone) {
      alert('Cliente salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Cadastro de Cliente" titleStyle={styles.title} />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          {/* Aqui você pode adicionar lógica para exibir a foto */}
          <View style={styles.photo} />
        </View>
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
          label="CPF"
          value={cpf}
          onChangeText={text => setCpf(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          label="Endereço"
          value={endereco}
          onChangeText={text => setEndereco(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Bairro"
          value={bairro}
          onChangeText={text => setBairro(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Cidade"
          value={cidade}
          onChangeText={text => setCidade(text)}
          style={styles.input}
          mode="outlined"
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
          onPress={handleSaveClient}
          style={styles.button}
        >
          Salvar Cliente
        </Button>
      </View>
    </View>
  );
}
