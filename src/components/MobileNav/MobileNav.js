import React from 'react';

import { MobileNavContainer, OpenMenu, MobileMenu, CloseMenu, OpenNominations } from './styles';

export default function MobileNav() {
  const openMenu = document.querySelector('.OpenMenu');
  // const mobileMenu = document.querySelector('MobileMenu');
  // const closeMenu = document.querySelector('CloseMenu');
  // const openNominations = document.querySelector('OpenNominations');
  //
  // openMenu.addEventListener('click', () => {
  //   openMenu.style.display = 'none';
  //   mobileMenu.style.display = 'inline-block';
  //   closeMenu.style.display = 'inline-block';
  //   openNominations.style.display = 'none';
  // })
  // closeMenu.addEventListener('click', () => {
  //   openMenu.style.display = 'inline-block';
  //   mobileMenu.style.display = 'none';
  //   openNominations.style.display = 'inline-block';
  // })

  const testFcn = (evt) => {
    console.log("we testing..", evt);
  }

  return (
    <MobileNavContainer>
      <OpenMenu onClick={testFcn} className='OpenMenu'><i class="fas fa-bars"></i></OpenMenu>
      <MobileMenu>
        <p><i class="fas fa-bookmark"></i> Saved</p>
        <p><i class="far fa-id-badge"></i> Contact</p>
        <CloseMenu><i class="fas fa-times"></i></CloseMenu>
      </MobileMenu>
      <OpenNominations><i class="fas fa-trophy"></i></OpenNominations>
    </MobileNavContainer>
  )
}
