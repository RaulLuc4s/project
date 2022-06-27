import react from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    StatusBar, 
    Image,
    Pressable,
    Linking,
} from 'react-native';

const colorGitHub = '#010409';
const ImagemReact = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';
const colorFontGitHub = '#C9D1D9';
const darkColorGitHub = '#4F565E';
const urlMyGitHub = 'https://github.com/RaulLuc4s';

const App = () =>{

    const handlePressGotoGitHub = async () =>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlMyGitHub);
        if(res){
            console.log('Link Aprovado!');
            console.log('Abrindo link...');
            await Linking.openURL(urlMyGitHub);
        }
    }

    return(
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle = 'light-content'></StatusBar>
        <View style={style.content}>
               <Image accessibilityLabel='React native' style={style.imagem} source={{uri: ImagemReact}}></Image>
               <Text accessibilityLabel='Nome Raul Lucas' style={[style.defaultText, style.name]}>Raul Lucas</Text>
               <Text accessibilityLabel='nickname: RaulLuc4s' style={[style.defaultText, style.nickname]}>RaulLuc4s</Text>
               <Text accessibilityLabel='descrição do projeto' style={[style.defaultText, style.description]}>Criando a primeira aplicação em react-native! O que é o React Native? Criado pelo Facebook em 2015 sobre a licença MIT, o React Native é um Framework para desenvolvimento de aplicativos móveis multiplataforma. Meu GitHub: https://github.com/RaulLuc4s </Text>
            <Pressable onPress={handlePressGotoGitHub}>
                <View style={style.Button}>
                    <Text style={[style.defaultText, style.TextButton]}>Open in GitHub</Text>
                </View>
            </Pressable>

        </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({

    container: {

        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    content: {

        alignItems: 'center',
        padding: 20,
    },

    text: {

        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        
    },

    imagem: {

        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        
    },

    defaultText: {
        color: 'white'
    },

    name: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colorFontGitHub,
        marginTop: 20
    },

    nickname: {
        color: darkColorGitHub,
        fontSize: 18,
        
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colorFontGitHub,
    },

    Button: {
        backgroundColor: darkColorGitHub,
        borderRadius: 10,
        padding: 20,   
        marginTop: 20,
    },
    
    TextButton: {

        fontWeight: 'bold',
        fontSize: 16,
    },
});
