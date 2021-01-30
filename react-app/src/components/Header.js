import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUserAlt,
  faComment,
  faTools,
} from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <header>
      <h1>Crossing Paths</h1>
      <nav>
        <ul>
          <li><i class="fas fa-home"></i></li>
          <li><i class="fas fa-user-alt"></i></li>
          <li><i class="fas fa-comment"></i></li>
          <li><i class="fas fa-tools"></i></li>
        </ul>
      </nav>
    </header>

  );
}