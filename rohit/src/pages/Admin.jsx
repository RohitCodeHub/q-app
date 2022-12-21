import React, { useEffect ,useState} from 'react'

import { 
  Header,BsFillPlusSquareFill,Button,Input,Modal,Space
  ,app,collection,addDoc,getFirestore,getStorage,ref,uploadBytes,
  uploadBytesResumable,getDownloadURL,Companies,Country,State,City,
  AudioOutlined,getAuth
 } from './AdminConfig'
 import {SubmitInfo} from "./AdminConfig/functions"
import { Footer } from './HomeConfig'
import { useSelector } from 'react-redux'
function Admin() {

    const storage = getStorage(app)
    const db = getFirestore(app)
    const auth = getAuth(app)

    const user = auth.currentUser;
    //console.log(user);

// ===================================================================================================
    const [company_name,setCompanyName] = useState("");
    const [company_year,setCompanyYear] = useState("");
    const [stTime,setTiming] = useState()
    const [edTime,setEndTime] = useState()
    const [img,setImage] = useState(null);
    const [url,setUrl] = useState();
    const [country,setCountry] = useState([])    

    const Company_Name = (e)=>{
        setCompanyName(e.target.value)
        //console.log(e.target.value);
    }
    const Company_year = (e)=>{
        setCompanyYear(e.target.value)
    }
    const start_timing = (e)=>{
        setTiming(e.target.value)
    }
    const End_Time = (e)=>{
        setEndTime(e.target.value)
    }
    const [country_name,setCountryName] = useState()
    const SubmitInfo =async ()=>{
      console.log(user.uid);
      console.log(company_name);
      console.log(company_year);
      console.log(stTime);
      console.log(edTime);
      console.log(country_name);
      console.log(url);

      const docRef = await addDoc(collection(db, "Company"), {
        user:user.uid,
        Company_Name: company_name,
        StartingYear:company_year,
        Start_timing:stTime,
        End_Time:edTime,
        Country:"Pakistan",
        url:url,
        Time:Date.now()
      });
     
    }    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [colorTheme,setTheme] = useState();
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);

      // let them = useSelector(state =>state.ThemeReducer.theme)
      // setTheme(them)
      // document.body.style.backgroundColor = them


    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

// =====================================================================================================

// ========================================================================================================

useEffect(()=>{
      
      // //console.log(Country.getAllCountries())
      setCountry(Country.getAllCountries())
      //console.log(State.getAllStates())
    },[])


    const { Search } = Input;
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );

    // success(country)
    const success = (country) => {
      Modal.success({
        content: `${country} is Founded Successfully`,
      });
    };


  
    const onSearch = (value)=>{
      setCountryName(value)
        let flag = false
        for(let i =0;i<country.length;i++){
            if(country[i].name === value){
              // //console.log(i);
                //console.log(country[i].name);
                success(country[i].name)
            }
            flag = true
        }


      //console.log("Search");
    }



    const handleChange = (event)=>{
        setImage(event.target.files[0])
        uploadImage(event.target.files[0])
       
    }

   
     async function uploadImage(image) {
    
      // const storageRef = ref(storage, `images/${image.name}`)
      // uploadBytes(storageRef,image).then(()=>{
      //   console.log("Image Uploaded");
      // })
      //   getDownloadURL(ref(storage, storageRef))
      //   .then((url) => {
        
      //       console.log(url);
      //       setUrl(url)
         
      //   })
      //   .catch((error) => {
       
      //   });


      const storageRef = ref(storage, `images/${image.name}`)
      const snapshot = await uploadBytes(storageRef, image)
      const url = await getDownloadURL(snapshot.ref)
      setUrl(url)
    }
  return (
    <div>
        <Header/>


        <div className='container w-[80%] bg-white h-[100px]  mt-5 flex justify-around items-center' >
                <p className={`text-[30px] ${ colorTheme === "#000" ? "text-white":"text-black"} font-black`}>Add Your Company</p>
                <BsFillPlusSquareFill onClick={showModal} className='text-[30px] text-black font-black cursor-pointer'/>
        </div>



      <Companies/>



{/* ================================================================================================ */}


        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='w-full h-[400px] bg-white flex flex-col justify-around items-center'>

                        <Input onChange={Company_Name} placeholder='Enter Your Company Name' />
                        <Input onChange={Company_year} placeholder='Company Starting Year' />
                        <Input type='file' onChange={handleChange} />
                        <Input onChange={start_timing} placeholder='Enter Start Timing'/>
                        <Input onChange={End_Time} placeholder='Enter Close Timing'/>
                        <Input type='text' onChange={(e)=> setCountry(e.target.value)}/>
                        {/* <Search
                          placeholder="input search text"
                          allowClear
                          onSearch={onSearch}
                          style={{
                            width: 200,
                          }}
                        /> */}

                        <Button onClick={
                          SubmitInfo
                          // uploadImage
                          }>Submit Information</Button>

            </div>
        </Modal>
        <div className="" style={{marginTop:"100px"}} >
          
        <Footer/>

        </div>
    </div>
  )
}

export default Admin