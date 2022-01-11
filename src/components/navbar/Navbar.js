import React,{useState} from 'react'
import { Nav,NavDropDown,Menu,MenuLink,DropButton } from './Navbar.styled';
import { DropdownButton,Dropdown } from "react-bootstrap";
import { useDispatch } from 'react-redux';





export default function Navbar() {
    const currentUser=localStorage.getItem('USER-NAME');
const [isOpen, setIsOpen] = useState(false);
const dispatch = useDispatch();


    return (
      <>
      
   
       <Nav>
      
      <NavDropDown onClick={() => setIsOpen(!isOpen)}>
        <span  className='nav-span' />
        <span  />
        <span  />
        
      </NavDropDown>
      <Menu isOpen={isOpen}>
      <DropButton>        
            <DropdownButton id="dropdown-basic-button"  title="Home">
          <Dropdown.Item href="/" >Manage</Dropdown.Item>
          <Dropdown.Item href="/dashboard">Manage Orders</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>           
          </DropButton>
        <MenuLink href="/features">Features</MenuLink>
        <MenuLink href="/pages">Pages</MenuLink>
        <MenuLink href="/screenshots">ScreenShots</MenuLink>
        <DropButton>        
            <DropdownButton id="dropdown-basic-button"  title="Pricing">
          <Dropdown.Item href="/" >Manage</Dropdown.Item>
          <Dropdown.Item href="/dashboard">Manage Orders</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>           
          </DropButton>
        <MenuLink href="/contact">Contact</MenuLink>
      
        <MenuLink href="/register">Register </MenuLink>
       
        </Menu>   

    </Nav>


 
      </>
    )
}
