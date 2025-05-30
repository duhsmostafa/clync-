"use client";
import './Footer.css';
import React, { useEffect } from 'react';
export default function Footer() {
    useEffect(() => {
    const takePartText = document.querySelector('.takePart p');
    if (takePartText) {
        takePartText.innerHTML = takePartText.innerHTML + takePartText.innerHTML+ takePartText.innerHTML + takePartText.innerHTML ;
    }
}, []);
    return (
        <footer>
            <div className='footer'>
                <div className='takePart'>
                    <p>take part  take part  take part  take part  take part  take part take part  take part  take part  take part  take part  take part take part  take part  take part  take part  take part  take part </p>
                </div>
                <div className='wave'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="269" viewBox="0 0 1920 269" fill="none">
  <path d="M1 13.7057C81.5522 -0.664966 252.353 7.35186 291.139 154.384C384.476 96.4721 615.18 29.3812 791.302 224.315C809.334 212.174 862.758 193.92 932.2 218.035C1004.75 151.466 1188.33 62.2888 1342.31 238.131C1380.47 260.74 1473.9 290.884 1542.34 230.595C1565.4 157.328 1670.91 24.1059 1908.42 77.3611C1908.42 59.3582 1910.94 19.0818 1921 2" stroke="white" strokeWidth="6"/>
</svg>
                </div>
                <div className='wave waveSmallDevice'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="620" height="200" viewBox="0 0 1920 269" fill="none">
  <path d="M1 13.7057C81.5522 -0.664966 252.353 7.35186 291.139 154.384C384.476 96.4721 615.18 29.3812 791.302 224.315C809.334 212.174 862.758 193.92 932.2 218.035C1004.75 151.466 1188.33 62.2888 1342.31 238.131C1380.47 260.74 1473.9 290.884 1542.34 230.595C1565.4 157.328 1670.91 24.1059 1908.42 77.3611C1908.42 59.3582 1910.94 19.0818 1921 2" stroke="white" strokeWidth="6"/>
</svg>
                </div>
                <div className='innerFooter containeer'>
                    <div className='leftContent'>
                        <div className='clyncFooter'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="196" height="51" viewBox="0 0 196 51" fill="none">
  <path d="M133.363 0.923114C131.385 1.00784 129.461 1.59026 127.768 2.61634C126.075 3.64242 124.669 5.07894 123.681 6.79268V1.19785H115.464V41.9601H123.679V15.7064C123.57 11.1956 126.562 7.22826 130.641 7.17331C138.91 6.73871 138.203 16.3588 138.203 16.3588V42.014H150.933V15.9781C150.933 15.9242 150.933 0.0539188 133.361 0.923114" fill="#00E13F"/>
  <path d="M59.7339 36.2512V1.14062H47.0049V41.795H74.5319V36.2512H59.7339Z" fill="#00E13F"/>
  <path d="M182.947 39.7847L178.976 35.2189C178.16 35.5995 169.619 39.2412 165.757 33.8062C161.079 27.2842 168.042 18.3705 170.657 16.0876C173.033 13.9663 175.833 12.3732 178.872 11.4139C183.006 10.1641 186.433 10.7615 188.99 14.0225C193.396 20.2168 187.739 25.9795 187.739 25.9795L191.874 30.762C197.911 24.0223 196.007 13.5869 193.074 10.4888C193.074 10.4888 186.927 4.29453 185.73 3.36939C185.73 3.36939 175.394 -4.45736 162.392 6.63038C150.153 16.9029 155.973 29.2944 155.973 29.2944C156.68 30.7071 162.011 37.5018 162.011 37.5018C165.111 41.6319 173.49 44.8949 182.955 39.7847" fill="#00E13F"/>
  <path d="M101.048 1.14062V21.4658C101.157 25.9527 98.1652 29.899 94.0854 29.953C85.8166 30.3856 86.5236 20.8174 86.5236 20.8174V1.14062H73.7949V21.1951C73.7949 21.1951 73.795 36.9805 91.3655 36.1143C93.3404 36.0327 95.2629 35.455 96.9553 34.4347C98.6477 33.4144 100.055 31.9843 101.048 30.2766V33.0331C100.831 40.8169 97.8933 43.6822 90.2235 43.8441V50.6008C109.807 51.466 109.263 35.8435 109.263 35.8435V1.14062H101.048Z" fill="#00E13F"/>
  <path d="M38.2117 10.5971L34.4577 15.3258C35.0017 16.0871 40.0576 23.8049 35.3828 28.5325C29.6169 34.1274 19.7702 29.0221 17.1042 26.8471C14.5741 24.8986 12.5114 22.4103 11.0664 19.5639C9.1085 15.7054 9.10846 12.2266 11.8284 9.18345C17.1592 3.74848 23.7961 8.31423 23.7961 8.31423L27.7669 3.41877C20.0971 -1.36381 10.0874 2.38573 7.58448 5.81056C7.58448 5.81056 2.58471 12.9849 1.87273 14.2887C1.87273 14.2887 -4.0561 25.866 9.21652 36.627C21.4562 46.8446 32.6629 38.9639 32.6629 38.9639C33.9688 38.0397 39.6806 31.5707 39.6806 31.5707C43.1625 27.8202 44.9025 19.0153 38.2117 10.5901" fill="#00E13F"/>
</svg>
                        </div>
                        <div className='links'>
                            <div className='needHelp'>
                                <h3>Need Help?</h3>
                                    <p>FAQs</p>
                                    <p>Community Guidelines</p>
                            </div>
                            <div className='sfety'>
                                <h3>Safety</h3>
                                    <p>Legal</p>
                                    <p>Data</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightContent'>
                        <div className='form'>
                            <h2>UTP+</h2>
                            <p>Stay in the loop, because missing out is so last season.</p>
                            <input type="text" placeholder='Full Name' />
                            <input type="text" placeholder='Email Address' />
                            <button className='btnn'>Clync Up!</button>
                            <div className='arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="154" height="110" viewBox="0 0 154 110" fill="none">
  <path d="M152.798 2.58006C155.666 6.31819 152.071 11.9868 150.745 15.6379C148.266 22.3001 145.789 28.9546 143.328 35.5471C141.511 40.517 134.254 36.6437 136.055 31.7333C137.208 28.7265 138.313 25.6374 139.466 22.6318C122.136 39.5538 101.745 53.0318 79.3787 62.3484C74.4675 64.3653 69.4215 66.0373 64.2773 67.3524C57.1783 82.7189 44.4787 96.033 32.5172 107.887C28.7606 111.578 22.7166 106.021 26.4712 102.333C36.4769 92.3728 47.2815 81.7231 54.2952 69.2398C38.6941 71.2079 22.9172 68.4321 11.4607 56.2463C4.36753 48.6793 -0.304936 38.5182 0.927166 28.0069C2.2207 16.7454 10.3334 7.38253 20.5917 3.15559C31.6362 -1.41563 44.4554 1.05225 53.9431 7.94462C62.7929 14.3853 67.9007 24.4622 69.4518 35.1628C70.5563 42.7846 70.0054 50.5546 67.8368 57.9447C71.2405 56.854 74.6146 55.6156 77.7312 54.3095C100.215 44.7135 120.546 30.712 137.522 13.1324C138.242 12.3771 139.228 11.9311 140.271 11.8884C141.315 11.8456 142.334 12.2095 143.114 12.9033C143.265 12.5978 143.369 12.2118 143.517 11.9057C143.859 10.8914 144.247 9.96029 144.584 8.94468C138.251 9.87356 120.083 11.3618 118.023 11.5697C112.748 12.1592 112.531 3.95135 117.806 3.36056C124.703 2.65201 131.551 1.86251 138.447 1.15649C142.669 0.626665 149.629 -1.58307 152.798 2.58006ZM61.3583 48.3351C62.4978 39.4541 61.185 29.9148 56.2618 22.2413C50.6786 13.4195 40.1461 7.84005 29.6421 9.10189C20.0037 10.2497 11.0983 17.6731 9.18374 27.383C7.39474 36.3668 11.8741 45.441 18.3125 51.5871C29.3577 62.2138 44.1627 63.2071 58.3489 60.3078C59.8331 56.4532 60.8436 52.4329 61.3583 48.3351Z" fill="#231F20"/>
</svg>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='bottomFooter containeer'>
                        <div className='right'>
                        <h3>Let’s Talk! </h3>
                        <div className='icons'>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-snapchat"></i>
                            <i className="bi bi-tiktok"></i>
                        </div>
                    </div>
                    <div className='mid'>
                        <h3>Hotline</h3>
                        <p>19608</p>
                    </div>
                    <div className='left'>
                        <h3>DOWNLOAD OUR APP</h3>
                        <div className='icons'>
                            <i className="bi bi-android"></i>
                            <div className='horzontal-line'></div>
                            <i className="bi bi-apple"></i>
                        </div>
                    </div>
                    </div>
            </div>
      </footer>
    );
}
