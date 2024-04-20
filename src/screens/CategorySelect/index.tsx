import React from 'react';
import { FlatList } from 'react-native';
<<<<<<< HEAD
import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';
import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,
=======
import { Button } from '../../components/Forms/Button';
import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer
>>>>>>> fork/main
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
<<<<<<< HEAD
    category,
    setCategory,
    closeSelectCategory
}:Props){

    function handleCategorySelect(category: Category){
        setCategory(category);
    }

    return(
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{flex: 1, width:'100%'}}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>(
                    <Category
                        onPress={()=> handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={()=><Separator/>}
            />

            <Footer>
                <Button 
                title="Selecionar"
                onPress={closeSelectCategory}/>
            </Footer>
                
            

        </Container>
    )
=======
  category,
  setCategory,
  closeSelectCategory
}: Props) {

  function handleCategorySelect(category:Category) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList 
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <>
            <Category
              onPress={() => handleCategorySelect(item)}
              isActive={category.key === item.key}
            >
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Category>
            <Separator/>
          </>
          
        )}
      />

      <Footer>
        <Button 
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  );
>>>>>>> fork/main
}