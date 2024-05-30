import logo from './logo.svg';
import './App.css';

function App() {

  const arr=[
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Drama', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Art', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Cinematography', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Design', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Photography', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Music', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Literature', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'},
    {img:'https://s3-alpha-sig.figma.com/img/3dcc/4e8f/57f09df2be0ab638b5722b2a7ac1c93f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkLxXDNd5x~1m3Rkr3AA2tmokQWcL8mmQjUh7Qfq9MRQaht7hkUOxKWbfvlcF7XBU0SmV4DhEac0gMcVSoszJr6DZBXY33WSSkDtkvPTq6r~athupLldbHDmZqSO0XN7lUdi1HO7RR1gi1OSPxhRvg3ha6UwzpaGLrv16l4R6cgfX2QRCcVaXhlTi7CNTPRREkC8fU7IvQ9eacLKZZNLhU3x3XgEbcqE91tsBsdERDzaJrGOQtObYEd6rov21r9g9O4V5kQVu3sIQ8T43H6aNZKSKvWUSNH9rEJBNQKzBBoxgW932lk0IqE1PMUkC7v7QQrUi8J-zSypWAYON~PuQ__', title:'Dance', desc:'Renewable energy, from sun and wind, fights climate change and spurs economic growth.'}
  ];

  return (
    <div style={{backgroundColor:'#F6F6F6'}}>
      <div style={{  width:'96.89%', height:'96px',padding:'24px 32px 24px 32px'}}>
        <img style={{width:'84px', height:'84.07px'}} src='https://s3-alpha-sig.figma.com/img/73bb/8e9f/5320fbdf5582db2998ae52055a27d831?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6cb0BMI2gZDOPO9mlPYVzWlhjmr0QP0z7NgYXEiSO8hMq7YjE6iNdyBEGlR~FuDYBhwfcBqTyaRt93qNNU09X3FUQcwYDePp-a74YkaMw1uM-ZjkWccQoGV3lKML7~UcLEPF3qr05Ts0r-HxrPSgw8EfSWd~eS~Go1dzF7p1~okI3fGhloOsapr23-H16GKdby2nWL7QCJj9S5n-UWoO1XnVvdqAUDbGrygO8WSmB12T1M3F9Wt4hlMC6jfV8PKIQlcO~zhmvTqIMlpA4jBMfDI4zeR3hsS15P4tkxwff5qzpvYCEcQJe2-UOdTgyLKpb9B0QAvfG-VPy0KrFow2A__' />
      </div>

      <div style={{  width:'96.89%', height:'590px', justifyContent:'center', padding:'32px', display:'flex'}}>
        {/* <img style={{width:'48px', height:'48px'}} src='https://s3-alpha-sig.figma.com/img/0c2d/010f/74cfc2a223c6d4c6e81b91973fc50480?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAplgGTFgQFbeCLR6iXrfhhrdlLp6yGocCHtkWAhYbmB2xYrXv5oGnEDLsEGY03CdnY3MI~sLqGzNRxU~P3DNoev-YY~KeTGvmy2EYz7VjInYCGxMFQm9My4Qt~7E-WCxoLKQAOtvEmsygxfpYKNCvL-MDCIHlUBc3V~0bS55LkA8bUIZ5Dr8K7Hi42-k30IZZU~MXW1dlSBZCejjIKeeE6LC06AvyTej4Mw~1yE1kxeML0LyF75P8xAJoQvDWY3kj~YjKJ~dARDtO0dNTQeXEJxyxfv88kq4F1PKnzbx1lbGZ7BbUGYixL5aVS-QbzB0O-7g9TqEvYUGq-NZMYKjg__' /> */}

        <div style={{  width:'55%', height:'502px', padding:'0px 32px 0px 32px', paddingTop:'60px'}}>
          <img style={{width:'72px', height:'72px', marginLeft:'45%'}} src='https://s3-alpha-sig.figma.com/img/0c2d/010f/74cfc2a223c6d4c6e81b91973fc50480?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAplgGTFgQFbeCLR6iXrfhhrdlLp6yGocCHtkWAhYbmB2xYrXv5oGnEDLsEGY03CdnY3MI~sLqGzNRxU~P3DNoev-YY~KeTGvmy2EYz7VjInYCGxMFQm9My4Qt~7E-WCxoLKQAOtvEmsygxfpYKNCvL-MDCIHlUBc3V~0bS55LkA8bUIZ5Dr8K7Hi42-k30IZZU~MXW1dlSBZCejjIKeeE6LC06AvyTej4Mw~1yE1kxeML0LyF75P8xAJoQvDWY3kj~YjKJ~dARDtO0dNTQeXEJxyxfv88kq4F1PKnzbx1lbGZ7BbUGYixL5aVS-QbzB0O-7g9TqEvYUGq-NZMYKjg__' /><br/>

          <div style={{font:'poppins', fontWeight:'600', width:'100%', fontSize:'24px', textAlign:'center'}}>Indian Institute of Information Technology Bhagalpur</div><br/>
          
          <div style={{justifyContent:'center', display:'flex', textAlign:'center'}}>
          <div  style={{font:'poppins', fontWeight:'700', fontSize:'48px', height:'64px', color:'#FF671F'}}>
          "एक भारत
          </div>
          <div  style={{font:'poppins', fontWeight:'700',  fontSize:'48px',marginLeft:'1%',height:'64px', color:'#FFFFFF', WebkitTextStrokeColor:'#1E40AE',WebkitTextStrokeWidth:'2px'}}>
          श्रेष्ठ
          </div>
          <div  style={{font:'poppins', fontWeight:'700',marginLeft:'1%', fontSize:'48px', height:'64px', color:'#046A38'}}>
          भारत"
          </div>
          </div>

          <div style={{  marginTop:'2.5vh',width:'100%', height:'220px', font:'poppins', fontWeight:'600',fontSize:'20px',textAlign:'center'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>

        </div>

        <div style={{   width:'40%', height:'509.68px', borderRadius:'10.32px'}}>
          <img style={{width:'680px',height:'510px',borderRadius:'20px',marginLeft:'5%'}} src='https://s3-alpha-sig.figma.com/img/31a0/7231/fb1d223dc9ac66fe8c0e96bd72dee320?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbTY8z5V4qorhwzGEJopreDciMvmIWxjv1fptCaZbKq83izR0m5xLX26NiGvUJonkIPIFyRQszMydGm1kxdO7kXmXJ-HeBk6zuoV8GLti5drh6oKdoXTnIHGMmTFnUcdiBDphCCD3YugWwkgmJod1s7Xn0bH3LIrtO3UfaxIfWe-OMOxE78B9ZQwSWfVKMYTpr-8FS-gH6iYrF5hId6itMXTMLn2bn5CRqMtEZxAinsBqXd-Enzvhq~hZ2cYW3oqwicjETL-8O2xnHYnuHddBnwoSVuAJ0SZJ6BBugUuEtK9wIHke7wejWtMVsYGjxiIGizG9nMi1U3qII-e5OTcIQ__' />
        </div>

      </div>

      

      <div style={{ width:'100%', height:'2000.03px'}}> 
      <div style={{ display:'flex', justifyContent:'center'}}>
      <div style={{ width:'748px', height:'170px'}}>
          <div style={{font:'poppins', fontWeight:'700', fontSize:'48px', textAlign:'center'}}>
          ABOUT  US
          </div>
          <div  style={{ fontWeight:'600', fontSize:'20px', textAlign:'center', paddingTop:'20px'}}>
          Step back in time and explore the vibrant tapestry of our past events, where cultures intertwined and stories unfolded.
          </div>
      </div>
      </div>

          <div style={{justifyContent:'center', display:'flex'}}>
          <div style={{ width:'90%', height:'542px', marginTop:'45px'}}>
          <div style={{display:'flex', justifyContent:  'center'}}>
              <div style={{ width:'1002px' , height:'320px', display:'flex', justifyContent:  'space-between'}}>
                <img style={{width:'621px',height:'320px', borderRadius:  '8px'}} src='https://s3-alpha-sig.figma.com/img/ea7b/bc94/aec032d44f57299007bd335137c92f24?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKnmc9vCGe9yJSLkcuHyeOIiO~B6Yq2JtPdzNvDyzD8r9CPqxNgcnFGILYOJP4P5vGiow2gMbowmQiah3B0cjx0i4WWTii6nkeIATqg~fdS2jUAwhYWCsWb9u0iCmDTRNC0pwlKrCkcMfAfbso6oSYSXbYw6gT3pQhbglhR0LAXxJvQCjPihoY2zK6X-4eAjBJsLIxoRsCdzGz1CGa7CvIOJg5iAdQlNhGpptTqlSqq6Y~eQ9LEAQpW5pa-vrWdCDCBF9zQKklTrrdEhXejpT0k9CvuwtVV6LvjwWC5wTD-EnUcaJEpXUFmkawYTGMMnHiEfoLyNSIUa-hzDQFW6HQ__'/>
                <img style={{width:'317px',height:'320px', borderRadius:  '8px'}} src='https://s3-alpha-sig.figma.com/img/ecc7/65c9/427e9eaa4d0ba7f6e87139ef0abeb402?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cppe~uW3JwekvuySbJkfnyXOTmTznDDLyp4o5Wa5mL9xnu275SKWORaJRfrXWGxgghAf6HBA8Nu0ty6j192fxNz4oht6Ol82~9zTi8m6kxoBEf5iGEXVhtOItBZbYWNWKkzGMyQQxxd~PuBB-HTiy8nrxMdPQsf2XOURX9mh6K1JhjeXzGgKt~8udZXUhJycJ4Gn5Z4cRon9fXDTXVYq0t04-Q6lS75XgYk74WNZP3IrXWwSBFOJptSEbKrviBLmekA6u6QnvmGP6pOPMAYqElqIAz4GZsZZ7rmERmiQVi8xRR8bVK5rzVyxIFOMVquMqfmBVHJ4ZQJTBSqioPDN2g__'/>
              </div>
            </div><br/>
            <div style={{fontWeight:'600', fontSize:'36px', textAlign:'center',marginTop:'50px'}}>
            What is EBSB Board?
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <div style={{ width:'40%',fontWeight:'600', fontSize:'24px', textAlign:'center', color:'#454545'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </div>
            </div><br/>

          </div>

          </div>

          <div style={{justifyContent:'center', display:'flex'}}>
          <div style={{  width:'90%', height:'542px', marginTop:'45px'}}>
            <div style={{fontWeight:'600', fontSize:'36px', textAlign:'center',marginTop:'120px'}}>
            Objectives
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <div style={{ width:'40%',fontWeight:'600', fontSize:'24px', textAlign:'center', color:'#454545'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </div>
            </div><br/>

            <div style={{display:'flex', justifyContent:  'center'}}>
             
            </div>

          </div>

          </div>

          <div style={{justifyContent:'center', display:'flex'}}>
          <div style={{  width:'90%', height:'542px', marginTop:'-80px'}}>
          <div style={{display:'flex', justifyContent:  'center'}}>
              <div style={{ width:'1002px' , height:'320px', display:'flex', justifyContent:  'space-between'}}>
                <img style={{width:'621px',height:'320px', borderRadius:  '8px'}} src='https://s3-alpha-sig.figma.com/img/ea7b/bc94/aec032d44f57299007bd335137c92f24?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKnmc9vCGe9yJSLkcuHyeOIiO~B6Yq2JtPdzNvDyzD8r9CPqxNgcnFGILYOJP4P5vGiow2gMbowmQiah3B0cjx0i4WWTii6nkeIATqg~fdS2jUAwhYWCsWb9u0iCmDTRNC0pwlKrCkcMfAfbso6oSYSXbYw6gT3pQhbglhR0LAXxJvQCjPihoY2zK6X-4eAjBJsLIxoRsCdzGz1CGa7CvIOJg5iAdQlNhGpptTqlSqq6Y~eQ9LEAQpW5pa-vrWdCDCBF9zQKklTrrdEhXejpT0k9CvuwtVV6LvjwWC5wTD-EnUcaJEpXUFmkawYTGMMnHiEfoLyNSIUa-hzDQFW6HQ__'/>
                <img style={{width:'317px',height:'320px', borderRadius:  '8px'}} src='https://s3-alpha-sig.figma.com/img/ecc7/65c9/427e9eaa4d0ba7f6e87139ef0abeb402?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cppe~uW3JwekvuySbJkfnyXOTmTznDDLyp4o5Wa5mL9xnu275SKWORaJRfrXWGxgghAf6HBA8Nu0ty6j192fxNz4oht6Ol82~9zTi8m6kxoBEf5iGEXVhtOItBZbYWNWKkzGMyQQxxd~PuBB-HTiy8nrxMdPQsf2XOURX9mh6K1JhjeXzGgKt~8udZXUhJycJ4Gn5Z4cRon9fXDTXVYq0t04-Q6lS75XgYk74WNZP3IrXWwSBFOJptSEbKrviBLmekA6u6QnvmGP6pOPMAYqElqIAz4GZsZZ7rmERmiQVi8xRR8bVK5rzVyxIFOMVquMqfmBVHJ4ZQJTBSqioPDN2g__'/>
              </div>
            </div>
            <div style={{fontWeight:'600', fontSize:'36px', textAlign:'center', marginTop:'80px'}}>
            Lorem Ipsum
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <div style={{ width:'40%',fontWeight:'600', fontSize:'24px', textAlign:'center', color:'#454545'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </div>
            </div><br/>

            

          </div>

          </div>

      </div>

      <div style={{ width:'100%', height:'879.21px'}}>
        <div style={{fontWeight:'700',fontSize:'48px',textAlign:'center', paddingTop:'20px'}}>
          Check us out on social media<br/>

          <img style={{width:'1090px', height:'640px',paddingTop:'45px'}} src='https://s3-alpha-sig.figma.com/img/2519/4058/1315818f579c891fb177fa108ad63fa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XSW5YmyzfPU7wb3vyv2ERLwxCfThwRqyp87unvMw0iw1vlB9vKhrvML3ow26ze3oyMAVUxj4tOx1ZEu9gCeSw8fQAGUnlTCVteCKMxt1h~~IlP5Xer8-74Jkg7l6NucruDivazUTddpggCQapP9lOgw1X5E0F3PH6wg08VARcNo4bj84t4kOsTYze2qjrZUlU~VSVEb1MZLswZyr9k6s3Geew-VsfP0SLNEkG4BhGeLpAU3vOqmQmfD1WB6qO7pFajrvdaLOPzJ63poheRoTs9ViI5D2jcNYtcIqlHNR7Oz96AHCra7CABgUeIszW~H5qtkY5Fchze~q6MTOrwmpJg__'/>
        </div>
      </div>

      <div style={{ width:'100%', height:'579.21px', backgroundColor:'#F6F6F6',display:'flex',justifyContent:'center'}}>
        <div style={{  width:"260px", height:'318px', padding:'10px',marginTop:'111px'}}>
        <img style={{width:'72px',height:'72.06px'}} src='https://s3-alpha-sig.figma.com/img/73bb/8e9f/5320fbdf5582db2998ae52055a27d831?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6cb0BMI2gZDOPO9mlPYVzWlhjmr0QP0z7NgYXEiSO8hMq7YjE6iNdyBEGlR~FuDYBhwfcBqTyaRt93qNNU09X3FUQcwYDePp-a74YkaMw1uM-ZjkWccQoGV3lKML7~UcLEPF3qr05Ts0r-HxrPSgw8EfSWd~eS~Go1dzF7p1~okI3fGhloOsapr23-H16GKdby2nWL7QCJj9S5n-UWoO1XnVvdqAUDbGrygO8WSmB12T1M3F9Wt4hlMC6jfV8PKIQlcO~zhmvTqIMlpA4jBMfDI4zeR3hsS15P4tkxwff5qzpvYCEcQJe2-UOdTgyLKpb9B0QAvfG-VPy0KrFow2A__'/>
        <div style={{fontWeight:'600',fontSize:'18px'}}>
        Ek Bharat Shreshta Bharat<br/>IIIT Bhagalpur
        </div><br/>
        <div style={{fontWeight:'600',fontSize:'24px', marginTop:'30px'}}>Connect with us</div>
        </div>
        <div style={{ width:"160px", height:'242px', padding:'10px',marginLeft:'96px',marginTop:'149px'}}>
          <div style={{fontWeight:'600',fontSize:'36px'}}>Links</div>
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'40px'}}>Past Events</div>
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'25px'}}>Upcoming Events</div>
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'25px'}}>EBSB</div> 
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'25px'}}>IIIT BH</div>
        </div>
        <div style={{ width:"385px", height:'226px', padding:'10px',marginLeft:'96px',marginTop:'157px'}}>
          <div style={{fontWeight:'600',fontSize:'36px'}}>Contact Us</div> 
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'40px'}}>Email- abcd.123@gmail.com</div>
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'25px'}}>Contact-894283783</div>
          <div style={{fontWeight:'600',fontSize:'18px', marginTop:'25px'}}>Indian Institute of Information Technology
            Sabour,Bihar-813210</div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
