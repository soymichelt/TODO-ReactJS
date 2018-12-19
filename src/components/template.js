import React from 'react'
import'./template.css'

const Template = (props) => {
  return (
    <div className={'wrapper'}>
      <div className={'template'}>
        <section className={'section-content'}>
          {props.children}
        </section>
      </div>
    </div>
  );
};

export default Template;