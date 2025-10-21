import React from 'react';
import logo from '../logo.svg';
import styles from '../css/Tag.module.css';

interface TagProps {
  label: string;
}

export function Tag({label} : TagProps) {
  return (
    <div className={styles.Tag}>{label}
    </div>
  );
}
