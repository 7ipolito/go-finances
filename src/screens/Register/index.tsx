import React,{useState} from 'react';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/Button/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import {Modal} from 'react-native';
import { 
    Container,
    Fields,
    Form,
    Header,
    Title,
    TransactionType
 } from './styles';
import { CategorySelect } from '../CategorySelect';


export function Register(){
    const [category,setCategory]=useState({
        key: 'category',
        name:'Categoria',
    });
    
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen,setCategoryModalOpen]=useState(false);

    function handleTransactionTypeSelect(type:'up' | 'down'){
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    return(
        <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                <Fields>
                    <Input
                    placeholder="Nome"
                    />

                    <Input
                    placeholder="Preço"
                    />
                <TransactionType>
                    <TransactionTypeButton
                    type='up'
                    title="Income"
                    onPress={()=>handleTransactionTypeSelect('up')}
                    isActive={transactionType ==='up'}
                    />

                    <TransactionTypeButton
                    type='down'
                    title="Outcome"
                    onPress={()=>handleTransactionTypeSelect('down')}
                    isActive={transactionType ==='down'}
                    />

                </TransactionType>

                <CategorySelectButton 
                    title={category.name}
                    onPress={handleOpenSelectCategoryModal}
                />
                </Fields>

                <Button title="Enviar"/>

                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>

                
        </Container>
    )
}