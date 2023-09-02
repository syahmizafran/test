
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {auth, db} from "../firebase"
import { useNavigate } from "react-router-dom";
import { doc, addDoc, collection,getDocs, deleteDoc, updateDoc } from "firebase/firestore"; 
  
const Dashboard = () => {
    const [bookTitle, setTitle] = useState('');
    const [bookAuthor, setAuthor] = useState('');
    const [bookDescription, setDesc] = useState('');
    const [bookOwner, setOwner] = useState('');
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    const [val, setVal] = useState([]);
    const dbvalue = collection(db, "books");

    //get all the available books data in the database
    useEffect(()=>{
        const getBooks = async () =>{
            const libr = await getDocs(dbvalue)
            setVal(libr.docs.map(doc=>({...doc.data(),id:doc.id})))

        }
        getBooks()
    }
    )
    
    //adds new books in the database
    const addBook =  (e) => {
        e.preventDefault();
        addDoc(dbvalue,{bookTitle:bookTitle,bookAuthor:bookAuthor,bookDescription:bookDescription,bookOwner:bookOwner})
        window.location.reload();
    }

    //Delete new books in the database
    const handleDelete = async (id) => {
        const deleteBooks = doc(db,"books", id)
        await deleteDoc (deleteBooks)
    }

    //Set the update form
    const handleEdit = async (id,bookTitle,bookAuthor,bookDescription,bookOwner) => {
        setTitle(bookTitle)
        setAuthor(bookAuthor)
        setDesc(bookDescription)
        setOwner(bookOwner)
        setId(id)
        setShow(true);

        $('#modalEdit').modal('show')

    }

    const handleShow = async (id,bookTitle,bookAuthor,bookDescription,bookOwner) => {
        setTitle(bookTitle)
        setAuthor(bookAuthor)
        setDesc(bookDescription)
        setOwner(bookOwner)
        setId(id)
        setShow(true);

        $('#modalShow').modal('show')

    }

    //update the book data
    const handleUpdate = async () => {
        const updateData = doc(db,"books", id)
        await updateDoc (updateData, {bookTitle:bookTitle,bookAuthor:bookAuthor,bookDescription:bookDescription,bookOwner:bookOwner})
    }



  return (
    <section className="">

<div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
 
    
            <div className="col-12 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                <h3 className="text-primary fw-bold text-center mb-4">Book System</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Book Title</th>
                                <th scope="col">Book Author</th>
                                <th scope="col">Book Owner</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                    <tbody>
                            
                {
                    val.map(values=>
                        <>
                        <tr onClick= {()=>handleShow(values.id, values.bookTitle, values.bookAuthor, values.bookDescription, values.bookOwner,)}>
                            <td>{values.bookTitle}</td>
                            <td>{values.bookAuthor}</td>
                            <td>{values.bookOwner}</td>
                            <td><button type="button" className="btn btn-primary" onClick= {()=>handleEdit(values.id, values.bookTitle, values.bookAuthor, values.bookDescription, values.bookOwner,)}>Update</button> <button onClick= {()=>handleDelete(values.id)}  type="button" className="btn btn-danger">Delete</button></td>
                            
                        </tr>
                        </>
                        
                        )
                }
                        
                    </tbody>

                    </table>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add book</button>
                        </div>
                    </div>
                

                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div id= "modalEdit" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="container p-5">
                    <h3 className="text-primary fw-bold text-center mb-4">Add a book to the library</h3>
                    <h4 id="succesfulReg" className="text-success font-weight-light text-center mb-4"></h4>
                        <form onSubmit={addBook}>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input type="text" id="form3Example1" className="form-control" value={bookTitle} onChange = {(e)=> setTitle(e.target.value)}/>
                                <label className="form-label font-weight-bold" htmlFor="form3Example1">Book Title</label>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input type="text" id="form3Example2" className="form-control" value={bookAuthor} onChange = {(e)=> setAuthor(e.target.value)}/>
                                <label className="form-label font-weight-bold" htmlFor="form3Example2">Book Author</label>
                            </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea type="text" id="form3Example3" className="form-control" value={bookDescription} onChange = {(e)=> setDesc(e.target.value)} />
                            <label className="form-label font-weight-bold" htmlFor="form3Example3">Book Description</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="form3Example3" className="form-control" value={bookOwner} onChange = {(e)=> setOwner(e.target.value)} />
                            <label className="form-label font-weight-bold" htmlFor="form3Example3">Email address</label>
                        </div>

                        {!show?
                        <button type="submit" id ="button1" className="btn btn-primary btn-block mb-4 rounded-pill">
                            Add Book
                        </button>:
                        <button type="submit" onClick={handleUpdate} id ="button1" className="btn btn-primary btn-block mb-4 rounded-pill">
                            Edit
                        </button>
                        }
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div id= "modalShow" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="container p-5">
                    <h3 className="text-primary fw-bold text-center mb-4">Add a book to the library</h3>
                    <h4 id="succesfulReg" className="text-success font-weight-light text-center mb-4"></h4>
                        <form onSubmit={addBook}>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input type="text" id="form3Example1" className="form-control" value={bookTitle} onChange = {(e)=> setTitle(e.target.value)} readOnly/>
                                <label className="form-label font-weight-bold" htmlFor="form3Example1">Book Title</label>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input type="text" id="form3Example2" className="form-control" value={bookAuthor} onChange = {(e)=> setAuthor(e.target.value)} readOnly/>
                                <label className="form-label font-weight-bold" htmlFor="form3Example2">Book Author</label>
                            </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea type="text" id="form3Example3" className="form-control" value={bookDescription} onChange = {(e)=> setDesc(e.target.value)} readOnly />
                            <label className="form-label font-weight-bold" htmlFor="form3Example3">Book Description</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="form3Example3" className="form-control" value={bookOwner} onChange = {(e)=> setOwner(e.target.value)} readOnly />
                            <label className="form-label font-weight-bold" htmlFor="form3Example3">Email address</label>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


      </div>


    </section>
   
  );
};
  
export default Dashboard;