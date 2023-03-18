
import { Text,TouchableOpacity,  View,TextInput,StyleSheet, Alert } from 'react-native'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short!')
    .required('please enter name'),
   

  email: Yup.string()
  .email('Invalid email')
  .required('please enter email'),

 
});



export default function App() {
 

 
  // const [agree,setAgree] = useState(false);

   
  

    return (


      <Formik 
      initialValues={{
        email:'',
        name:'',
        
      }}

      validationSchema={SignupSchema}
      onSubmit={values=>Alert.alert(JSON.stringify(values))}
   >

      {({values,errors,touched,handleSubmit,handleChange,isValid,setFieldTouched})=>(
       
      
      
      <View style={styles.login}>

      <Text style={styles.head}>Login Here</Text>


      <TextInput
      placeholder="Enter name"
      value={values.name}
      onChangeText={handleChange('name')}
      onBlur={() => setFieldTouched('name')}
     
     
   
      

      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 12,
        marginHorizontal: 22,
        fontSize: 20,

      }}
    />

    {touched.name && errors.name && (
      <Text>{errors.name}</Text>
    )}



      <TextInput
        placeholder="Enter Email"
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
       
       
     
        

        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 12,
          marginHorizontal: 22,
          fontSize: 20,

        }}
      />

      {touched.email && errors.email && (
        <Text>{errors.email}</Text>
      )}

      
     
   


  
  


      
  
      <TouchableOpacity  
      onPress={handleSubmit}
      disabled={!isValid}
      style={[styles.submit,{backgroundColor:isValid?'green':'red'}
    ]}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
       




      </View>
      )}
      </Formik>
    )
  }

  const styles = StyleSheet.create({
    submit: {
      backgroundColor: '#3b5998',
      margin: 50,
      padding: 18,
      alignItems: 'center',
      borderRadius: 4,
    },
    login: {
      backgroundColor: '#3b5998',
      padding: 18,
      alignItems: 'center',
      marginBottom: 50,
      marginTop:190
    },
    submitText: {
      fontSize: 20,
      color: '#fff',
    },
    head:{
      color:"white",
      fontSize:29,
      marginBottom:30
    }
  });
  
 
  
   
  
  
    
  
  












