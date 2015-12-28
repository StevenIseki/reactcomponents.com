import React, { Component, PropTypes } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {

  render () {
    return (
      <div className={styles.footer}>

            <div className={styles.group}>
              <span>made with </span>

              <span className={styles.icon}>
                <i className='fa fa-1x fa-heart' />
              </span>

              <span> by </span>

              <a target='_blank' 
                 className={styles.blue} 
                 href='http://www.isekivace.nz/'>
                <span>isekivace.</span>
                <span className={styles.blue}>nz</span>
              </a>
            </div>

            <div className={styles.group}>
              <a target='_blank' 
                 className={styles.yellow} 
                 href='https://github.com/StevenIseki/cssmodules.com'>
                <span className={styles.white}>
                  <i className='fa fa-1x fa-github' />
                </span>
              </a>
            </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
