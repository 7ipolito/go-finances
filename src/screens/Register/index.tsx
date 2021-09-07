import React,{useState} from 'react';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/Button/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import uuid from 'react-native-uuid';
import {Keyboard,
     Modal,
     TouchableWithoutFeedback,
     Alert
} from 'react-native';
import {useForm} from 'react-hook-form'
import { 
    Container,
    Fields,
    Form,
    Header,
    Title,
    TransactionType
 } from './styles';
import {useNavigation} from '@react-navigation/native'
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Form/InputForm';
import { useAuth } from '../../hooks/auth';

export type NavigationProps = {
    navigate:(screen:string) => void;
 }

interface FormData{
    name:string;
    amount:string;

}

const schema = Yup.object().shape({
    name:Yup
    .string()
    .required('Nome é obrigatório'),
    amount: 
    Yup.number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
    
})

export function Register(){
    
    const [category,setCategory]=useState({
        key: 'category',
        name:'Categoria',
    });

    const navigation = useNavigation<NavigationProps>()

    const {
        control,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm({
        resolver:yupResolver(schema)
    })

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen,setCategoryModalOpen]=useState(false);
    const {user} = useAuth();

    function handleTransactionTypeSelect(type:'positive' | 'negative'){
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    async function handleRegister(form:FormData){
        const dataKey = '@gofinances:transactions_user:'+user.id;
        if(!transactionType)
        return Alert.alert('Selecione o tipo da transação');

        if(category.key === 'category')
        return Alert.alert('Selecione a categoria')
        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type:transactionType,
            category: category.key,
            date: new Date()
          }

        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];
      
            const dataFormatted = [
              ...currentData,
              newTransaction
            ];
      
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            reset();
            setTransactionType('');
            setCategory({
                key: 'category',
                name: 'Categoria'
            });

            navigation.navigate('Listagem');

        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar")
        }
    }

    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                <Fields>
                    <InputForm
                    name='name'
                    control={control}
                    placeholder="Nome"
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    error={errors.name && errors.name.message}
                    />

                    <InputForm
                    name='amount'
                    control={control}
                    placeholder="Preço"
                    keyboardType='numeric'
                    error={errors.amount && errors.amount.message}
                    />
                <TransactionType>
                    <TransactionTypeButton
                    type='up'
                    title="Income"
                    onPress={()=>handleTransactionTypeSelect('positive')}
                    isActive={transactionType ==='positive'}
                    />

                    <TransactionTypeButton
                    type='down'
                    title="Outcome"
                    onPress={()=>handleTransactionTypeSelect('negative')}
                    isActive={transactionType ==='negative'}
                    />

                </TransactionType>

                <CategorySelectButton 
                    title={category.name}
                    onPress={handleOpenSelectCategoryModal}
                />
                </Fields>

                <Button
                 title="Enviar"
                 onPress={handleSubmit(handleRegister)}/>

                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />

                </Modal>

                
        </Container>
        </TouchableWithoutFeedback>
    )
}