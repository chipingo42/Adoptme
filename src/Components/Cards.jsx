import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Browsepet from './Browsepet';
import Skeleton from './Skeleton';




const Cards = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    })
    .catch(err => err.message)
  },[])


  return (
    <div className='w-full h-full bg-white pb-[220px]'>
      <div className='max-w-[1200px] mx-auto relative top-0'>
        <h1 className=' font-Inter font-[500] text-[24px] pt-[70px] text-[#000000] '>Search Results</h1>
        <div className='flex flex-wrap gap-12  '>
          {isLoading ? ( 
            <Skeleton />
          ) : (    
            products?.products?.map((product, i) => (
              <div key={i} className='w-[347px] min-h-[20px] border border-solid border-[#F0F6FF] rounded-sm mt-[24px] px-[15px] '>
                <img src={product.images[0]} alt="/" className='mt-[15px] h-[159px] w-full'/> 
                <div className='flex justify-between items-center'>
                  <div>
                    <h2 className='font-Inter font-[500] text-[25px] text-[#58667E] pt-[16px]'>{product.title}</h2>
                    <p className='font-Inter font-[400] text-[14px] text-[#666879] leading-[5px]'>{product.brand}</p>
                  </div>
                  <span className='mt-2'>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.67665 13.8555C6.67665 13.8555 6.82332 19.1009 6.44278 19.6167C6.06224 20.1325 5.63017 20.3885 5.70945 20.8209C5.76891 21.137 6.01269 21.1467 6.86098 21.1467C7.70926 21.1467 8.05214 20.7065 8.25827 20.1344C8.46241 19.5604 8.54169 18.8255 8.6289 17.8792C8.70818 17.0221 8.84295 14.8018 8.84295 14.8018L6.67665 13.8555Z" fill="#865A52"/>
                      <path d="M15.2309 13.1961C15.2309 13.1961 15.1813 14.5807 15.435 15.2885C15.6233 15.8101 16.1386 17.0376 16.0217 17.7531C15.9047 18.4706 15.5381 19.2055 15.1139 19.4731C14.8404 19.6457 14.7235 20.1034 14.8404 20.2953C14.9574 20.4873 16.5984 20.4679 16.8323 20.3147C17.0662 20.1615 17.8035 18.3795 17.9264 17.8869C18.1404 17.0279 18.6101 14.5244 18.6101 14.5244L17.8689 12.0966L15.2309 13.1961Z" fill="#865A52"/>
                      <path d="M8.08387 5.8293L5.79865 6.80469L4.93848 9.90927C4.93848 9.90927 5.4082 11.5052 5.67973 12.2498C5.85811 12.7346 6.13955 14.0455 7.41792 14.9258C8.619 15.7519 10.2898 15.7093 10.2898 15.7093C10.2898 15.7093 10.4028 16.1669 10.4266 17.7163C10.4523 19.4266 10.4979 20.3516 10.3869 20.4873C10.2244 20.689 9.5862 21.5383 9.80026 21.8253C10.0143 22.1123 10.6208 22.1686 11.0707 22.1123C11.5206 22.0561 11.9309 21.8059 12.028 21.6721C12.1251 21.5383 12.3729 18.7498 12.4184 18.0227C12.468 17.2296 12.4779 16.0932 12.4957 15.653C12.5076 15.3854 12.5156 15.1178 12.5156 15.1178C12.5156 15.1178 13.1458 14.9355 13.9029 14.4876C14.5154 14.123 15.1337 13.646 15.7382 13.4754C16.3428 13.3028 16.9691 13.169 16.9691 13.169C16.9691 13.169 17.6627 14.5729 18.2871 15.2807C18.9114 15.9885 20.3285 17.4506 20.4256 17.8132C20.5227 18.1759 20.7388 19.4751 20.5227 19.9909C20.3087 20.5067 19.9757 20.9663 20.1898 21.1951C20.4038 21.4239 21.5276 21.4142 21.8606 21.1292C22.1935 20.8422 22.4373 19.9347 22.4175 19.1706C22.3977 18.4066 22.2034 16.9542 22.0845 16.5528C21.9656 16.1514 21.8883 14.317 21.8883 14.317L21.3413 10.1711L20.4038 8.69924L16.0296 8.56544L9.79827 8.14464L8.08387 5.8293Z" fill="#F1A058"/>
                      <path d="M21.8824 2.43196L14.7631 5.51327L15.1575 6.48866L22.477 3.42093L21.8824 2.43196Z" fill="#02BFF1"/>
                      <path d="M13.6294 7.22358C14.0001 6.88035 13.9426 6.61274 14.0397 6.53518C14.1368 6.45955 14.3429 6.80278 14.7235 6.65928C14.9633 6.57008 15.1437 6.30636 14.9772 5.91465C14.9019 5.73819 14.6541 5.51325 14.3628 5.60827C13.8871 5.7634 13.9822 6.11438 13.8653 6.17256C13.7483 6.23073 13.3956 5.82933 12.8683 6.15317C12.5037 6.37811 12.908 7.3186 12.908 7.3186L13.6294 7.22358Z" fill="#BDBDBF"/>
                      <path d="M4.66498 2.29424C4.66498 2.29424 5.24966 0.0196155 5.64209 0.000224059C6.03254 -0.0191674 6.26641 1.22383 6.53992 2.29424C6.68263 2.85465 4.66498 2.29424 4.66498 2.29424Z" fill="#875A51"/>
                      <path d="M12.5176 13.7701C12.5176 13.7701 14.1408 13.0914 14.8999 12.4612C15.7977 11.7165 16.8343 9.89956 18.182 9.34691C19.0283 8.9998 19.7637 8.85048 19.9401 8.92611C20.1165 9.00174 20.8379 9.51755 21.0143 10.3591C21.1907 11.2007 21.1312 13.6654 21.1709 14.2956C21.2105 14.9258 21.5316 16.2832 22.1381 16.6943C22.5523 16.9755 23.3788 17.2586 24.0626 17.2199C24.7463 17.1811 25 17.1442 25 17.0667C25 16.991 24.4332 16.6556 23.8485 16.035C23.1449 15.2904 22.5979 13.0817 22.3838 12.1083C22.1698 11.1329 21.3294 9.19371 20.3127 8.23771C19.2959 7.28171 17.2862 6.91909 15.6451 6.88031C14.5867 6.8551 11.8358 7.4543 11.8358 7.4543L10.0203 6.67088C10.0203 6.67088 9.62983 5.88747 9.14227 5.12344C8.6547 4.35942 8.04822 3.53722 8.04822 3.53722L6.85705 4.79766C6.85705 4.79766 7.09092 6.11628 7.20786 6.59331C7.3248 7.07035 7.52101 8.02635 8.00858 8.69535C8.49614 9.36436 8.80929 9.91896 8.80929 9.91896L5.29327 11.1232L5.44985 11.5827C5.44985 11.5827 7.20786 11.1329 7.852 10.9913C8.40695 10.8672 9.50299 10.5143 9.6774 10.5511C9.85379 10.5899 10.3215 10.9021 10.6545 11.2201C11.1044 11.6506 11.9745 12.6318 12.1687 12.8548C12.5077 13.2446 12.5176 13.7701 12.5176 13.7701Z" fill="url(#paint0_linear_77_631)"/>
                      <path d="M5.7392 2.1798C5.7392 2.1798 4.48858 1.76482 3.61057 2.35626C2.73255 2.9477 2.8594 3.55078 2.44913 3.79899C2.03886 4.0472 1.60877 4.13252 1.00427 4.24887C0.39977 4.36522 0.603913 4.97023 0.603913 4.97023C0.603913 4.97023 0.290761 5.54422 0.526616 5.79243C0.760489 6.04064 0.986434 6.27528 1.14103 6.31406C1.2976 6.35285 1.44427 6.45756 1.44427 6.45756C1.44427 6.45756 1.69796 6.86284 2.20535 6.92102C2.71273 6.97919 4.13975 6.94041 4.13975 6.94041L4.33597 7.39999L5.29326 7.3612C5.29326 7.3612 6.05434 5.04974 6.09398 4.93339C6.13362 4.81704 5.7392 2.1798 5.7392 2.1798Z" fill="url(#paint1_radial_77_631)"/>
                      <path d="M4.94839 6.95596C5.23974 6.72133 5.53307 6.27726 5.54497 5.48415C5.55488 4.83453 5.30118 4.52815 5.12479 4.32842C4.94839 4.12868 4.68479 3.61093 4.8711 3.02919C5.0574 2.44744 5.51524 2.1779 5.97505 1.67178C6.43487 1.16567 7.54676 0.199969 7.82027 0.343466C8.09378 0.486963 8.26027 1.6427 8.28009 2.20699C8.29991 2.78485 8.43667 4.3769 7.86982 4.82484C7.40009 5.19716 7.12856 5.15837 7.12856 5.15837C7.12856 5.15837 7.20586 6.44791 7.18802 6.53517C7.1682 6.62049 6.71829 7.0122 6.54388 7.16539C6.36947 7.31859 6.05632 7.66181 6.05632 7.66181C6.05632 7.66181 6.67073 7.66181 6.71037 7.73744C6.75001 7.81307 6.26046 8.37736 5.8601 8.85439C5.64605 9.11036 4.97218 10.0295 4.97218 10.0295C4.97218 10.0295 4.46479 7.96238 4.35776 7.58425C4.26065 7.24102 4.22101 7.12467 4.22101 7.12467C4.22101 7.12467 4.67488 7.17703 4.94839 6.95596Z" fill="#CD8C56"/>
                      <path d="M3.92768 4.72596C4.16193 4.72596 4.35182 4.49762 4.35182 4.21596C4.35182 3.9343 4.16193 3.70596 3.92768 3.70596C3.69343 3.70596 3.50354 3.9343 3.50354 4.21596C3.50354 4.49762 3.69343 4.72596 3.92768 4.72596Z" fill="#010206"/>
                      <path d="M0.621735 5.5714C0.621735 5.5714 1.02209 5.36197 1.032 4.92178C1.03795 4.62509 1.00227 4.23338 1.00227 4.23338C1.00227 4.23338 0.0449813 4.27217 0.00534188 4.70072C-0.0342976 5.12927 0.155972 5.48413 0.268944 5.64702C0.41561 5.85645 0.738672 6.44014 1.60678 6.58363C2.47488 6.72713 3.31524 6.45953 3.31524 6.45953L3.2756 6.2404C3.2756 6.2404 2.0547 6.49831 1.46804 6.28888C0.881374 6.07945 0.621735 5.5714 0.621735 5.5714Z" fill="#464C52"/>
                      <path d="M3.75525 6.18804C3.79687 6.32959 3.68191 6.43819 3.52137 6.47503C3.36084 6.50994 3.16264 6.51769 3.14084 6.38971C3.11903 6.26172 3.2875 6.1318 3.41237 6.09496C3.53525 6.05811 3.71759 6.06587 3.75525 6.18804Z" fill="#010206"/>
                      <path d="M7.53288 1.39252C7.37432 1.29556 6.57955 2.08479 6.30207 2.56764C6.00081 3.09121 6.17721 3.60702 6.49234 3.80094C6.80747 3.99485 7.24747 3.72337 7.40801 3.32779C7.57846 2.91281 7.70134 1.49529 7.53288 1.39252Z" fill="#FFA9AB"/>
                      <path d="M9.64566 8.72447C9.64566 8.72447 5.02568 9.90929 4.96821 10.0334C4.90875 10.1575 5.23181 11.1988 5.29127 11.2279C5.35073 11.257 10.0658 10.0043 10.0658 10.0043L9.64566 8.72447Z" fill="#484C51"/>
                      <path d="M12.028 6.71748C12.8327 6.76402 16.1248 6.62634 15.6412 6.88037C15.1576 7.1344 14.674 7.59203 14.2201 8.48016C13.7662 9.36829 13.5462 11.3753 11.4374 11.1038C9.32857 10.8324 9.25524 8.45302 9.48911 7.75104C9.72299 7.04907 10.0262 6.49448 10.0262 6.49448C10.0262 6.49448 10.7972 6.64573 12.028 6.71748Z" fill="#FF5F5C"/>
                      <path d="M12.1647 5.48607C13.1002 5.52873 13.0348 6.30245 13.0626 7.12077C13.0903 7.9391 13.0923 12.2518 13.0923 12.9964C13.0923 13.741 13.0626 14.9549 13.0626 14.9549C13.0626 14.9549 12.9853 15.0364 12.793 15.0849C12.6285 15.1256 12.5155 15.1178 12.5155 15.1178C12.5155 15.1178 12.5889 13.551 12.3986 13.2078C12.2083 12.8645 11.6276 12.2227 11.6276 12.2227L11.5979 6.71937L11.2173 6.64568C11.2173 6.64568 11.2431 5.44147 12.1647 5.48607Z" fill="#484C51"/>
                      <defs>
                      <linearGradient id="paint0_linear_77_631" x1="14.84" y1="15.3428" x2="17.0651" y2="5.80367" gradientUnits="userSpaceOnUse">
                      <stop offset="0.258" stopColor="#CA8E53"/>
                      <stop offset="0.456" stopColor="#A67352"/>
                      <stop offset="0.628" stopColor="#8E6151"/>
                      <stop offset="0.734" stopColor="#855A51"/>
                      </linearGradient>
                      <radialGradient id="paint1_radial_77_631" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.66607 1.51894) scale(4.88041 4.77496)">
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
                <div className='flex justify-between items-center py-5'>
                  <Link to={`Detailspage/${product.id}`}>
                    <div className='w-[121px] h-[39px] bg-[#0D75FF] rounded-[30px] flex items-center justify-center'>
                      <span className='font-Inter font-[400] text-[13px] text-[#FFFFFF] '>View Details</span>
                    </div>
                  </Link>
                  <div className='flex items-center space-x-3'>
                    <span>
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00236 5.17917C7.25351 5.17917 6.53534 5.46386 6.00582 5.97062C5.47631 6.47738 5.17883 7.16469 5.17883 7.88135C5.17883 8.59801 5.47631 9.28533 6.00582 9.79208C6.53534 10.2988 7.25351 10.5835 8.00236 10.5835C8.7512 10.5835 9.46938 10.2988 9.99889 9.79208C10.5284 9.28533 10.8259 8.59801 10.8259 7.88135C10.8259 7.16469 10.5284 6.47738 9.99889 5.97062C9.46938 5.46386 8.7512 5.17917 8.00236 5.17917ZM6.3553 7.88135C6.3553 7.4633 6.52883 7.06237 6.83771 6.76676C7.1466 6.47115 7.56553 6.30508 8.00236 6.30508C8.43918 6.30508 8.85812 6.47115 9.167 6.76676C9.47589 7.06237 9.64941 7.4633 9.64941 7.88135C9.64941 8.2994 9.47589 8.70034 9.167 8.99594C8.85812 9.29155 8.43918 9.45762 8.00236 9.45762C7.56553 9.45762 7.1466 9.29155 6.83771 8.99594C6.52883 8.70034 6.3553 8.2994 6.3553 7.88135Z" fill="#AFB6C1"/>
                        <path d="M14.1176 12.6102L9.37035 17.4336C9.19436 17.6124 8.98201 17.7549 8.74635 17.8523C8.51069 17.9498 8.2567 18 8 18C7.7433 18 7.48931 17.9498 7.25365 17.8523C7.01799 17.7549 6.80564 17.6124 6.62965 17.4336L1.88236 12.6102H1.90024L1.89224 12.6012L1.88236 12.5899C0.663867 11.2108 -0.00322667 9.46227 1.17354e-05 7.65618C1.17354e-05 3.42772 3.58165 0 8 0C12.4183 0 16 3.42772 16 7.65618C16.0032 9.46227 15.3361 11.2108 14.1176 12.5899L14.1078 12.6012L14.0998 12.6102H14.1176ZM13.2033 11.881C14.2518 10.7023 14.8263 9.20418 14.8235 7.65618C14.8235 4.04967 11.7685 1.12591 8 1.12591C4.23153 1.12591 1.17648 4.04967 1.17648 7.65618C1.17648 9.26849 1.78542 10.7421 2.79671 11.881L2.94165 12.0445L7.48612 16.6612C7.55211 16.7283 7.63175 16.7817 7.72012 16.8182C7.80849 16.8548 7.90374 16.8736 8 16.8736C8.09626 16.8736 8.19151 16.8548 8.27988 16.8182C8.36825 16.7817 8.44789 16.7283 8.51388 16.6612L13.0583 12.0445L13.2033 11.881Z" fill="#AFB6C1"/>
                      </svg>
                    </span>
                    <p className='font-Inter fon-[400] text-[14x] text-[#AFB6C1]'>Seattle, WA</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Browsepet/>
        <div className='flex flex-wrap gap-12 '>
          {isLoading ?  ( 
            <Skeleton />
          ) : (    
            products?.products?.map((product, index) => (
            <div key={index} className='w-[347px] min-h-[20px] border border-solid border-[#F0F6FF] rounded-sm mt-[24px] px-[15px] '>
              <img src={product.images[2]} alt="/" className='mt-[15px] h-[159px] w-full'/> 
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='font-Inter font-[500] text-[25px] text-[#58667E] pt-[16px]'>{product.title}</h2>
                  <p className='font-Inter font-[400] text-[14px] text-[#666879] leading-[5px]'>{product.brand}</p>
                </div>
                <span className='mt-2'>
                  <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.67665 13.8555C6.67665 13.8555 6.82332 19.1009 6.44278 19.6167C6.06224 20.1325 5.63017 20.3885 5.70945 20.8209C5.76891 21.137 6.01269 21.1467 6.86098 21.1467C7.70926 21.1467 8.05214 20.7065 8.25827 20.1344C8.46241 19.5604 8.54169 18.8255 8.6289 17.8792C8.70818 17.0221 8.84295 14.8018 8.84295 14.8018L6.67665 13.8555Z" fill="#865A52"/>
                    <path d="M15.2309 13.1961C15.2309 13.1961 15.1813 14.5807 15.435 15.2885C15.6233 15.8101 16.1386 17.0376 16.0217 17.7531C15.9047 18.4706 15.5381 19.2055 15.1139 19.4731C14.8404 19.6457 14.7235 20.1034 14.8404 20.2953C14.9574 20.4873 16.5984 20.4679 16.8323 20.3147C17.0662 20.1615 17.8035 18.3795 17.9264 17.8869C18.1404 17.0279 18.6101 14.5244 18.6101 14.5244L17.8689 12.0966L15.2309 13.1961Z" fill="#865A52"/>
                    <path d="M8.08387 5.8293L5.79865 6.80469L4.93848 9.90927C4.93848 9.90927 5.4082 11.5052 5.67973 12.2498C5.85811 12.7346 6.13955 14.0455 7.41792 14.9258C8.619 15.7519 10.2898 15.7093 10.2898 15.7093C10.2898 15.7093 10.4028 16.1669 10.4266 17.7163C10.4523 19.4266 10.4979 20.3516 10.3869 20.4873C10.2244 20.689 9.5862 21.5383 9.80026 21.8253C10.0143 22.1123 10.6208 22.1686 11.0707 22.1123C11.5206 22.0561 11.9309 21.8059 12.028 21.6721C12.1251 21.5383 12.3729 18.7498 12.4184 18.0227C12.468 17.2296 12.4779 16.0932 12.4957 15.653C12.5076 15.3854 12.5156 15.1178 12.5156 15.1178C12.5156 15.1178 13.1458 14.9355 13.9029 14.4876C14.5154 14.123 15.1337 13.646 15.7382 13.4754C16.3428 13.3028 16.9691 13.169 16.9691 13.169C16.9691 13.169 17.6627 14.5729 18.2871 15.2807C18.9114 15.9885 20.3285 17.4506 20.4256 17.8132C20.5227 18.1759 20.7388 19.4751 20.5227 19.9909C20.3087 20.5067 19.9757 20.9663 20.1898 21.1951C20.4038 21.4239 21.5276 21.4142 21.8606 21.1292C22.1935 20.8422 22.4373 19.9347 22.4175 19.1706C22.3977 18.4066 22.2034 16.9542 22.0845 16.5528C21.9656 16.1514 21.8883 14.317 21.8883 14.317L21.3413 10.1711L20.4038 8.69924L16.0296 8.56544L9.79827 8.14464L8.08387 5.8293Z" fill="#F1A058"/>
                    <path d="M21.8824 2.43196L14.7631 5.51327L15.1575 6.48866L22.477 3.42093L21.8824 2.43196Z" fill="#02BFF1"/>
                    <path d="M13.6294 7.22358C14.0001 6.88035 13.9426 6.61274 14.0397 6.53518C14.1368 6.45955 14.3429 6.80278 14.7235 6.65928C14.9633 6.57008 15.1437 6.30636 14.9772 5.91465C14.9019 5.73819 14.6541 5.51325 14.3628 5.60827C13.8871 5.7634 13.9822 6.11438 13.8653 6.17256C13.7483 6.23073 13.3956 5.82933 12.8683 6.15317C12.5037 6.37811 12.908 7.3186 12.908 7.3186L13.6294 7.22358Z" fill="#BDBDBF"/>
                    <path d="M4.66498 2.29424C4.66498 2.29424 5.24966 0.0196155 5.64209 0.000224059C6.03254 -0.0191674 6.26641 1.22383 6.53992 2.29424C6.68263 2.85465 4.66498 2.29424 4.66498 2.29424Z" fill="#875A51"/>
                    <path d="M12.5176 13.7701C12.5176 13.7701 14.1408 13.0914 14.8999 12.4612C15.7977 11.7165 16.8343 9.89956 18.182 9.34691C19.0283 8.9998 19.7637 8.85048 19.9401 8.92611C20.1165 9.00174 20.8379 9.51755 21.0143 10.3591C21.1907 11.2007 21.1312 13.6654 21.1709 14.2956C21.2105 14.9258 21.5316 16.2832 22.1381 16.6943C22.5523 16.9755 23.3788 17.2586 24.0626 17.2199C24.7463 17.1811 25 17.1442 25 17.0667C25 16.991 24.4332 16.6556 23.8485 16.035C23.1449 15.2904 22.5979 13.0817 22.3838 12.1083C22.1698 11.1329 21.3294 9.19371 20.3127 8.23771C19.2959 7.28171 17.2862 6.91909 15.6451 6.88031C14.5867 6.8551 11.8358 7.4543 11.8358 7.4543L10.0203 6.67088C10.0203 6.67088 9.62983 5.88747 9.14227 5.12344C8.6547 4.35942 8.04822 3.53722 8.04822 3.53722L6.85705 4.79766C6.85705 4.79766 7.09092 6.11628 7.20786 6.59331C7.3248 7.07035 7.52101 8.02635 8.00858 8.69535C8.49614 9.36436 8.80929 9.91896 8.80929 9.91896L5.29327 11.1232L5.44985 11.5827C5.44985 11.5827 7.20786 11.1329 7.852 10.9913C8.40695 10.8672 9.50299 10.5143 9.6774 10.5511C9.85379 10.5899 10.3215 10.9021 10.6545 11.2201C11.1044 11.6506 11.9745 12.6318 12.1687 12.8548C12.5077 13.2446 12.5176 13.7701 12.5176 13.7701Z" fill="url(#paint0_linear_77_631)"/>
                    <path d="M5.7392 2.1798C5.7392 2.1798 4.48858 1.76482 3.61057 2.35626C2.73255 2.9477 2.8594 3.55078 2.44913 3.79899C2.03886 4.0472 1.60877 4.13252 1.00427 4.24887C0.39977 4.36522 0.603913 4.97023 0.603913 4.97023C0.603913 4.97023 0.290761 5.54422 0.526616 5.79243C0.760489 6.04064 0.986434 6.27528 1.14103 6.31406C1.2976 6.35285 1.44427 6.45756 1.44427 6.45756C1.44427 6.45756 1.69796 6.86284 2.20535 6.92102C2.71273 6.97919 4.13975 6.94041 4.13975 6.94041L4.33597 7.39999L5.29326 7.3612C5.29326 7.3612 6.05434 5.04974 6.09398 4.93339C6.13362 4.81704 5.7392 2.1798 5.7392 2.1798Z" fill="url(#paint1_radial_77_631)"/>
                    <path d="M4.94839 6.95596C5.23974 6.72133 5.53307 6.27726 5.54497 5.48415C5.55488 4.83453 5.30118 4.52815 5.12479 4.32842C4.94839 4.12868 4.68479 3.61093 4.8711 3.02919C5.0574 2.44744 5.51524 2.1779 5.97505 1.67178C6.43487 1.16567 7.54676 0.199969 7.82027 0.343466C8.09378 0.486963 8.26027 1.6427 8.28009 2.20699C8.29991 2.78485 8.43667 4.3769 7.86982 4.82484C7.40009 5.19716 7.12856 5.15837 7.12856 5.15837C7.12856 5.15837 7.20586 6.44791 7.18802 6.53517C7.1682 6.62049 6.71829 7.0122 6.54388 7.16539C6.36947 7.31859 6.05632 7.66181 6.05632 7.66181C6.05632 7.66181 6.67073 7.66181 6.71037 7.73744C6.75001 7.81307 6.26046 8.37736 5.8601 8.85439C5.64605 9.11036 4.97218 10.0295 4.97218 10.0295C4.97218 10.0295 4.46479 7.96238 4.35776 7.58425C4.26065 7.24102 4.22101 7.12467 4.22101 7.12467C4.22101 7.12467 4.67488 7.17703 4.94839 6.95596Z" fill="#CD8C56"/>
                    <path d="M3.92768 4.72596C4.16193 4.72596 4.35182 4.49762 4.35182 4.21596C4.35182 3.9343 4.16193 3.70596 3.92768 3.70596C3.69343 3.70596 3.50354 3.9343 3.50354 4.21596C3.50354 4.49762 3.69343 4.72596 3.92768 4.72596Z" fill="#010206"/>
                    <path d="M0.621735 5.5714C0.621735 5.5714 1.02209 5.36197 1.032 4.92178C1.03795 4.62509 1.00227 4.23338 1.00227 4.23338C1.00227 4.23338 0.0449813 4.27217 0.00534188 4.70072C-0.0342976 5.12927 0.155972 5.48413 0.268944 5.64702C0.41561 5.85645 0.738672 6.44014 1.60678 6.58363C2.47488 6.72713 3.31524 6.45953 3.31524 6.45953L3.2756 6.2404C3.2756 6.2404 2.0547 6.49831 1.46804 6.28888C0.881374 6.07945 0.621735 5.5714 0.621735 5.5714Z" fill="#464C52"/>
                    <path d="M3.75525 6.18804C3.79687 6.32959 3.68191 6.43819 3.52137 6.47503C3.36084 6.50994 3.16264 6.51769 3.14084 6.38971C3.11903 6.26172 3.2875 6.1318 3.41237 6.09496C3.53525 6.05811 3.71759 6.06587 3.75525 6.18804Z" fill="#010206"/>
                    <path d="M7.53288 1.39252C7.37432 1.29556 6.57955 2.08479 6.30207 2.56764C6.00081 3.09121 6.17721 3.60702 6.49234 3.80094C6.80747 3.99485 7.24747 3.72337 7.40801 3.32779C7.57846 2.91281 7.70134 1.49529 7.53288 1.39252Z" fill="#FFA9AB"/>
                    <path d="M9.64566 8.72447C9.64566 8.72447 5.02568 9.90929 4.96821 10.0334C4.90875 10.1575 5.23181 11.1988 5.29127 11.2279C5.35073 11.257 10.0658 10.0043 10.0658 10.0043L9.64566 8.72447Z" fill="#484C51"/>
                    <path d="M12.028 6.71748C12.8327 6.76402 16.1248 6.62634 15.6412 6.88037C15.1576 7.1344 14.674 7.59203 14.2201 8.48016C13.7662 9.36829 13.5462 11.3753 11.4374 11.1038C9.32857 10.8324 9.25524 8.45302 9.48911 7.75104C9.72299 7.04907 10.0262 6.49448 10.0262 6.49448C10.0262 6.49448 10.7972 6.64573 12.028 6.71748Z" fill="#FF5F5C"/>
                    <path d="M12.1647 5.48607C13.1002 5.52873 13.0348 6.30245 13.0626 7.12077C13.0903 7.9391 13.0923 12.2518 13.0923 12.9964C13.0923 13.741 13.0626 14.9549 13.0626 14.9549C13.0626 14.9549 12.9853 15.0364 12.793 15.0849C12.6285 15.1256 12.5155 15.1178 12.5155 15.1178C12.5155 15.1178 12.5889 13.551 12.3986 13.2078C12.2083 12.8645 11.6276 12.2227 11.6276 12.2227L11.5979 6.71937L11.2173 6.64568C11.2173 6.64568 11.2431 5.44147 12.1647 5.48607Z" fill="#484C51"/>
                    <defs>
                    <linearGradient id="paint0_linear_77_631" x1="14.84" y1="15.3428" x2="17.0651" y2="5.80367" gradientUnits="userSpaceOnUse">
                    <stop offset="0.258" stopColor="#CA8E53"/>
                    <stop offset="0.456" stopColor="#A67352"/>
                    <stop offset="0.628" stopColor="#8E6151"/>
                    <stop offset="0.734" stopColor="#855A51"/>
                    </linearGradient>
                    <radialGradient id="paint1_radial_77_631" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.66607 1.51894) scale(4.88041 4.77496)">
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
              <div className='flex justify-between items-center py-5'>
                <Link to={`Detailspage/${product.id}`}>
                  <div className='w-[121px] h-[39px] bg-[#0D75FF] rounded-[30px] flex items-center justify-center'>
                    <span className='font-Inter font-[400] text-[13px] text-[#FFFFFF] '>View Details</span>
                  </div>
                </Link>
                <div className='flex items-center space-x-3'>
                  <span>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00236 5.17917C7.25351 5.17917 6.53534 5.46386 6.00582 5.97062C5.47631 6.47738 5.17883 7.16469 5.17883 7.88135C5.17883 8.59801 5.47631 9.28533 6.00582 9.79208C6.53534 10.2988 7.25351 10.5835 8.00236 10.5835C8.7512 10.5835 9.46938 10.2988 9.99889 9.79208C10.5284 9.28533 10.8259 8.59801 10.8259 7.88135C10.8259 7.16469 10.5284 6.47738 9.99889 5.97062C9.46938 5.46386 8.7512 5.17917 8.00236 5.17917ZM6.3553 7.88135C6.3553 7.4633 6.52883 7.06237 6.83771 6.76676C7.1466 6.47115 7.56553 6.30508 8.00236 6.30508C8.43918 6.30508 8.85812 6.47115 9.167 6.76676C9.47589 7.06237 9.64941 7.4633 9.64941 7.88135C9.64941 8.2994 9.47589 8.70034 9.167 8.99594C8.85812 9.29155 8.43918 9.45762 8.00236 9.45762C7.56553 9.45762 7.1466 9.29155 6.83771 8.99594C6.52883 8.70034 6.3553 8.2994 6.3553 7.88135Z" fill="#AFB6C1"/>
                      <path d="M14.1176 12.6102L9.37035 17.4336C9.19436 17.6124 8.98201 17.7549 8.74635 17.8523C8.51069 17.9498 8.2567 18 8 18C7.7433 18 7.48931 17.9498 7.25365 17.8523C7.01799 17.7549 6.80564 17.6124 6.62965 17.4336L1.88236 12.6102H1.90024L1.89224 12.6012L1.88236 12.5899C0.663867 11.2108 -0.00322667 9.46227 1.17354e-05 7.65618C1.17354e-05 3.42772 3.58165 0 8 0C12.4183 0 16 3.42772 16 7.65618C16.0032 9.46227 15.3361 11.2108 14.1176 12.5899L14.1078 12.6012L14.0998 12.6102H14.1176ZM13.2033 11.881C14.2518 10.7023 14.8263 9.20418 14.8235 7.65618C14.8235 4.04967 11.7685 1.12591 8 1.12591C4.23153 1.12591 1.17648 4.04967 1.17648 7.65618C1.17648 9.26849 1.78542 10.7421 2.79671 11.881L2.94165 12.0445L7.48612 16.6612C7.55211 16.7283 7.63175 16.7817 7.72012 16.8182C7.80849 16.8548 7.90374 16.8736 8 16.8736C8.09626 16.8736 8.19151 16.8548 8.27988 16.8182C8.36825 16.7817 8.44789 16.7283 8.51388 16.6612L13.0583 12.0445L13.2033 11.881Z" fill="#AFB6C1"/>
                    </svg>
                  </span>
                  <p className=' font-Inter fon-[400] text-[14x] text-[#AFB6C1] '>Seattle, WA</p>
                </div>
              </div>
            </div>))
          )}
        </div>
      </div>
    </div>
  )
}

export default Cards;