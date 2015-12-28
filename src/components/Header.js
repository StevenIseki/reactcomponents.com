import React, { Component, PropTypes } from 'react';
import styles from './Header.css';

export default class Header extends Component {

  render () {
    return (
      <div className={styles.header}>

        <div className={styles.wrapper}>
          <div className={styles.react}>
            <div className={styles.inner}></div>
            <div className={styles.innerdot}></div>
          </div>
        </div>

        <p className={styles.description}>
          Search for any react components on npm... 
          make sure you include the 
          <code className={styles.dark}>react-component</code> 
          keyword in your 
          <code className={styles.light}>package.json</code>
        </p>

        

      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
