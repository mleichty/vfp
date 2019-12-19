// import React from 'react';
// import fire from "./Fire";
// import Nav from "./Nav";
// import Footer from "./Footer";
// import Header from "./Header";
//
// function Admin() {
//
//     const [values, setValues] = React.useState({
//         name: "",
//         state: "",
//         description: "",
//         location: "",
//         mainPic: "",
//         size: "",
//         flora: "",
//         fauna: "",
//         threats: "",
//         habitats: "",
//         source: "",
//         videoUrl: ""
//     });
//     const [imageArray, updateImageArray] = React.useState(<span>
//         <input type="text" value={0}
//                placeholder="Image Title"/>
//         <input type="text" value={0}
//                placeholder="Image URL"/>
//     </span>);
//     const [counter, updateCounter] = React.useState(1);
//     const [submitted, changeSubmitted] = React.useState(true);
//     // const [newID, updateNewID] = React.useState("");
//
//     let db = fire.firestore();
//
//     const submit = () => {
//         db.collection("forests").add(values).then(function (docRef) {
//             alert("Forest successfully added.");
//             // updateNewID(docRef.id);
//             setValues({
//                 name: "",
//                 state: "",
//                 description: "",
//                 location: "",
//                 mainPic: "",
//                 size: "",
//                 flora: "",
//                 fauna: "",
//                 threats: "",
//                 habitats: "",
//                 source: "",
//                 videoUrl: ""
//             });
//             changeSubmitted(!submitted);
//         });
//     };
//
//     const handleChange = prop => event => {
//         setValues({...values, [prop]: event.target.value});
//     };
//
//     const handleImageChange = prop => event => {
//
//     };
//
//     const deleteDiv = () => {
//
//     };
//
//     let newDiv = <span>
//         <input type="text" value={counter}
//                placeholder="Image Title"/>
//         <input type="text" value={counter}
//                placeholder="Image URL"/>
//                <p className="button" onClick={() => deleteDiv()}>Delete Image</p>
//     </span>;
//     const newImageDiv = () => {
//         console.log("something happened.");
//         updateImageArray(<span> {imageArray} {newDiv} </span>);
//         updateCounter(counter + 1);
//     };
//
//     let submitButton;
//     if (values.name !== "") {
//         submitButton = <p className="button" onClick={() => submit()}>Submit</p>
//     }
//
//     //CONTENT
//     let bg1 = {
//         backgroundImage: "url('images/Forest5.jpg')"
//     };
//
//     let admin_title = "Add Forest";
//
//     return (
//         <div>
//             <Nav/>
//             <div className="background nav__padding" style={bg1}>
//                 <div className="background__filter">
//                     <div className="background__full">
//                         <div
//                             className="background__half background__half--content">
//                             {/*not calling Blackbox component*/}
//                             <div
//                                 className="blackBox form__input form__input--blackBox">
//                                 <Header title={admin_title} h1="true"/>
//                                 <div>
//                                     <input type="text"
//                                            placeholder="Forest Name"
//                                            value={values.name}
//                                            onChange={handleChange('name')}/>
//                                     <input type="text"
//                                            placeholder="Main Image URL"
//                                            value={values.mainPic}
//                                            onChange={handleChange('mainPic')}/>
//                                     <p>Name and Image URL are required.</p>
//                                     <input type="text" placeholder="State"
//                                            value={values.state}
//                                            onChange={handleChange('state')}/>
//                                     <input type="text" placeholder="Location"
//                                            value={values.location}
//                                            onChange={handleChange('location')}/>
//                                     <input type="text" placeholder="Size"
//                                            value={values.size}
//                                            onChange={handleChange('size')}/>
//                                     <input type="text" placeholder="Flora"
//                                            value={values.flora}
//                                            onChange={handleChange('flora')}/>
//                                     <input type="text" placeholder="Fauna"
//                                            value={values.fauna}
//                                            onChange={handleChange('fauna')}/>
//                                     <input type="text" placeholder="Habitats"
//                                            value={values.habitats}
//                                            onChange={handleChange('habitats')}/>
//                                     <input type="text" placeholder="Threats"
//                                            value={values.threats}
//                                            onChange={handleChange('threats')}/>
//                                     <input type="text" placeholder="Source"
//                                            value={values.source}
//                                            onChange={handleChange('source')}/>
//                                     <input type="text" placeholder="Video URL"
//                                            value={values.videoUrl}
//                                            onChange={handleChange('videoUrl')}/>
//                                     <textarea placeholder="Description..."
//                                               value={values.description}
//                                               onChange={handleChange('description')}/>
//                                 </div>
//                                 <div>
//                                     {imageArray}
//                                 </div>
//                                 <p className="button"
//                                    onClick={() => newImageDiv()}>Add Image</p>
//                                 {submitButton}
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     )
// }
//
// export default Admin;