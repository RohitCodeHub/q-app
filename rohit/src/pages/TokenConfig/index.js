import { doc, getDoc, getFirestore,getDocs, startAfter,collection,addDoc,setDoc,updateDoc, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams ,Link } from 'react-router-dom'
import Header from '../../components/Header'
import app from '../../config/Firebase';


import {  Modal ,Input} from 'antd';

export {
    Modal ,
    doc ,
    query ,
    getDocs,
    updateDoc,
    useEffect ,
    useState ,
    getDoc ,
    getFirestore ,
    collection ,
    addDoc ,
    setDoc ,
    Input ,
    app ,
    useParams ,
    Link ,
    Header ,
    Button 

}
