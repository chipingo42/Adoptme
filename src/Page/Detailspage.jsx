import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import AdoptLuna from '../Components/AdoptLuna';
import { Skeletondetails } from '../Components/Skeletondetails';


const Detailspage = () => {

  const {productId} = useParams()
  const [products, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true)
  const [isLuna, setLuna] = useState(false)
  const handleLuna = () => setLuna(true);
  const handleLunaClose = () => setLuna(false)


  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    })
    .catch(err => err.message)
  }, [productId])


  return (
    <>
      <Navbar></Navbar>
      <div className='mt-[142px] max-w-[800px] mx-auto mb-[120px]'>
        {isloading ? (
          <Skeletondetails />
        ) : (
          <>
            <div className='flex justify-between items-center'>
              <div className='flex space-x-4'>
                <div className='w-[80px] h-[80px] bg-[#F0F6FF] rounded-full flex items-center justify-center '>
                  <span className='font-Inter font-[600] text-[36px] text-[#000000]'>{products.title[0].toUpperCase()}</span>
                </div>
                <div>
                  <h1 className='font-Inter font-[600] text-[36px] text-[#344062]'>{products.title}</h1>
                  <p className='font-Inter font-[500] text-[14px] text-[#8588A3] leading-[4px] '>{products.brand}</p>
                </div>
              </div>
              <span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6769 15.6411C6.6769 15.6411 6.82357 21.2963 6.44303 21.8524C6.06249 22.4085 5.63042 22.6845 5.70969 23.1507C5.76915 23.4915 6.01294 23.5019 6.86122 23.5019C7.70951 23.5019 8.05239 23.0274 8.25852 22.4106C8.46266 21.7918 8.54194 20.9994 8.62915 19.9792C8.70843 19.0551 8.8432 16.6613 8.8432 16.6613L6.6769 15.6411Z" fill="#865A52"/>
                  <path d="M15.231 14.9301C15.231 14.9301 15.1814 16.4229 15.4351 17.186C15.6234 17.7483 16.1387 19.0717 16.0218 19.8432C15.9049 20.6167 15.5382 21.4091 15.1141 21.6976C14.8405 21.8836 14.7236 22.377 14.8406 22.584C14.9575 22.791 16.5985 22.7701 16.8324 22.6049C17.0663 22.4397 17.8036 20.5184 17.9265 19.9874C18.1405 19.0613 18.6102 16.3622 18.6102 16.3622L17.869 13.7448L15.231 14.9301Z" fill="#865A52"/>
                  <path d="M8.08387 6.98779L5.79865 8.03939L4.93848 11.3865C4.93848 11.3865 5.4082 13.1071 5.67974 13.9099C5.85811 14.4326 6.13955 15.8459 7.41793 16.795C8.619 17.6856 10.2898 17.6396 10.2898 17.6396C10.2898 17.6396 10.4028 18.133 10.4266 19.8034C10.4523 21.6474 10.4979 22.6446 10.3869 22.791C10.2244 23.0084 9.58621 23.9241 9.80026 24.2335C10.0143 24.5429 10.6208 24.6036 11.0707 24.5429C11.5206 24.4823 11.9309 24.2126 12.028 24.0684C12.1251 23.9241 12.3729 20.9178 12.4184 20.1338C12.468 19.2787 12.4779 18.0536 12.4957 17.579C12.5076 17.2905 12.5156 17.002 12.5156 17.002C12.5156 17.002 13.1458 16.8055 13.9029 16.3225C14.5154 15.9295 15.1338 15.4152 15.7383 15.2312C16.3428 15.0451 16.9691 14.9009 16.9691 14.9009C16.9691 14.9009 17.6628 16.4145 18.2871 17.1776C18.9114 17.9407 20.3285 19.517 20.4256 19.908C20.5227 20.2989 20.7388 21.6997 20.5227 22.2558C20.3087 22.8119 19.9757 23.3074 20.1898 23.5541C20.4038 23.8008 21.5276 23.7903 21.8606 23.483C22.1936 23.1736 22.4373 22.1951 22.4175 21.3714C22.3977 20.5477 22.2035 18.9818 22.0845 18.5491C21.9656 18.1163 21.8883 16.1385 21.8883 16.1385L21.3413 11.6687L20.4038 10.0819L16.0296 9.93769L9.79828 9.48402L8.08387 6.98779Z" fill="#F1A058"/>
                  <path d="M21.8825 3.32507L14.7632 6.64711L15.1576 7.6987L22.4771 4.3913L21.8825 3.32507Z" fill="#02BFF1"/>
                  <path d="M13.6293 8.49104C13.9999 8.121 13.9424 7.83249 14.0396 7.74886C14.1367 7.66733 14.3428 8.03737 14.7233 7.88267C14.9632 7.7865 15.1435 7.50217 14.977 7.07986C14.9017 6.88961 14.654 6.6471 14.3626 6.74954C13.887 6.91679 13.9821 7.2952 13.8652 7.35792C13.7482 7.42063 13.3954 6.98787 12.8682 7.33701C12.5035 7.57952 12.9079 8.59348 12.9079 8.59348L13.6293 8.49104Z" fill="#BDBDBF"/>
                  <path d="M4.66504 3.1766C4.66504 3.1766 5.24971 0.724273 5.64213 0.703367C6.03258 0.68246 6.26644 2.02257 6.53995 3.1766C6.68265 3.7808 4.66504 3.1766 4.66504 3.1766Z" fill="#875A51"/>
                  <path d="M12.5178 15.5491C12.5178 15.5491 14.141 14.8173 14.9001 14.1379C15.7979 13.3351 16.8345 11.3761 18.1822 10.7803C19.0286 10.4061 19.7639 10.2451 19.9403 10.3266C20.1167 10.4082 20.8381 10.9643 21.0145 11.8716C21.1909 12.779 21.1314 15.4362 21.1711 16.1156C21.2107 16.7951 21.5318 18.2585 22.1383 18.7018C22.5525 19.0049 23.379 19.3101 24.0628 19.2683C24.7466 19.2265 25.0002 19.1868 25.0002 19.1032C25.0002 19.0216 24.4334 18.6599 23.8487 17.9909C23.1451 17.1881 22.5981 14.8069 22.384 13.7574C22.17 12.7058 21.3296 10.6151 20.3129 9.58445C19.2961 8.55376 17.2864 8.16281 15.6453 8.121C14.5869 8.09382 11.836 8.73983 11.836 8.73983L10.0205 7.89521C10.0205 7.89521 9.63002 7.05059 9.14245 6.22687C8.65489 5.40316 8.0484 4.51672 8.0484 4.51672L6.85724 5.87564C6.85724 5.87564 7.09111 7.29728 7.20805 7.81158C7.32498 8.32588 7.5212 9.35657 8.00876 10.0778C8.49633 10.7991 8.80948 11.397 8.80948 11.397L5.29346 12.6953L5.45003 13.1908C5.45003 13.1908 7.20805 12.7058 7.85219 12.5532C8.40714 12.4194 9.50317 12.0389 9.67759 12.0786C9.85398 12.1204 10.3217 12.457 10.6547 12.7999C11.1046 13.264 11.9747 14.3219 12.1689 14.5623C12.5079 14.9825 12.5178 15.5491 12.5178 15.5491Z" fill="url(#paint0_linear_478_250)"/>
                  <path d="M5.73929 3.05317C5.73929 3.05317 4.48866 2.60577 3.61064 3.24342C2.73262 3.88107 2.85947 4.53126 2.4492 4.79886C2.03893 5.06646 1.60884 5.15845 1.00434 5.28389C0.399831 5.40933 0.603975 6.06161 0.603975 6.06161C0.603975 6.06161 0.290822 6.68044 0.526678 6.94804C0.760551 7.21565 0.986497 7.46862 1.14109 7.51043C1.29767 7.55224 1.44433 7.66514 1.44433 7.66514C1.44433 7.66514 1.69803 8.10208 2.20542 8.1648C2.7128 8.22752 4.13983 8.18571 4.13983 8.18571L4.33605 8.68119L5.29334 8.63938C5.29334 8.63938 6.05442 6.14733 6.09406 6.02189C6.1337 5.89645 5.73929 3.05317 5.73929 3.05317Z" fill="url(#paint1_radial_478_250)"/>
                  <path d="M4.94858 8.20259C5.23993 7.94962 5.53326 7.47086 5.54515 6.61579C5.55506 5.91542 5.30137 5.5851 5.12497 5.36976C4.94858 5.15443 4.68498 4.59622 4.87128 3.96903C5.05759 3.34184 5.51543 3.05124 5.97524 2.50558C6.43506 1.95992 7.54696 0.918779 7.82047 1.07349C8.09398 1.22819 8.26047 2.47422 8.28029 3.0826C8.30011 3.70561 8.43687 5.42203 7.87002 5.90497C7.40029 6.30637 7.12876 6.26456 7.12876 6.26456C7.12876 6.26456 7.20605 7.65484 7.18822 7.74892C7.1684 7.8409 6.71849 8.26321 6.54407 8.42838C6.36966 8.59354 6.05651 8.96358 6.05651 8.96358C6.05651 8.96358 6.67092 8.96358 6.71056 9.04512C6.7502 9.12665 6.26065 9.73503 5.86029 10.2493C5.64624 10.5253 4.97236 11.5163 4.97236 11.5163C4.97236 11.5163 4.46498 9.28763 4.35795 8.87995C4.26083 8.50991 4.22119 8.38447 4.22119 8.38447C4.22119 8.38447 4.67507 8.44092 4.94858 8.20259Z" fill="#CD8C56"/>
                  <path d="M3.92755 5.79829C4.16179 5.79829 4.35168 5.55212 4.35168 5.24845C4.35168 4.94478 4.16179 4.69861 3.92755 4.69861C3.69331 4.69861 3.50342 4.94478 3.50342 5.24845C3.50342 5.55212 3.69331 5.79829 3.92755 5.79829Z" fill="#010206"/>
                  <path d="M0.621737 6.70976C0.621737 6.70976 1.0221 6.48397 1.03201 6.00939C1.03795 5.68952 1.00228 5.26721 1.00228 5.26721C1.00228 5.26721 0.0449815 5.30902 0.00534189 5.77106C-0.0342977 6.23309 0.155972 6.61568 0.268945 6.79129C0.415612 7.01708 0.738674 7.64637 1.60678 7.80107C2.47489 7.95578 3.31525 7.66727 3.31525 7.66727L3.27561 7.43103C3.27561 7.43103 2.05471 7.70908 1.46804 7.48329C0.881377 7.25751 0.621737 6.70976 0.621737 6.70976Z" fill="#464C52"/>
                  <path d="M3.75503 7.37456C3.79665 7.52718 3.6817 7.64425 3.52115 7.68397C3.3606 7.72161 3.16239 7.72997 3.14059 7.59199C3.11879 7.454 3.28726 7.31393 3.41213 7.27421C3.53502 7.23449 3.71737 7.24285 3.75503 7.37456Z" fill="#010206"/>
                  <path d="M7.53277 2.20448C7.37421 2.09995 6.57943 2.95084 6.30195 3.47141C6.00069 4.03588 6.17708 4.59199 6.49222 4.80106C6.80736 5.01012 7.24736 4.71743 7.40791 4.29094C7.57836 3.84354 7.70124 2.31528 7.53277 2.20448Z" fill="#FFA9AB"/>
                  <path d="M9.64568 10.1093C9.64568 10.1093 5.02568 11.3866 4.96821 11.5204C4.90875 11.6542 5.23181 12.7769 5.29127 12.8083C5.35073 12.8396 10.0659 11.4891 10.0659 11.4891L9.64568 10.1093Z" fill="#484C51"/>
                  <path d="M12.028 7.94538C12.8326 7.99556 16.1247 7.84712 15.6411 8.12099C15.1575 8.39487 14.6739 8.88826 14.22 9.84578C13.7661 10.8033 13.5461 12.9671 11.4373 12.6744C9.32851 12.3817 9.25518 9.81651 9.48905 9.0597C9.72293 8.30288 10.0262 7.70496 10.0262 7.70496C10.0262 7.70496 10.7972 7.86803 12.028 7.94538Z" fill="#FF5F5C"/>
                  <path d="M12.1647 6.61776C13.1002 6.66375 13.0347 7.49792 13.0625 8.38017C13.0902 9.26243 13.0922 13.912 13.0922 14.7148C13.0922 15.5176 13.0625 16.8264 13.0625 16.8264C13.0625 16.8264 12.9852 16.9142 12.7929 16.9665C12.6284 17.0104 12.5155 17.002 12.5155 17.002C12.5155 17.002 12.5888 15.3128 12.3985 14.9427C12.2083 14.5727 11.6276 13.8807 11.6276 13.8807L11.5978 7.94741L11.2173 7.86796C11.2173 7.86796 11.2431 6.56967 12.1647 6.61776Z" fill="#484C51"/>
                  <defs>
                  <linearGradient id="paint0_linear_478_250" x1="14.8402" y1="17.2446" x2="17.4051" y2="7.04569" gradientUnits="userSpaceOnUse">
                  <stop offset="0.258" stopColor="#CA8E53"/>
                  <stop offset="0.456" stopColor="#A67352"/>
                  <stop offset="0.628" stopColor="#8E6151"/>
                  <stop offset="0.734" stopColor="#855A51"/>
                  </linearGradient>
                  <radialGradient id="paint1_radial_478_250" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.66615 2.34068) scale(4.88043 5.14801)">
                  <stop offset="0.037" stopColor="#CA8E53"/>
                  <stop offset="0.067" stopColor="#C68B53"/>
                  <stop offset="0.4" stopColor="#A37152"/>
                  <stop offset="0.672" stopColor="#8D6051"/>
                  <stop offset="0.847" stopColor="#855A51"/>
                  </radialGradient>
                  </defs>
                </svg>
              </span>
            </div>
            <div className='bg-[#F8FAFD] h-full pb-[30px]  mt-[28px] px-[30px] rounded-lg'>
              <h1 className=' font-Inter font-[500] text-[28px] text-[#58667E] pt-[20px] '>{products.brand} Pictures</h1>
              <div className='h-full py-3 bg-[#FFFFFF] rounded-md shadow-md mt-[24px] px-[12px]  '>
                <img src={products.images[0]} alt="" className=' min-w-full h-[247px] rounded-md ' />
              </div>
              <div className='mt-[32px] flex justify-between items-center'>
                <img src={products.images[1]} alt="/" className='h-[97px] w-[158px] rounded-md'  />
                <img src={products.images[2]} alt="/" className='h-[97px] w-[158px] rounded-md'  />
                <img src={products.images[3]} alt="/" className='h-[97px] w-[158px] rounded-md'  />
                <img src={products.images[0]} alt="/" className='h-[97px] w-[158px] rounded-md'  />
              </div>
              <div className='h-[211px] bg-white mt-[22px] flex  shadow-md flex-col px-[20px] '>
                <h1 className=' font-Inter font-[500] text-[24px] text-[#58667E] pt-[31px]'>Description</h1>
                <p className=' font-Inter font-[400] text-[13px] text-[#58667E] '>{products.description}</p>
                <div className='w-[147px] h-[41px] bg-[#F0F6FF] flex justify-center items-center space-x-2 mt-[10px] rounded-sm'>
                  <span>
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.56146 2.30617C3.07732 1.83976 3.69088 1.46951 4.36681 1.21674C5.04275 0.963961 5.76772 0.83365 6.5 0.833304C7.97643 0.833304 9.39343 1.36245 10.4385 2.30617C11.4852 3.25245 12.0722 4.5319 12.0714 5.86521C12.0714 8.16763 10.6489 10.2517 9.16686 11.7904C8.54233 12.4357 7.86524 13.0385 7.14118 13.5937C6.87839 13.7954 6.65832 13.9533 6.5 14.0628C6.34214 13.9533 6.12161 13.7954 5.85882 13.5937C5.13476 13.0385 4.45767 12.4357 3.83314 11.7904C2.35114 10.2517 0.928572 8.16763 0.928572 5.86521C0.928572 4.52984 1.51636 3.24989 2.56146 2.30617ZM6.23257 14.9232L6.5 14.5828L6.76743 14.9232C6.68911 14.9726 6.59572 14.9991 6.5 14.9991C6.40428 14.9991 6.31089 14.9726 6.23257 14.9232ZM6.23257 14.9232L6.5 14.5828L6.76743 14.9232L6.76929 14.9224L6.77393 14.9195L6.78786 14.9099L6.84264 14.8745C6.88907 14.8436 6.95686 14.7987 7.04229 14.7395C7.21314 14.622 7.4555 14.4491 7.74475 14.227C8.50405 13.6446 9.21404 13.0123 9.86886 12.3354C11.4047 10.7413 13 8.46595 13 5.8648C13 4.31068 12.3156 2.81907 11.0974 1.71911C10.4952 1.17471 9.779 0.742551 8.99 0.447516C8.20099 0.152481 7.35476 0.00039096 6.5 0C5.64527 0.000336382 4.79906 0.152361 4.01006 0.447323C3.22106 0.742286 2.50484 1.17436 1.90264 1.71869C0.683161 2.82117 -0.000818544 4.3118 7.35158e-07 5.86521C7.35158e-07 8.46595 1.59529 10.7413 3.13114 12.3354C3.78596 13.0123 4.49595 13.6446 5.25525 14.227C5.54496 14.4491 5.78686 14.622 5.95772 14.7395C6.04152 14.7974 6.12618 14.8544 6.21168 14.9103L6.22654 14.9195L6.23071 14.9224L6.23257 14.9232ZM4.64286 5.83313C4.64286 5.39112 4.83852 4.96721 5.1868 4.65466C5.53508 4.34211 6.00746 4.16652 6.5 4.16652C6.99255 4.16652 7.46492 4.34211 7.8132 4.65466C8.16148 4.96721 8.35714 5.39112 8.35714 5.83313C8.35714 6.27514 8.16148 6.69905 7.8132 7.0116C7.46492 7.32415 6.99255 7.49974 6.5 7.49974C6.00746 7.49974 5.53508 7.32415 5.1868 7.0116C4.83852 6.69905 4.64286 6.27514 4.64286 5.83313ZM6.5 3.33322C5.76118 3.33322 5.05263 3.5966 4.5302 4.06542C4.00778 4.53425 3.71429 5.17011 3.71429 5.83313C3.71429 6.49615 4.00778 7.13201 4.5302 7.60084C5.05263 8.06966 5.76118 8.33304 6.5 8.33304C7.23882 8.33304 7.94738 8.06966 8.4698 7.60084C8.99222 7.13201 9.28571 6.49615 9.28571 5.83313C9.28571 5.17011 8.99222 4.53425 8.4698 4.06542C7.94738 3.5966 7.23882 3.33322 6.5 3.33322Z" fill="#0D75FF"/>
                    </svg>
                  </span>
                  <p className=' font-Inter font-[500] text-[14px] text-[#0D75FF]'>Charlotte, NC</p>
                </div>
              </div>
              <div className='w-[155px] h-[48px] bg-[#0D75FF] flex justify-center items-center rounded-full mt-[46px]'>
                <p className=' font-Inter font-[500] text-[15px] text-[#FFFFFF] ' onClick={handleLuna}>Adopt Luna</p>
              </div>
            </div>
          </>
        )}
      </div>
      <AdoptLuna visible={isLuna} onClose={handleLunaClose} />
      
      <Footer />
    </>
  )
}

export default Detailspage;