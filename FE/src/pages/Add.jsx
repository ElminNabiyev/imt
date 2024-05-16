import React from "react";
import { Helmet } from "react-helmet-async";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addDatas } from "../../service/service";

function Add() {
async function addNewData(val) {
  const data=await addDatas(val)
  return data
}

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
       initialValues={{ name: '', price: '', desc: '' ,imgURL:""}}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         price: Yup.number()
           .required('Required'),
         desc: Yup.string()
         .required('Required'),
         imgURL: Yup.string()
         .required('Required'),
       })}
       onSubmit={(values) => {
         setTimeout(() => {
          addNewData(values)
         }, 400);
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <label htmlFor="name">Name</label>
           <input
             id="name"
             type="text"
             {...formik.getFieldProps('name')}
           />
           {formik.touched.name && formik.errors.name ? (
             <div>{formik.errors.name}</div>
           ) : null}
 
           <label htmlFor="price">Price</label>
           <input
             id="price"
             type="number"
             {...formik.getFieldProps('price')}
           />
           {formik.touched.price && formik.errors.price ? (
             <div>{formik.errors.price}</div>
           ) : null}
 
           <label htmlFor="desc">Description</label>
           <input id="desc" type="text" {...formik.getFieldProps('desc')} />
           {formik.touched.desc && formik.errors.desc ? (
             <div>{formik.errors.desc}</div>
           ) : null}
           <label htmlFor="imgURL">IMG </label>
           <input id="imgURL" type="text" {...formik.getFieldProps('imgURL')} />
           {formik.touched.imgURL && formik.errors.imgURL ? (
             <div>{formik.errors.imgURL}</div>
           ) : null}
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </>
  );
}

export default Add;
