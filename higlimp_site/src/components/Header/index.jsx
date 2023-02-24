import { Button as ButtonC } from "../Button";
import styles from "./styles.module.css";
import Dropdown from "react-bootstrap/Dropdown";

import { GoThreeBars } from "react-icons/go";
import React from "react";

export const Header = () => {


    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <button
            className={styles.btnToggle}
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </button>
      ));

      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          
      
          return (
            <div
              ref={ref}
              style={{background: 'var(--cadet)', right: '0rem', top: '2rem'}}
              className={className}
              aria-labelledby={labeledBy}
            >
              <ul className="list-unstyled">
                {React.Children.toArray(children)}
              </ul>
            </div>
          );
        },
      );

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div>HIG LIMP</div>
        {window.screen.width >= 600 ? (
          <nav>
            <ButtonC 
              background="green" 
              title="Início"
              ></ButtonC>
            <ButtonC
              background="green"
              title="Serviços"
              onClick={() => (window.location = "#services")}
            ></ButtonC>
            <ButtonC 
              background="green" 
              title="Sobre nós"
              onClick={() => (window.location = "#aboutus")}
              ></ButtonC>
            <ButtonC background="green" title="Contato"></ButtonC>
          </nav>
        ) : (
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <GoThreeBars size={20} color={'var(--orange)'}/>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
              <Dropdown.Item 
                style={{color: 'white'}} 
                href="#/action-1" 
              >
                Início
              </Dropdown.Item>
              <Dropdown.Item 
                style={{color: 'white'}} 
                href="#services"
              >
                Serviços
              </Dropdown.Item>
              <Dropdown.Item 
                style={{color: 'white'}}
                href="#/action-3"
              >
                Sobre nós
              </Dropdown.Item>
              <Dropdown.Item 
                style={{color: 'white'}}
                href="#/action-3"
              >
                Contato
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </header>
  );
};
