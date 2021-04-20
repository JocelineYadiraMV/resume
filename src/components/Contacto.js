import React from 'react';
import './Contacto.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CakeIcon from '@material-ui/icons/Cake';

const Contacto = () => {
	return(		
		<div className="flex flex-wrap justify-center">
              <div className="pa4">
                  <code><EmailIcon fontSize='large'/></code>
              </div>
              <div className="  mr1">
                  <code>
                    <p className='f4'> jocelineyadira@hotmail.com</p>
                    <p className='f4'> jocelineyadira@gmail.com</p>
                  </code>
              </div>
              <div className=" pa3">
                  <code><LocationOnIcon fontSize='large'/></code>
              </div>
              <div className=" pa1">
                  <code><p className='f4'> Mexico City</p></code>
              </div>
              <div className=" pa3">
                  <code><CakeIcon fontSize='large'/></code>
              </div>
              <div className=" pa1">
                  <code><p className='f4'> 14/10/1996</p></code>
              </div>
        </div> 	   
	);
}

export default Contacto;
