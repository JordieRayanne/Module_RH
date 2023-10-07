import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../params/Nav.css';

const Nav = () => {
  return (
    <>
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div className="custom-menu">
					<button type="button" id="sidebarCollapse" className="btn btn-primary">
					<i className="fa fa-bars"></i>
					<span className="sr-only">Toggle Menu</span>
					</button>
				</div>
				<div className="p-4">
		  		<h1><a href="index.html" className="logo">Ressources Humaines. <span>Portfolio Agency</span></a></h1>
	        	<ul className="list-unstyled components mb-5">
				<li className="active">
					<a href="#"><span className="fa fa-home mr-3"></span> Home</a>
				</li>
				<li>
					<a href="#"><span className="fa fa-user mr-3"></span> About</a>
				</li>
				<li>
				<a href="#"><span className="fa fa-briefcase mr-3"></span> Works</a>
				</li>
				<li>
				<a href="#"><span className="fa fa-sticky-note mr-3"></span> Blog</a>
				</li>
				<li>
				<a href="#"><span className="fa fa-suitcase mr-3"></span> Gallery</a>
				</li>
				<li>
				<a href="#"><span className="fa fa-cogs mr-3"></span> Services</a>
				</li>
				<li>
				<a href="#"><span className="fa fa-paper-plane mr-3"></span> Contacts</a>
				</li>
				</ul>

	        	<div className="mb-5">
					<h3 className="h6 mb-3"></h3>
					<form action="#" className="subscribe-form">
	            <div className="form-group d-flex">
	            	<div className="icon"><span className="icon-paper-plane"></span></div>
	              	{/* <input type="text" className="form-control" placeholder="Enter Email Address" /> */}
	            </div>
	         	 </form>
					</div>

				{/* <div className="footer">
					<p>
							Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
					</p>
				</div> */}

	      	</div>
			</nav>
		</div>
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/main.js"></script>
      </>
  );
};

export default Nav;



























    // <nav classNameName="bg-dark sidebar" style={{height: 100+"vh",fontSize:18+"pt"}}>
    //   <ul classNameName="nav flex-column">
    //     <li classNameName="nav-item">
    //       <a classNameName="nav-link text-light" href="#">
    //         Home
    //       </a>
    //     </li>
    //     <li classNameName="nav-item">
    //       <a classNameName="nav-link text-light" href="#">
    //         About
    //       </a>
    //     </li>
    //     <li classNameName="nav-item">
    //       <a classNameName="nav-link text-light" href="#">
    //         Services
    //       </a>
    //     </li>
    //     <li classNameName="nav-item">
    //       <a classNameName="nav-link text-light" href="#">
    //         Contact
    //       </a>
    //     </li>
    //   </ul>
    // </nav>