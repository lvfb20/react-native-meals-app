import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Alert} from 'react-native';
import R from 'resources/R';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputForm from '../components/forms/InputForm';
import ButtonForm from '../components/forms/ButtonForm';
import Spinner from 'react-native-loading-spinner-overlay';
import {UserThunks} from '../store';
import {useSelector, useDispatch} from 'react-redux';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const LoginScreen = () => {
  const initialData = {
    email: 'legna.filloy@gmail.com',
    password: '123456',
  };
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {error, user} = useSelector((state) => state.user);

  useEffect(() => {
    setIsLoading(false);
    if (error != null) {
      Alert.alert('Error', error.message);
    }
  }, [error]);

  useEffect(() => {
    if (user != null) {
      setIsLoading(false);
    }
  }, [user]);

  const loginHandler = async (values) => {
    console.log(values);
    setIsLoading(true);
    dispatch(UserThunks.login(values));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Spinner
          visible={isLoading}
          textContent={''}
          color={R.colors.primary}
        />
        <Formik
          initialValues={initialData}
          validateOnMount={true}
          validationSchema={loginSchema}
          onSubmit={loginHandler}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <View style={styles.form}>
              <View>
                <InputForm
                  placeholder={'Email'}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChange={handleChange('email')}
                />

                <Text style={R.styles.formError}>
                  {touched.email && errors.email}
                </Text>

                <InputForm
                  isSecure={true}
                  placeholder={'Password'}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChange={handleChange('password')}
                />

                <Text style={R.styles.formError}>
                  {touched.password && errors.password}
                </Text>

                <View>
                  <ButtonForm
                    disabled={!isValid}
                    onPress={handleSubmit}
                    title={'Login'}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
});

export default LoginScreen;
