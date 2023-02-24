import { Button as ButtonC } from "../Button";
import styles from "./styles.module.css";
import Dropdown from "react-bootstrap/Dropdown";

import { GoThreeBars } from "react-icons/go";
import React, { useState } from "react";

export const Header = () => {

  const [isHoveringA, setIsHoveringA] = useState(false);
  const [isHoveringB, setIsHoveringB] = useState(false);
  const [isHoveringC, setIsHoveringC] = useState(false);
  const [isHoveringD, setIsHoveringD] = useState(false);

  const handleMouseEnterA = () => {
    setIsHoveringA(true);
  };

  const handleMouseLeaveA = () => {
    setIsHoveringA(false);
  };

  const handleMouseEnterB = () => {
    setIsHoveringB(true);
  };

  const handleMouseLeaveB = () => {
    setIsHoveringB(false);
  };

  const handleMouseEnterC = () => {
    setIsHoveringC(true);
  };

  const handleMouseLeaveC = () => {
    setIsHoveringC(false);
  };

  const handleMouseEnterD = () => {
    setIsHoveringD(true);
  };

  const handleMouseLeaveD = () => {
    setIsHoveringD(false);
  };

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
        {window.screen.width <= 600 ? (
          <nav>
            <ButtonC background="green" title="Início"></ButtonC>
            <ButtonC
              background="green"
              title="Serviços"
              onClick={() => (window.location = "#services")}
            ></ButtonC>
            <ButtonC background="green" title="Sobre nós"></ButtonC>
            <ButtonC background="green" title="Contato"></ButtonC>
          </nav>
        ) : (
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <GoThreeBars size={20} color={'var(--orange)'}/>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
              <Dropdown.Item 
                style={{color: 'white', background: isHoveringA ? 'var(--orange)' : 'var(--cadet)'}} 
                onMouseEnter={handleMouseEnterA}
                onMouseLeave={handleMouseLeaveA}
                href="#/action-1" 
              >
                Início
              </Dropdown.Item>
              <Dropdown.Item 
                style={{color: 'white', background: isHoveringB ? 'var(--orange)' : 'var(--cadet)'}} 
                onMouseEnter={handleMouseEnterB}
                onMouseLeave={handleMouseLeaveB}
                href="#services"
              >
                Serviços
              </Dropdown.Item>
              <Dropdown.Item 
                style={{color: 'white', background: isHoveringC ? 'var(--orange)' : 'var(--cadet)'}}
                onMouseEnter={handleMouseEnterC}
                onMouseLeave={handleMouseLeaveC}
                href="#/action-3"
              >
                Sobre nós
              </Dropdown.Item>
              <Dropdown.Item 
                style={{color: 'white', background: isHoveringD ? 'var(--orange)' : 'var(--cadet)'}}
                onMouseEnter={handleMouseEnterD}
                onMouseLeave={handleMouseLeaveD}
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
