import Header from "../../components/Header";
import {BsFillPlusSquareFill} from 'react-icons/bs'
import { Button,Input, Modal ,Space} from 'antd';
import { useState } from 'react';
import app from '../../config/Firebase';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref ,uploadBytes,getDownloadURL,uploadBytesResumable } from "firebase/storage";
import Companies from '../../components/All Companies/Companies';
import { Country, State, City }  from 'country-state-city';
import { AudioOutlined } from '@ant-design/icons';
import { getAuth } from 'firebase/auth';

export {
    Header,BsFillPlusSquareFill,Button,Input,Modal,Space
    ,useState,app,collection,addDoc,getFirestore,getStorage,ref,uploadBytes,
    uploadBytesResumable,getDownloadURL,Companies,Country,State,City,
    AudioOutlined,getAuth
}